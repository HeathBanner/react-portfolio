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
        fontSize: '1.3rem'
    }
}))

function BootCamp() {

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
                bgImage={require('./imgs/shahadat-shemul.png')}
                bgImageAlt="Photography"
                strength={200}
            >
                <div className={classes.parallax}>

                    <Paper className={classes.paper}>

                        <Typography style={{marginBottom: '10px'}}  variant={getVariant()}>
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