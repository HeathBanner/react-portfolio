import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
    parallax: {
        [theme.breakpoints.down('lg')]: {
            marginTop: '80px',
            marginLeft: '40px',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '30px',
        },
        marginTop: '30px',
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0px 40px'
    },
    paper: {
        padding: '20px'
    },
    typo: {
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize: '4rem'
        },
    }
}));

function Jumbotron() {

    const classes = useStyles();

    return (
        <Fragment>
            <Parallax
                bgImage={require('./imgs/efe-kurnaz.png')}
                bgImageAlt="Photography"
                strength={200}
            >
                <div className={classes.parallax}>
                    <Typography variant="h1" className={classes.typo}>
                        About Me
                    </Typography>
                </div>
            </Parallax>
        </Fragment>
    );
}

export default Jumbotron;