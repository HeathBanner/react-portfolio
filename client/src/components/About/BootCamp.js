import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Divider } from '@material-ui/core';

import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
    parallax: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0px 40px'
    },
    paper: {
        padding: '20px',
        width: '60%',
        padding: '40px',
    },
    typo: {
        fontSize: '1.3rem'
    }
}))

function BootCamp() {

    const classes = useStyles();

    return (
        <Fragment>
            <Parallax
                bgImage={require('./imgs/shahadat-shemul.png')}
                bgImageAlt="Photography"
                strength={200}
            >
                <div className={classes.parallax}>
                    <Paper className={classes.paper}>

                        <Typography style={{marginBottom: '10px'}}  variant="h2">
                            Boot Camp
                        </Typography>

                        <Divider style={{marginBottom: '30px'}} />

                        <Typography className={classes.typo}>
                            After dabbling in programming by reading some books, A Crash Course 
                            to Python/Beginning Django, watching a bunch of youtube videos. I 
                            found UNC Programming Bootcamp. My Father, who has made a career out 
                            of programming, decided it was would be a good direction to take. 
                            So here I am. Making this website for Homework at the Bootcamp...
                        </Typography>
                    </Paper>
                </div>
            </Parallax>
        </Fragment>
    );  
}

export default BootCamp;