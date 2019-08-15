import React, { useContext } from 'react';

import { AppContext } from '../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Image from './imgs/1x/background.png';

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('lg')]: {
            height: '85vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '60vh',
        },
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    typo: {
        color: 'white',
    }
}));

const Jumbotron = () => {

    const classes = useStyles();
    const holder = useContext(AppContext);

    const getVariant = () => {
        switch (true) {
            case holder.xs:
                return 'h4';
            case holder.sm:
                return 'h2';
            default:
                return 'h1';
        }
    };

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography className={classes.typo} variant={getVariant()} align="center">
                Welcome To My Portfolio
            </Typography>

        </Grid>
    );
};

export default Jumbotron;