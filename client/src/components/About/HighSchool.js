import React, { Fragment } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Paper, Divider, useMediaQuery } from '@material-ui/core';

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
        width: '60%',
        padding: '40px',
        [theme.breakpoints.down('lg')]: {
            width: '60%',
            padding: '40px',
        },
        [theme.breakpoints.down('md')]: {
            width: '70%',
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
            fontSize: '1rem'
        },
    }
}))

function HighSchool() {

    const classes = useStyles();
    const theme = useTheme();

    const lg = useMediaQuery(theme.breakpoints.up('md'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    const getVariant = () => {
        if(xs) { return 'h4' }
        if(sm) { return 'h3' }
        if(md) { return 'h2' }
        if(lg) { return 'h2' }
    };

    return (
        <Fragment>
            <Parallax
                bgImage={require('./imgs/alexandre-debieve.png')}
                bgImageAlt="HighSchool"
                strength={200}
            >
                <div className={classes.parallax}>
                    <Paper className={classes.paper}>

                        <Typography style={{marginBottom: '10px'}}  variant={getVariant()}>
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