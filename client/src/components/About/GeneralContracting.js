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
    },
    construction: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '4rem'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '4rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.6rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.6rem'
        },
    },
}));

function GeneralContracting() {

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
                bgImage={require('./imgs/henry-co.png')}
                bgImageAlt="General Contracting"
                strength={200}
            >
                <div className={classes.parallax}>
                    <Paper className={classes.paper}>

                        <Typography style={{marginBottom: '10px'}} variant={getVariant()}>
                            Construction
                        </Typography>

                        <Divider style={{marginBottom: '30px'}} />

                        <Typography className={classes.typo}>
                            A couple weeks had gone by before a friend of mine had offerd me a 
                            job to help him with general construction. We then began to work 
                            with a general contractor who primarily worked in the Peninsula(Concord, NC). 
                            Learning everything from painting and drywall to installing tile 
                            bathrooms. The person who had taught us to tile gave us a job offer 
                            in Hawai'i. Any sane person without any committments would 
                            graciously accept... so we accepted.
                        </Typography>

                    </Paper>
                </div>
            </Parallax>

        </Fragment>
    );
}

export default GeneralContracting;