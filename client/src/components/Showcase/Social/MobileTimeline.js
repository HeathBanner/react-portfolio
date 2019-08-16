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
        margin: '0 auto',
    },
    listItem: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
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

const MobileTimeline = () => {
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
                            <ListItemText primary={
                                <Typography variant="body1">
                                    {`${comment.authored_by.username}: ${comment.text}`}
                                </Typography>
                                }
                                secondary={
                                    <Typography color="textSecondary" variant="caption">
                                        <Moment date={comment.time} format={'dddd h:mm a'} />
                                    </Typography>
                                } 
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

    const renderTimeline = () => {
        if (stories) {
            return (
                stories.map((story) => (

                    <Paper key={story._id}>

                        <ListItem className={classes.listItem}>

                            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>

                                <ListItemAvatar>
                                    <Avatar
                                        className={classes.avatar}
                                        alt={story._id}
                                        src={`https://media.licdn.com/dms/image/C5603AQHqTyUqMrqJZA/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=Fwpkf09f2GNerYN2fC12EwcsHYivKOPTtRBhechPva4`}
                                    />
                                </ListItemAvatar>

                                <ListItemText
                                    primary={
                                        <Typography variant="h5">
                                            {story.authored_by.username}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="caption">
                                            <Moment date={story.time} format={'dddd h:mm a'} />
                                        </Typography>
                                    }
                                />

                                <IconButton style={{ padding: 0 }} onClick={() => handleDelete(story._id)}>
                                    <Icon fontSize={holder.xs ? 'small' : 'large'}>
                                        delete_outline
                                    </Icon>
                                </IconButton>
                                
                            </div>

                            <Typography style={{ width: '100%', marginTop: 10 }} variant="body2">
                                {story.text}
                            </Typography>

                            <IconButton
                                style={{ padding: 0, marginTop: 10 }}
                                onClick={() => expandComment(story._id)}
                            >
                                <Typography variant="body1">
                                    Comments
                                </Typography>
                                <Icon fontSize="small">
                                    {storyIDs ? storyIDs[story._id] ? 'expand_less' : 'expand_more' : false}
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
    }

    return (
        <List className={classes.root}>
            {renderTimeline()}
        </List>
    );
};

export default MobileTimeline;