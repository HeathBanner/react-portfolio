import React, { Fragment } from 'react';
import { Parallax } from 'react-parallax';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    parallax: {
        marginTop: '30px',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
}))

function Jumbotron() {

    const classes = useStyles();

    return (
        <Fragment>
            <Parallax
                bgImage={require('./imgs/denise-bossarte.jpg')}
                bgImageAlt="Jumbotron"
                strength={200}
            >
                <div className={classes.parallax}>
                    <Typography variant="h2">
                        Contact Me
                    </Typography>
                </div>
            </Parallax>
        </Fragment>
    );
}

export default Jumbotron;