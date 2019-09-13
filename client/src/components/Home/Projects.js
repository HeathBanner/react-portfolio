import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Button,
    Divider,
} from '@material-ui/core';

import { AppContext } from '../../context/AuthContext';

import Notification from './Notifications/Notification';

const projectsInit = {
    GameBook: false,
    mtnDream: false,
};

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            padding: 20,
        },
        padding: '10% 20%',
        color: '#0000a2',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    introHeader: {
        width: '100%',
        marginTop: 30,
        marginBottom: 50,
    },
    headers: {
        width: '100%',
    },
    dividers: {
        marginBlockStart: '0.5em',
        width: '70%',
        marginBottom: 20,
    },
    body: {
        marginBottom: 30,  
    },
    links: {
        width: '50%',
        marginBottom: 50,
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        justifyContent: 'center',
    },
    buttons: {
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        padding: 10,
        color: 'white',
        width: '80%',
        backgroundColor: '#0000a2',
        transition: 'all 0.4s ease',
        '&:hover': {
            backgroundColor: '#2424d4',
            transform: 'scale(1.01)',
        },
    },
}));

const Projects = () => {

    const classes = useStyles();
    const media = useContext(AppContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const [projects, setProjects] = useState({ ...projectsInit });

    const handleClick = (e, project) => {
        if (project === 'GameBook') {
            setProjects({ ...projects, GameBook: true });
        } else {
            setProjects({ ...projects, mtnDream: true });
        }
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };
    const handleClose = () =>{
        setProjects({ ...projectsInit });
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography
                className={classes.introHeader}
                variant={media.xs ? 'h4' : 'h3'}
                align="center"
            >
                Projects of 2019
            </Typography>

            <Notification
                handleClose={handleClose}
                id={id}
                anchorEl={anchorEl}
                open={open}
                projects={projects}
            />

            <Typography
                className={classes.headers}
                variant={media.xs ? 'h6' : 'h5'}
                align="center"
            >
                A Mountain Dream
            </Typography>

            <Divider className={classes.dividers} />

            <Typography
                className={classes.body}
                variant={media.xs ? 'body1' : 'h6'}
                align="center"
                color="textSecondary"
            >
                "Mountain Dream is an application built to showcase a rental cabin in
                the mountains of Boone, NC. It uses basic parallax and transform
                animations. What will stand out is the blog editor for
                the future implementation of the blog section. The client will
                be able to maintain their blog without the need of programming.
                By replicating the basic functions of Google Docs they can
                create, edit and delete blog articles."
            </Typography>

            <div className={classes.links}>
                <Button
                    className={classes.buttons}
                    onClick={(e) => handleClick(e, 'mtnDream')}
                >
                    <Typography>
                        Website
                    </Typography>
                </Button>
            </div>
            <a
                href="https://github.com/HeathBanner/MtnDream"
                className={classes.links}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button className={classes.buttons}>
                    <Typography>
                        Repository
                    </Typography>
                </Button>
            </a>

            <Typography
                className={classes.headers}
                variant={media.xs ? 'h6' : 'h5'}
                align="center"
            >
                Game Book
            </Typography>

            <Divider className={classes.dividers} />

            <Typography
                className={classes.body}
                variant={media.xs ? 'body1' : 'h6'}
                align="center"
                color="textSecondary"
            >
                "Game Book is a project currently being built that will cater to the
                "everyday" gamer's needs. A social media application built around using
                game company APIs to allow players to showoff and create guides to help
                on another. Players will also be allowed to form groups to play together
                or share information. Using this application would help compact a lot of
                the information on the internet in to a more singular place while also
                building a community whose goal is to connect and inform."
            </Typography>

            <div
                className={classes.links}
            >
                <Button
                    className={classes.buttons}
                    onClick={(e) => handleClick(e, 'GameBook')}
                >
                    <Typography>
                        Website
                    </Typography>
                </Button>
            </div>
            <a
                href="https://github.com/HeathBanner/MtnDream"
                className={classes.links}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button className={classes.buttons}>
                    <Typography>
                        Repository
                    </Typography>
                </Button>
            </a>

            <Typography
                className={classes.headers}
                variant={media.xs ? 'h6' : 'h5'}
                align="center"            
            >
                Future Scaper
            </Typography>

            <Divider className={classes.dividers} />

            <Typography
                className={classes.body}
                variant={media.xs ? 'body1' : 'h6'}
                align="center"
                color="textSecondary"
            >
                "Future Scaper uses the USDA database to help our users form better and 
                more precise landscaping projects. There are over 40,000 different 
                plants to choose from. Once you have a good idea as to what you want 
                to work with, hope on over to the Planner. From there, you'll be able 
                to choose, drag and drop different plants. This should be able to help 
                you better plan the layout of your landscaping project."
            </Typography>

            <a
                href="https://futurescaper.herokuapp.com/"
                className={classes.links}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button className={classes.buttons}>
                    <Typography>
                        Website
                    </Typography>
                </Button>
            </a>
            <a
                href="https://github.com/HeathBanner/FutureScaper"
                className={classes.links}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button className={classes.buttons}>
                    <Typography>
                        Repository
                    </Typography>
                </Button>
            </a>

        </Grid>
    );
};

export default Projects;
