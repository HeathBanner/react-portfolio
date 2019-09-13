import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
} from '@material-ui/core';

import { AppContext } from '../../context/AuthContext';

import ReactLogo from './imgs/React.png';
import MaterialUI from './imgs/MaterialUI.png';
import NodeLogo from './imgs/nodejs.png';
import MongoLogo from './imgs/mongodb.png';

const useStyles = makeStyles((theme) => ({
    tech: {
        [theme.breakpoints.down('sm')]: {
            padding: 50,
        },
        padding: 100,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    header: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: 50,
        },
        marginBottom: 20,
        color: '#0000a2',
        width: '100%',
    },
    techText: {
        color: '#0000a2',
        marginBottom: 20,
        marginTop: 30,
        width: '100%',
    },
    imgs: {
        [theme.breakpoints.down('sm')]: {
            width: '40%',
        },
        width: '20%',
        height: 'auto',
        marginBottom: 40,
    },
}));

const Home = () => {

    const classes = useStyles();
    const media = useContext(AppContext);

    return (
        <Grid className={classes.tech} item xs={12}>

            <Typography
                className={classes.header}
                variant={media.xs ? 'h6' : 'h4'}
                align="center"
            >
                I develop web and mobile applications 
                that allow my customers to gain market share
            </Typography>

            <Typography
                className={classes.techText}
                variant={media.xs ? 'body1' : 'h5'}
                align="center"
            >
                The most used front-end frameworks are React 
                and Material-UI
            </Typography>

            <img
                className={classes.imgs}
                src={ReactLogo}
                alt="React JS logo"
            />

            <img
                className={classes.imgs}
                src={MaterialUI}
                alt="Material UI logo"
            />

            <Typography
                className={classes.techText}
                variant={media.xs ? 'body1' : 'h5'}
                align="center"
            >
                The most used back-end frameworks are Node and MongoDB
            </Typography>

            <img
                className={classes.imgs}
                src={NodeLogo}
                alt="Node JS logo"
            />

            <img
                className={classes.imgs}
                src={MongoLogo}
                alt="Mongod DB logo"
            />

        </Grid>
    );
};

export default Home;
