import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
    header: {
        color: 'white',
    },
}));

function Jumbotron() {

    const classes = useStyles();

    return (
        <div className="Jumbotron" style={{zIndex: 1}}>
            <Parallax
                bgImage={require('./imgs/1x/Jumbotron.png')}
                bgImageAlt="Jumbotron"
                strength={200}
            >
                <div style={{height: '400px'}}>
                    <Typography className={classes.header} variant="h2" align="center">
                        {`< Web Development />`}
                    </Typography>
                </div>
            </Parallax>
        </div>
    );
}

export default Jumbotron;