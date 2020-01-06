import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AuthContext';

import ProjectCards from './Tools/ProjectCards';
import Notification from './Tools/Notification';
import Json from './Json/projects';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

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
}));

export default () => {

    const classes = useStyles();
    const media = useContext(AppContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const [projects, setProjects] = useState({ ...Json.projectsInit });

    const handleClick = (e, project) => {
        setProjects({ ...projects, [project]: true });
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };
    const handleClose = () =>{
        setProjects({ ...Json.projectsInit });
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
                Projects of 2020
            </Typography>

            {Json.currentYear.map((item, index) => {
                return <ProjectCards
                    item={item}
                    index={index}
                    media={media}
                    handleClick={handleClick}
                />;
            })}

            <Typography
                className={classes.introHeader}
                variant={media.xs ? 'h4' : 'h3'}
                align="center"
            >
                Projects of 2019
            </Typography>

            {Json.lastYear.map((item, index) => {
                return <ProjectCards
                    item={item}
                    index={index}
                    media={media}
                    handleClick={handleClick}
                />;
            })}

            <Notification
                handleClose={handleClose}
                id={id}
                anchorEl={anchorEl}
                open={open}
                projects={projects}
                media={media}
            />
            
        </Grid>
    );
};
