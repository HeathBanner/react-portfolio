import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
    parallax: {
        marginTop: '30px',
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0px 40px'
    },
    paper: {
        padding: '20px'
    },
    typo: {
        // fontSize: 'rem'
        color: 'white',
    }
}));

function Jumbotron() {

    const classes = useStyles();

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