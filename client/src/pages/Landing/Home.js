import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Nav';
import Intro from '../../components/Home/Intro';
import Tech from '../../components/Home/Tech';
import Why from '../../components/Home/Why';
import Projects from '../../components/Home/Projects';
import Contact from '../../components/Home/Contact';

import BottomRight from './imgs/BottomRight.png';
import BottomLeft from './imgs/BottomLeft.png';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    tech: {
        height: '150vh',
        backgroundColor: 'white',
    },
    middleDiv: {
        [theme.breakpoints.down('sm')]: {
            borderWidth: '0 100vw 90px 0',
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '0 100vw 40px 0',
        },
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 100vw 130px 0',
        borderColor: 'transparent white transparent transparent',
        backgroundColor: '#0000a2',
        transform: 'scale(1.0001)',
    },
    bottomDiv: {
        [theme.breakpoints.down('sm')]: {
            borderWidth: '90px 100vw 0 0',
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '40px 100vw 0 0', 
        },
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '130px 100vw 0 0',
        borderColor: 'transparent white transparent transparent',
        backgroundColor: '#0000a2',
        transform: 'scale(1.0001)',
    },
}));

const Home = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} container>

            <Nav />

            <Intro />

            <Grid className={classes.topDiv} item xs={12}></Grid>

            <Tech />

            <Grid className={classes.middleDiv} item xs={12} ></Grid>

            <Why />

            <Grid className={classes.bottomDiv} item xs={12}></Grid>

            <Projects />

            <Contact />

        </Grid>
    );
};

export default Home;
