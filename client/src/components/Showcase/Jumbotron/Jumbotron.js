import React, { useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

import JumboImage from './imgs/Jumbotron.png';

const useStyles = makeStyles(theme => ({
    jumbotron: {
        backgroundImage: `url(${JumboImage})`,
        backgroundSize: 'cover',
        height: '70vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        [theme.breakpoints.down('lg')]: {
            marginBottom: 80,
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: 100,
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: 150,
        },
        marginBottom: 80,
        color: 'white',
    },
}));

function Jumbotron() {

    const classes = useStyles();
    const holder = useContext(AppContext);

    const getVariant = () => {
        switch (true) {
            case holder.xs:
                return 'h3';
            case holder.sm:
                return 'h2';
            default:
                return 'h1';
        }
    };

    return (
        <div className={classes.jumbotron}>
            <Typography className={classes.header} variant={getVariant()} align="center">
                {`< Show Case />`}
            </Typography>
        </div>
    );
}

export default Jumbotron;