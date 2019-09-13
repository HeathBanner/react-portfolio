import React, { useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core'

import BG from './imgs/julius-drost.png';

const useStyles = makeStyles(theme => ({
    jumbotron: {
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        width: '100%',
    },
    headerContainer: {
        [theme.breakpoints.down('xs')]: {
            padding: '80px 20px',
        },
        padding: '120px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    header: {
        marginTop: 50,
        color: 'white',
        width: '100%',
    },
    topDiv: {
        [theme.breakpoints.down('sm')]: {
            borderWidth: '90px 100vw 0 0',
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '40px 100vw 0 0', 
        },
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '100px 100vw 0 0',
        borderColor: 'transparent white transparent transparent',
        transform: 'scale(1.0001)',
    },
}));

const Jumbotron = () => {

    const classes = useStyles();
    const holder = useContext(AppContext);

    return (
        <Grid className={classes.jumbotron}>

            <div className={classes.headerContainer}>
                <Typography
                    className={classes.header}
                    variant={holder.sm ? 'h4' : 'h3'}
                    align="center"
                >
                    {`< Show Case />`}
                </Typography>
            </div>

            <div className={classes.topDiv}></div>

        </Grid>
    );
}

export default Jumbotron;
