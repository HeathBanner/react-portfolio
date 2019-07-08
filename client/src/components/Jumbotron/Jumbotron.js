import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

import JumboImage from './imgs/1x/Jumbotron.png';

const useStyles = makeStyles(theme => ({
    header: {
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

    return (
        <div className={classes.jumbotron}>
            <Typography className={classes.header} variant="h2" align="center">
                {`< Web Development />`}
            </Typography>
        </div>
    );
}

export default Jumbotron;