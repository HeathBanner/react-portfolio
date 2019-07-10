import React, { useContext, Fragment, useState, useEffect } from 'react';
import AuthContext from '../../../context/AuthContext';
import Moment from 'react-moment';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Collapse, List, ListItem, ListItemText, ListItemAvatar, Divider, Avatar, Icon, IconButton, CircularProgress} from '@material-ui/core';

import GetMoment from 'moment';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
        paddingTop: '10px',
        paddingBottom: '10px',
        width: '80%',
        margin: '0 auto'
    },
    listItem: {
        marginTop: '20px',
    },
    form: {
        display: 'flex',
        alignItems: 'center',
    },
    Collapse: {
        marginBottom: '20px',
    },
}));

function Timeline(props) {

    const classes = useStyles();
    const auth = useContext(AuthContext);

    const [commentInput, setCommentInput] = useState('');
    const [newComment, setNewComment] = useState({open: false, storyId: ''});

    const [storyIDs, setStoryIDs] = useState({});
    const [stories, setStories] = useState('');
    const [onLoad, setOnLoad] = useState(false);
    const [sorted, setSorted] = useState(false);


    useEffect(() => {
        
        if((auth.isLoaded)&&(auth.newStory)) {
            console.log('AUTH IS LOADED')
            auth.updateLoaded(auth.user, false, false);
            getStories();
            setSorted(false)
        }

        if((!onLoad) && (auth.user)){
            setOnLoad(true)
            console.log('RESET')
            var storyStorage = [];
            let storyIDList = {};
            auth.user.info.authored_stories.map((story, index) => {
                storyIDList[story._id] = false
                storyStorage.push(story);
            });
            storyStorage.sort((a, b) => {
                return new Date(b.time) - new Date(a.time);
            })
            setStoryIDs(storyIDList);
            setSorted(true)
            setStories(storyStorage);
        }   

        if(newComment.open) {
            console.log('NEW COMMENT')
            setNewComment({open: false, storyId: ''});
            var storyStorage = [];
            let storyIDList = {};
            stories.map((story, index) => {
                
                if(story._id === newComment.storyId){
                    storyStorage.push(story); 
                    storyIDList[story._id] = true
                } else {
                    storyIDList[story._id] = false
                    storyStorage.push(story); 
                }
                
            });
            storyStorage.sort((a, b) => {
                return new Date(b.time) - new Date(a.time);
            })
            setStoryIDs(storyIDList);
            setSorted(true)
            setStories(storyStorage);
        }
    });

    function getStories() {
        fetch('/api/social/friendStories', {
            method: 'POST',
            body: JSON.stringify({id: auth.user.info}),
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then((result) => {
            var storyStorage = result;
            var storyIDList = {};
            auth.user.info.authored_stories.map((story, index) => {
                storyIDList[story._id] = false
                storyStorage.push(story);
            });
            storyStorage.sort((a, b) => {
                return new Date(b.time) - new Date(a.time);
            })
            console.log(storyStorage);
            setStories(storyStorage);
            setSorted(true);
            setStoryIDs(storyIDList);
        })
    }
    
    function handleDelete(id) {
        console.log(id);
        fetch('/api/social/deleteStory', {
            method: 'POST',
            body: JSON.stringify({id: id}),
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then((user) => {
            console.log(user);
            // auth.updateAuth(user);
        })
    }

    function handleCommentInput(e) {
        const { value } = e.target;
        setCommentInput(value);
    }

    function handleCommentSubmit(id, username) {
        const time = GetMoment();
        const data = {
            time: time,
            id: id,
            userId: auth.user._id,
            comment: commentInput,
        };
        var newStories = stories;
        newStories.map((item, index) => {
            
            if(item._id === id) {
                newStories[index].comments.push({
                    authored_by: {info: '5d126d136f6f1085c8df8b81', username: username},
                    text: commentInput,
                    type: 'comment',
                    time: time
                });
            }
        })
        console.log(newStories);
        setStories(newStories);
        setNewComment({open: true, storyId: id})
        console.log(data);
        fetch('/api/social/newComment', {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then((user) => {
            setCommentInput('');
        });
    };

    function renderTimeline() {
        if((sorted)&&(!auth.newStory)){
            console.log('RENDER TIMELINE')
        return (
            stories.map((story, index) => (
                <Fragment key={story._id}>
                <Paper>
                    <ListItem className={classes.listItem}>
                        <ListItemAvatar><Avatar alt={story._id} src="/imgs/avatar.jpg" /></ListItemAvatar>
                        <ListItemText 
                            primary={`${story.authored_by.username}: ${story.text}`} 
                            secondary={
                                <Moment date={story.time} format={'dddd h:mm a'} />
                            }
                        >
                        </ListItemText>
                        <IconButton onClick={() => expandComment(story._id)}>
                            <Icon>{storyIDs ? storyIDs[story._id] ? 'expand_less' : 'expand_more' : false}</Icon>
                        </IconButton>
                        <IconButton onClick={() => handleDelete(story._id)}>
                            <Icon>delete_outline</Icon>
                        </IconButton>
                    </ListItem>
                    <Collapse className={classes.collapse} in={storyIDs ? storyIDs[story._id] : false} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {renderComments(story.comments)}
                        </List>
                        <div className={classes.form}>
                            <TextField
                                name='123'
                                value={commentInput}
                                variant="outlined"
                                label="Add a comment"
                                onChange={handleCommentInput}
                            >
                            </TextField>
                                <IconButton onClick={() => handleCommentSubmit(story._id, story.authored_by.username)}>
                                    <Icon>add_circle</Icon>
                                </IconButton>
                        </div>
                    </Collapse>
                    </Paper>
                </Fragment>
            ))
        );          
        } else {return <CircularProgress size={100} color="secondary" thickness={2.6} style={{display: 'block', margin: '40px auto 0px auto'}}  />}
    }

    function renderComments(comments) {
        var commentList = [];
        if(comments.length < 5){commentList = comments.slice(0, comments.length)}
        else{commentList = comments.slice(0, 5)}
        
        return (
            commentList.map((comment, index) => {
                return (  
                    <Fragment key={comment.time}>
                        <Divider />
                        <ListItem key={index}>
                            <ListItemText primary={`${comment.authored_by.username}: ${comment.text}`} secondary={<Moment date={comment.time} format={'dddd h:mm a'} />} />
                        </ListItem>
                    </Fragment>
                );
            })
        );
    };

    function expandComment(id) {
        const newCommentState = !storyIDs[id];
        console.log(newCommentState)
        setStoryIDs({...storyIDs, [id]: newCommentState});
    }

    return (
        <div>
            <List className={classes.root}>
                {renderTimeline()}
            </List>
        </div>
    );
}

export default Timeline;