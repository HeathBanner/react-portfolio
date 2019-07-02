import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Divider } from '@material-ui/core';

import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
    parallax: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0px 40px'
    },
    paper: {
        padding: '20px',
        width: '60%',
        padding: '40px',
        [theme.breakpoints.down('lg')]: {
            width: '60%',
            padding: '40px',
        },
        [theme.breakpoints.down('md')]: {
            width: '60%',
            padding: '40px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            padding: '40px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            padding: '20px',
        },
    },
    typo: {
        fontSize: '1.3rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.3rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.3rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem'
        },
    }
}))

function HighSchool() {

    const classes = useStyles();

    return (
        <Fragment>
            <Parallax
                bgImage={require('./imgs/alexandre-debieve.png')}
                bgImageAlt="HighSchool"
                strength={200}
            >
                <div className={classes.parallax}>
                    <Paper className={classes.paper}>

                        <Typography style={{marginBottom: '10px'}}  variant="h2">
                            High School
                        </Typography>

                        <Divider style={{marginBottom: '30px'}} />

                        <Typography className={classes.typo}>
                            I was born and raised in Charlotte, NC. Growing up, I eventually picked up on 
                            technology in highschool. The Xbox360 really ignited the flame within me. 
                            Going from a regular gamer to becoming a moderator on a very famous game 
                            modding website(The Tech Game). A friend and I had released the first modded 
                            file for Call of Duty BlackOps Zombies, a week before the game was even released.
                        </Typography>
                    </Paper>
                </div>

            </Parallax>
        </Fragment>
    );
}

export default HighSchool;