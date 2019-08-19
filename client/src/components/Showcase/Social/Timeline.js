import React, { useContext, Fragment, useState, useEffect } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Collapse, List, ListItem, ListItemText, ListItemAvatar, Divider, Avatar, Icon, IconButton, CircularProgress, Typography} from '@material-ui/core';

import Moment from 'react-moment';
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
    input: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            // padding: '5px 0px',
        },
        fontSize: '1.5rem',
        // padding: '10px 0px',
    },
    underline: {
        '&:before': {
            borderBottom: '1px solid rgb(129, 0, 206) !important',
        },
        '&:after': {
            borderBottom: '2px solid rgb(255, 145, 71) !important',
        },
        '&:hover:before': {
            borderBottom: '2px solid rgb(129, 0, 206) !important',
        },
    },
    label: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
        fontSize: '1.5rem',
        '&.Mui-focused': {
            color: 'rgb(255, 145, 71)'
        },
    },
    Collapse: {
        marginBottom: '20px',
    },
    avatar: {
        height: 60,
        width: 60,
        marginRight: 10,
    },
    iconButton: {
        color: 'rgb(255, 145, 71)',
    }
}));

const Timeline = () => {

    const holder = useContext(AppContext);
    const classes = useStyles();

    const [commentInput, setCommentInput] = useState('');
    const [newComment, setNewComment] = useState('');

    const [storyIDs, setStoryIDs] = useState({});
    const [stories, setStories] = useState('');

    useEffect(() => {
        if (!holder.auth) { return }
        fetch('/api/social/friendStories', {
            method: 'POST',
            body: JSON.stringify({ id: holder.auth.info }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then((result) => {
                let storyStorage = result;
                let storyIDList = {};
                holder.auth.info.authored_stories.map((story) => {
                    storyIDList[story._id] = false;
                    storyStorage.push(story);
                });
                storyStorage.sort((a, b) => {
                    return new Date(b.time) - new Date(a.time);
                });
                setStories(storyStorage);
                setStoryIDs(storyIDList);
            });
    }, [holder.auth]);

    useEffect(() => {
        if (!newComment) { return }
            setNewComment('');
            let storyStorage = [];
            let storyIDList = {};
            stories.map((story) => {
                if (story._id === newComment) {
                    storyStorage.push(story); 
                    storyIDList[story._id] = true
                } else {
                    storyIDList[story._id] = false
                    storyStorage.push(story); 
                }
            });
            storyStorage.sort((a, b) => {
                return new Date(b.time) - new Date(a.time);
            });
            setStoryIDs(storyIDList);
            setStories(storyStorage);
    }, [newComment]);
    
    const handleDelete = (id) => {
        fetch('/api/social/deleteStory', {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {});
    };

    const handleCommentInput = (e) => {
        const { value } = e.target;
        setCommentInput(value);
    };

    const handleCommentSubmit = (id, username) => {
        const time = GetMoment(); 
        const data = {
            time,
            id,
            userId: holder.auth._id,
            comment: commentInput,
        };
        let newStories = stories;
        newStories.map((item, index) => {    
            if(item._id === id) {
                newStories[index].comments.push({
                    authored_by: { info: '5d126d136f6f1085c8df8b81', username },
                    text: commentInput,
                    type: 'comment',
                    time,
                });
            }
        });
        setStories(newStories);
        setNewComment(id);
        fetch('/api/social/newComment', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(() => {
                setCommentInput('');
            });
    };

    const renderTimeline = () => {
        if (stories) {
            return (
                stories.map((story) => (

                    <Paper key={story._id}>

                        <ListItem className={classes.listItem}>

                            <ListItemAvatar>
                                <Avatar
                                    className={classes.avatar}
                                    alt={story._id}
                                    src="./imgs/heath.jpeg"
                                />
                            </ListItemAvatar>

                            <ListItemText 
                                primary={
                                    <Typography variant={holder.xs ? 'body2' : 'h6'}>
                                        {`${story.authored_by.username}: ${story.text}`}
                                    </Typography>
                                } 
                                secondary={<Moment date={story.time} format={'dddd h:mm a'} />}
                            />
                            
                            <IconButton onClick={() => expandComment(story._id)}>
                                <Icon fontSize={holder.xs ? 'small' : 'large'}>
                                    {storyIDs ? storyIDs[story._id] ? 'expand_less' : 'expand_more' : false}
                                </Icon>
                            </IconButton>

                            <IconButton onClick={() => handleDelete(story._id)}>
                                <Icon fontSize={holder.xs ? 'small' : 'large'}>
                                    delete_outline
                                </Icon>
                            </IconButton>

                        </ListItem>

                        <Collapse className={classes.collapse} in={storyIDs ? storyIDs[story._id] : false} timeout="auto" unmountOnExit>
                            
                            <List disablePadding>
                                {renderComments(story.comments)}
                            </List>

                            <div className={classes.form}>

                                <TextField
                                    InputProps={{ classes: {
                                        input: classes.input,
                                        }
                                    }}
                                    InputLabelProps={{ className: classes.label }}
                                    multiline                                
                                    style={{ width: '100%' }}
                                    name='123'
                                    value={commentInput}
                                    variant="outlined"
                                    label="Add a comment"
                                    onChange={handleCommentInput}
                                />

                                <IconButton
                                    className={classes.iconButton}
                                    onClick={() => handleCommentSubmit(story._id, story.authored_by.username)}
                                >
                                    <Icon fontSize={holder.xs ? 'small' : 'large'}>add_circle</Icon>
                                </IconButton>

                            </div>

                        </Collapse>

                    </Paper>
                ))
            );          
        } else { return <CircularProgress size={100} color="secondary" thickness={2.6} style={{display: 'block', margin: '40px auto 0px auto'}}  /> }
    };

    const renderComments = (comments) => {
        let commentList = [];
        if (comments.length < 5) { commentList = comments.slice(0, comments.length) }
        else { commentList = comments.slice(0, 5) }
        return (
            commentList.map((comment, index) => {
                return (  
                    <Fragment key={comment.time}>

                        <Divider />

                        <ListItem key={index}>

                            <ListItemText
                                primary={
                                    <Typography variant={holder.xs ? 'body1' : 'h6'}>
                                        {`${comment.authored_by.username}: ${comment.text}`}
                                    </Typography>
                                }
                                secondary={<Moment date={comment.time} format={'dddd h:mm a'} />} 
                            />
                            
                        </ListItem>

                    </Fragment>
                );
            })
        );
    };

    const expandComment = (id) => {
        const newCommentState = !storyIDs[id];
        setStoryIDs({ ...storyIDs, [id]: newCommentState });
    };

    return (
        <List className={classes.root}>
            {renderTimeline()}
        </List>
    );
};

export default Timeline;
