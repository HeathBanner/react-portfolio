import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
    Popover,
    Typography,
    Button,
    Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    paper: {
        width: '40%',
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        color: '#0000a2',
        [theme.breakpoints.down('md')]: {
            width: '60%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    dividers: {
        marginBlockStart: '0.5em',
        width: '70%',
    },
    link: {
        width: '80%',
        marginTop: 20,
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mtnLink: {
        marginTop: 20,
        width: '50%',
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        padding: 10,
        color: 'white',
        backgroundColor: '#0000a2',
        transition: 'all 0.4s ease',
        '&:hover': {
            backgroundColor: '#2424d4',
            transform: 'scale(1.01)',
        },
    },
    mtnButton: {
        width: '80%',
        padding: 10,
        color: 'white',
        backgroundColor: '#0000a2',
        transition: 'all 0.4s ease',
        '&:hover': {
            backgroundColor: '#2424d4',
            transform: 'scale(1.01)',
        }, 
    },
}));

const Notification = (props) => {

    const classes = useStyles();

    if (props.projects.GameBook) {
        return (
            <Popover
                id={props.id}
                open={props.open}
                anchorEl={props.anchorEl}
                onClose={props.handleClose}
                PaperProps={{ className: classes.paper }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography
                    align="center"
                    className={classes.typography}
                    variant={props.media.xs ? 'body1' : 'h6'}
                >
                    The website is still in it's pre-Alpha stage.
                    A sample of this application can be found by 
                    clicking on the sample button.
                </Typography>
    
                <Divider className={classes.dividers}/>

                <Link
                    className={classes.link}
                    to="/showcase"
                >
                    <Button className={classes.button}>
                        <Typography>
                            Sample
                        </Typography>
                    </Button>
                </Link>
            </Popover>
        );
    }   
    return (
        <Popover
            id={props.id}
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={props.handleClose}
            PaperProps={{ className: classes.paper }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Typography
                align="center"
                className={classes.typography}
                variant={props.media.xs ? 'body1' : 'h6'}
            >
                The website has been finished but for obvious reasons, you cannot
                use the Blog Editor. I have mirrored it within this application so you
                may play with it.
            </Typography>

            <Divider className={classes.dividers}/>

            <Link
                className={classes.mtnLink}
                to="/blog"
            >
                <Button className={classes.mtnButton}>
                    <Typography>
                        Sample
                    </Typography>
                </Button>
            </Link>
            <a
                href="https://mtndream.herokuapp.com/"
                className={classes.mtnLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button className={classes.mtnButton}>
                    <Typography>
                        Website
                    </Typography>
                </Button>
            </a>
        </Popover>
    );
};

export default Notification;
