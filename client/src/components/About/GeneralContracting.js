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

    return (
        <Fragment>
            <Parallax
                bgImage={require('./imgs/henry-co.png')}
                bgImageAlt="General Contracting"
                strength={200}
            >
                <div className={classes.parallax}>
                    <Paper className={classes.paper}>

                        <Typography className={classes.construction} style={{marginBottom: '10px'}} variant="h2">
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