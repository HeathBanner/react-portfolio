import React, {
    useContext
} from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Grid,
    Divider,
} from '@material-ui/core'

import BG from './imgs/tobias.png';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        height: 'calc(100vh + 130px)',
        width: '100%',
        color: 'white',
        padding: '0 25%',
        [theme.breakpoints.down('md')]: {
            padding: '0 15%',
        },
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh + 90px)', 
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            height: 'calc(100vh + 40px)',
        },
    },
   header: {
        marginBottom: 10,
        color: 'white',
        width: '100%',
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '50%',
        marginBottom: 60,
        backgroundColor: 'rgb(255, 255, 255, 0.2)',  
    },
    body: {
        width: '100%',
    },
    topDiv: {
        [theme.breakpoints.down('sm')]: {
            borderWidth: '90px 100vw 0 0',
            bottom: -90,
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '40px 100vw 0 0', 
            bottom: -40,
        },
        position: 'absolute',
        bottom: -130,
        left: 0,
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
        <Grid className={classes.container}>

            <Typography
                className={classes.header}
                variant={holder.sm ? 'h4' : 'h3'}
                align="center"
            >
                Show Case
            </Typography>

            <Divider className={classes.divider} />

            <Typography
                className={classes.body}
                align="center"
                variant={holder.xs ? 'body1' : 'h6'}
            >
                Below are samples of my previous work mirrored within this web application
            </Typography>

            <div className={classes.topDiv}></div>

        </Grid>
    );
};

export default Jumbotron;
