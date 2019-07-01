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
        padding: '40px'
    },
    typo: {
        fontSize: '1.3rem'
    }
}));

function Hawaii() {

    const classes = useStyles();

    return (
        <Fragment>
            <Parallax
                bgImage={require('./imgs/rohit-tandon.png')}
                bgImageAlt="Photography"
                strength={200}
            >
                <div className={classes.parallax}>
                    <Paper className={classes.paper}>

                        <Typography style={{marginBottom: '10px'}}  variant="h2">
                            Hawai'i
                        </Typography>

                        <Divider style={{marginBottom: '30px'}} />

                        <Typography className={classes.typo}>
                            Rennovating resorts on the islands of Hawai'i helped me grow as an 
                            individual. Rising through the ranks of the company and becoming 
                            the project manager's go to person. Having the hotel paid for and 
                            company vehicles to drive for leisure. Meeting all kinds of 
                            fascinating people from around the world. Going body surfing for 
                            lunch...it all didn't fill the now hole that has opened. I left my 
                            family in NC and I didn't receive any benefits or retirement 
                            program. At this point, it was quite obvious. I need something more 
                            stable and closer to home.
                        </Typography>

                    </Paper>
                </div>
            </Parallax>
        </Fragment>
    );
}

export default Hawaii;