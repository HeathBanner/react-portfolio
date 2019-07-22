import React, { Fragment } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';

import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
    parallax: {
        [theme.breakpoints.down('lg')]: {
            marginTop: '80px',
            marginLeft: '40px',
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '20px',
            marginLeft: '0px',
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
        // padding: '0px 40px'
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
    const theme = useTheme();

    const lg = useMediaQuery(theme.breakpoints.up('md'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    const getVariant = () => {
        if(xs) { return 'h5' }
        if(sm) { return 'h3' }
        if(md) { return 'h2' }
        if(lg) { return 'h1' }
    };


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