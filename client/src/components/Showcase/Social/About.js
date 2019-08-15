import React, { useEffect, useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Fab, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, Icon, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    listContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
        width: '70%',
        margin: '30px 0px',
        textOverflow: 'ellipsis',
    },
    editContainer: {
        [theme.breakpoints.down('xs')]: {
            padding: '0px 16px',
        },
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    editBtn: {
        margin: '10px 10px 0px 0px',
    },
    list: {
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            margin: '20px auto',
            borderRadius: '5px',
        },
        marginTop: '20px',
    },  
    cardHeaders: {
        [theme.breakpoints.down('xs')]: {
            left: 16,
            transform: 'translate(0%, 0%)',
            width: 'inherit'
        },
        width: '100%',
        position: 'absolute', 
        bottom: '0%', 
        left: '50%', 
        transform: 'translate(-50%, 0%)',
    },
    listItem: {
        display: 'block'
    },
    secondary: {
        display: 'block',
        margin: '8px 0px',
    },
    textField: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
        fontSize: '1.25rem',
        margin: '10px 0px',
    },
    inputPadding: {
        padding: '0px 0px !important',
    },
    listItemLeft: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center !important',
            alignItems: 'center',
        },
        transition: 'all .4s ease',
        '&:hover': {
            [theme.breakpoints.down('sm')]: {
                transform: 'scale(1.05)',
            },
            transform: 'translate(30px, 0px)',
        },
    },
    edit: {
        background: 'rgb(255, 111, 15)',
        '&:hover': {
            background: 'rgb(255, 145, 71)',
        },
    },
    save: {
        background: 'rgb(46, 204, 14)',
        '&:hover': {
            background: 'rgb(100, 255, 69)',
        },
    },
}));

