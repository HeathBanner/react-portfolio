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
        fontSize: '1.3rem'
    }
}))

function BootCamp() {

    const classes = useStyles();

    return (
        <Fragment>
            <Parallax
                bgImage={require('./imgs/shahadat-shemul.png')}
                bgImageAlt="Photography"
                strength={200}
            >
                <div className={classes.parallax}>
                    <Paper className={classes.paper}>

                        <Typography style={{marginBottom: '10px'}}  variant="h2">
                            Boot Camp
                        </Typography>

                        <Divider style={{marginBottom: '30px'}} />

                        <Typography className={classes.typo}>
                            After dabbling in programming by reading some books, A Crash Course 
                            to Python/Beginning Django, watching a bunch of youtube videos. I 
                            found UNC Programming Bootcamp. My Father, who has made a career out 
                            of programming, decided it was would be a good direction to take. 
                            So here I am. Making this website for Homework at the Bootcamp...
                        </Typography>
                    </Paper>
                </div>
            </Parallax>
        </Fragment>
    );  
}

export default BootCamp;