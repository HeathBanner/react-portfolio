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
        padding: '0px 40px',
        [theme.breakpoints.down('xs')]: {
            height: '140vh'
        },
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
    },
}));

function Photography() {

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
                bgImage={require('./imgs/alexander-andrews.png')}
                bgImageAlt="Photography"
                strength={200}
            >
                <div className={classes.parallax}>
                    <Paper className={classes.paper}>

                        <Typography style={{marginBottom: '10px'}} variant={getVariant()}>
                            Photography
                        </Typography>

                        <Divider style={{marginBottom: '30px'}} />

                        <Typography className={classes.typo}>
                            After highschool, my friend who was a photographer for a modeling 
                            agency invited me and a couple of friends to a trip to New York 
                            City. The modeling agency wanted take their models to the city and 
                            help them get signed with even greater agencies in Time Square as 
                            well as doing a bunch of photoshoots to establish connections with 
                            the local artists. This trip inspired me to pick up photography. 
                            I had a lot of experience in photo-manipulation throughout 
                            highschool. Working with the models of Charlotte for a couple years
                            made me realize that there's not much money in this industry and it 
                            lost its spark when I was having to really watch my money. This was 
                            then moved to a hobby instead of a career path.
                        </Typography>
                    </Paper>
                </div>

            </Parallax>
        </Fragment>
    );
}

export default Photography;