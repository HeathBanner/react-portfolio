import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core'

import JumboImage from './imgs/1x/Jumbotron.png';

const useStyles = makeStyles(theme => ({
    header: {
        [theme.breakpoints.down('lg')]: {
            marginBottom: 80,
        },
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: 100,
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: 150,
        },

        color: 'white',
    },
    jumbotron: {
        backgroundImage: `url(${JumboImage})`,
        backgroundSize: 'cover',
        height: '70vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
}));

function Jumbotron() {

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
        <div className={classes.jumbotron}>
            <Typography className={classes.header} variant={getVariant()} align="center">
                {`< Web Development />`}
            </Typography>
        </div>
    );
}

export default Jumbotron;