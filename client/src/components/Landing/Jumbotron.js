import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';

import Image from './imgs/1x/background.png';

const useStyles = makeStyles(theme => ({
    container: {
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
    const theme = useTheme();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const getVariant = () => {
        if(sm) { return 'h2' }
        else { return 'h1' }
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