const About = (props) => {

    const classes = useStyles();
    const holder = useContext(AppContext);

    const [contactInfo, setContactInfo] = React.useState(true);
    const [educationInfo, setEducationInfo] = React.useState(false);
    const [editInfo, setEditInfo] = React.useState(false);
    const [education, setEducation] = React.useState('');
    const [selfTaught, setSelfTaught] = React.useState('');
    const [skills, setSkills] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [linkedIn, setLinkedIn] = React.useState('');
    
    useEffect(() => {
        if (!props.auth) { return }
        setEducation(props.auth.info.education.education)
        setSelfTaught(props.auth.info.education.selfTaught)
        setSkills(props.auth.info.education.skills)
        setEmail(props.auth.info.contact.email)
        setPhone(props.auth.info.contact.phone)
        setLinkedIn(props.auth.info.contact.linkedIn)
    }, []);

    const renderEducation = () => {
        return (
            <Paper className={classes.paper}>
                
                <div className={classes.editContainer}>

                    <Typography className={classes.cardHeaders} variant={holder.xs ? 'h4' : 'h3'} color="primary" align="center">
                        {
                            holder.xs
                                ?
                            'Experience'
                                :
                            'Experience Card'
                        }
                    </Typography>

                    <Fab
                        className={classes.editBtn}
                        size={holder.xs ? 'medium' : 'large'}
                        onClick={() => { editInfo ? saveInfo() : setEditInfo(!editInfo); } }
                    >

                        {
                            editInfo
                                ?
                            <Icon fontSize={holder.xs ? 'small' : 'large'}>done_outline</Icon>
                                :
                            <Icon fontSize={holder.xs ? 'small' : 'large'}>edit</Icon>
                        }

                    </Fab>

                </div>

                <List>

                    <ListItem className={classes.listItem}>

                        <ListItemText
                            primary={
                                <Typography variant={holder.xs ? 'body1' : 'h5'}>
                                    Education
                                </Typography>
                            }
                        />

                        <Divider />

                            {
                                editInfo 
                                    ? 
                                renderAbout(education, 'education') 
                                    : 
                                <Typography className={classes.secondary} variant={holder.xs ? 'body1' : 'h6'} color="textPrimary">
                                    {education}
                                </Typography>
                            }

                    </ListItem>
                    <ListItem className={classes.listItem}>

                        <ListItemText
                            primary={
                                <Typography variant={holder.xs ? 'body1' : 'h5'}>
                                    Self Taught
                                </Typography>
                            }
                        />

                        <Divider />

                        {
                            editInfo 
                                ? 
                            renderAbout(selfTaught, 'selfTaught') 
                                : 
                            <Typography className={classes.secondary} variant={holder.xs ? 'body1' : 'h6'} color="textPrimary">
                                {selfTaught}
                            </Typography>
                        }

                    </ListItem>
                    <ListItem className={classes.listItem}>

                        <ListItemText
                            primary={
                                <Typography variant={holder.xs ? 'body1' : 'h5'}>
                                    Skills
                                </Typography>
                            }
                        />

                        <Divider style={{ marginBlockStart: '5px' }} />

                        {
                            editInfo 
                                ? 
                            renderAbout(skills, 'skills') 
                                : 
                            <Typography className={classes.secondary} variant={holder.xs ? 'body1' : 'h6'} color="textPrimary">
                                {skills}
                            </Typography>
                        }

                    </ListItem>

                </List>

            </Paper>
        );
    };

    const renderContact = () => {

        return (
            <Paper className={classes.paper}>

                <div className={classes.editContainer}>

                    <Typography className={classes.cardHeaders} variant={holder.xs ? 'h4' : 'h3'} color="primary" align="center">
                        {
                            holder.xs
                                ?
                            'Contact'
                                :
                            'Contact Card'
                        }
                    </Typography>

                    <Fab
                        className={classes.editBtn}
                        size={holder.xs ? 'medium' : 'large'}
                        onClick={() => { editInfo ? saveInfo() : setEditInfo(!editInfo); } }
                    >
                        
                        {
                            editInfo
                                ?
                            <Icon fontSize={holder.xs ? 'small' : 'large'}>done_outline</Icon>
                                :
                            <Icon fontSize={holder.xs ? 'small' : 'large'}>edit</Icon>
                        }

                    </Fab>

                </div>

                <List>

                    <ListItem className={classes.listItem}>

                        <ListItemText
                            primary={
                                <Typography variant={holder.xs ? 'body1' : 'h5'}>
                                    Email
                                </Typography>
                            }
                        />

                        <Divider style={{ marginBlockStart: '5px' }} />

                            {
                                editInfo 
                                    ? 
                                renderAbout(email, 'email') 
                                    :
                                <Typography className={classes.secondary} variant={holder.xs ? 'body1' : 'h6'} color="textPrimary">
                                    {email}
                                </Typography>
                            }

                    </ListItem>
                    <ListItem className={classes.listItem}>

                        <ListItemText
                            primary={
                                <Typography variant={holder.xs ? 'body1' : 'h5'}>
                                    Phone
                                </Typography>
                            }
                        />

                        <Divider />

                        {
                            editInfo 
                                ? 
                            renderAbout(phone, 'phone') 
                                :
                            <Typography className={classes.secondary} variant={holder.xs ? 'body1' : 'h6'} color="textPrimary">
                                {phone}
                            </Typography>
                        }

                    </ListItem>
                    <ListItem className={classes.listItem}>

                        <ListItemText
                            primary={
                                <Typography variant={holder.xs ? 'body1' : 'h5'}>
                                    LinkedIn
                                </Typography>
                            }
                        />

                        <Divider />

                        {
                            editInfo 
                                ? 
                            renderAbout(linkedIn, 'linkedIn') 
                                :
                            <Typography className={classes.secondary} variant={holder.xs ? 'body1' : 'h6'} color="textPrimary">
                                {linkedIn}
                            </Typography>
                        }

                    </ListItem>

                </List>

            </Paper>
        ); 
    };

    const renderList = () => {
        if(contactInfo) { return renderContact() }
        if(educationInfo) { return renderEducation() }
    };

    const renderAbout = (state, section) => {
        return (
            <TextField 
                value={state}
                onChange={handleChange}
                fullWidth
                multiline={true}
                name={section}
                inputProps={{className: classes.textField}}
                InputProps={{className: classes.inputPadding}}
            />
        );
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        switch (name) {
            case 'education':
                setEducation(value);
                break;
            case 'selfTaught':
                setSelfTaught(value);
                break;
            case 'skills':
                setSkills(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'linkedIn':
                setLinkedIn(value);
                break;
            default:
                break;
        }
    };

    const saveInfo = () => {
        setEditInfo(false);
        const data = {
            id: props.auth.info._id,
            education,
            selfTaught,
            skills,
            email,
            phone,
            linkedIn
        }
        fetch('/api/social/saveInfo', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        .then();
    };

    const handleClick = (item) => {
        switch (item) {
            case 'contact':
                setContactInfo(true);
                setEducationInfo(false);
                break;
            case 'education':
                setEducationInfo(true);
                setContactInfo(false);
                break;
            default:
                break;
        }
    };

    return (
        <Grid container>

            <Grid item md={4} xs={12}>

                <List  className={classes.list} component="nav">
                     
                    <ListItem className={classes.listItemLeft} button onClick={() => handleClick('contact')}>
                        
                        <ListItemIcon
                            style={{
                                flex: holder.sm ? '0 0 auto' : 'inherit',
                                minWidth: 0,
                                marginRight: 10
                            }}
                        >
                            <Icon fontSize={holder.xs ? 'small' : 'large'}>contacts</Icon>
                        </ListItemIcon>
                        
                        <ListItemText
                            style={{ flex: holder.sm ? '0 0 auto' : 'inherit' }}
                            primary={
                                <Typography variant={holder.xs ? 'h6' : 'h4'}>
                                    Contact Info
                                </Typography>
                            }
                        />

                    </ListItem>

                    <Divider />

                    <ListItem className={classes.listItemLeft} button onClick={() => handleClick('education')}>
                        
                        <ListItemIcon
                            style={{
                                flex: holder.sm ? '0 0 auto' : 'inherit',
                                minWidth: 0,
                                marginRight: 10
                            }}
                        >
                            <Icon fontSize={holder.xs ? 'small' : 'large'}>school</Icon>
                        </ListItemIcon>
                        
                        <ListItemText
                            style={{ flex: holder.sm ? '0 0 auto' : 'inherit' }}
                            primary={
                                <Typography variant={holder.xs ? 'h6' : 'h4'}>
                                    Education
                                </Typography>
                            }
                        />
                    
                    </ListItem> 
                
                </List>

            </Grid>
            <Grid className={classes.listContainer} item md={8} xs={12}>

                {renderList()}

            </Grid>
        </Grid>
    );
};

export default About;