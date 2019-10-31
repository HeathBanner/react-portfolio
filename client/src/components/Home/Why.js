import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { AppContext } from '../../context/AuthContext';

import Experience from './imgs/why/speed.svg';
import Market from './imgs/why/focus.svg';
import Improvement from './imgs/why/kaizen.svg';

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('md')]: {
            padding: 60,
        },
        [theme.breakpoints.down('sm')]: {
            padding: '50px 20px',
        },
        padding: 100,
        backgroundColor: '#0000a2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    why: {
        marginTop: 20,
        marginBottom: 50,
        color: 'white',
        width: '100%',
    },
    whyContainers: {
        padding: 20,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    banners: {
        width: '50%',
        height: 'auto',
    },
    headers: {
        width: '100%',
        marginBottom: 20,
    },
    body: {
        width: '100%',
    }
}));

const Why = () => {

    const classes = useStyles();
    const media  = useContext(AppContext);

    return (
        <Grid className={classes.container} container>

            <Typography
                className={classes.why}
                variant={media.xs ? 'h4' : 'h3'}
                align="center"
            >
                Why Heath?
            </Typography>

            <Grid
                className={classes.whyContainers}
                xs={12}
                sm={4}
                item
            >

                <img
                    className={classes.banners}
                    src={Experience}
                    alt="Experience Banner"
                />

                <Typography
                    className={classes.headers}
                    variant={media.xs ? 'h5' : 'h4'}
                    align="center"
                >
                    Experience
                </Typography>
                <Typography
                    className={classes.body}
                    align="center"
                    variant={media.xs ? 'body1' : 'h6'}
                >
                    Web development best practices for cleaner and
                    easy to understand code
                </Typography>
            </Grid>
            <Grid
                className={classes.whyContainers}
                xs={12}
                sm={4}
                item
            >

                <img
                    className={classes.banners}
                    src={Market}
                    alt="Market Banner"
                />

                <Typography
                    className={classes.headers}
                    variant={media.xs ? 'h5' : 'h4'}
                    align="center"
                >
                    Time To Market
                </Typography>
                <Typography
                    className={classes.body}
                    align="center"
                    variant={media.xs ? 'body1' : 'h6'}
                >
                    Launch new applications in weeks, not months
                </Typography>
            </Grid>
            <Grid
                className={classes.whyContainers}
                xs={12}
                sm={4}
                item
            >

                <img
                    className={classes.banners}
                    src={Improvement}
                    alt="Improvement Banner"
                />

                <Typography
                    className={classes.headers}
                    variant={media.xs ? 'h5' : 'h4'}
                    align="center"
                >
                    Continuous Improvement
                </Typography>
                <Typography
                    className={classes.body}
                    align="center"
                    variant={media.xs ? 'body1' : 'h6'}
                >
                    Embracing Lean and Kaizen, the Japanese practices for 
                    continuous improvement, allows us to release quickly without 
                    compromising quality
                </Typography>
            </Grid>

        </Grid>
    );
};

export default Why;
