import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Button,
} from '@material-ui/core';

import { AppContext } from '../../context/AuthContext';

import BG from './imgs/reset.jpg';
import Logo from './imgs/Logo.png';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: 60,
        color: 'white',
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    introContainer: {
        [theme.breakpoints.down('sm')]: {
            padding: 20,
        },
        marginBottom: 50,
        padding: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    logo: {
        [theme.breakpoints.down('sm')]: {
            width: '60%',
        },
        width: '30%',
        height: 'auto',
    },
    header: {
        margin: '20px 0px',
        width: '100%',
    },
    body: {
        width: '100%',
        marginTop: 20,
    },
    button: {
        marginTop: 40,
        padding: 15,
        color: '#0000a2',
        background: 'white',
        transition: 'all 0.4s ease',
        '&:hover': {
            backgroundColor: '#e0e0e0',
            transform: 'scale(1.01)',
        },
    },
    topDiv: {
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
        transform: 'scale(1.0001)',
    },
}));

const Intro = () => {

    const classes = useStyles();
    const media = useContext(AppContext);

    return (
        <Grid
            className={classes.container}
            item
            xs={12}
        >
            <div className={classes.introContainer}>
                
                <img
                    className={classes.logo}
                    src={Logo}
                    alt="Heath Banner Logo"
                />

                <Typography
                    className={classes.header}
                    variant={media.xs ? 'h5' : 'h4'}
                    align="center"
                >
                    Develop successful web, mobile applications 
                    in weeks, not months
                </Typography>

                <Typography
                    className={classes.body}
                    variant={media.xs ? 'body1' : 'h6'}
                    align="center"
                >
                    using my full-stack knowledge to bring together the tech, the talent 
                    and the experience to develop your web and mobile 
                    applications in record time
                </Typography>

                <Button className={classes.button}>
                    <Typography variant={media.xs ? 'body2' : 'body1'}>
                        Discuss your project with me
                    </Typography>
                </Button>
            </div>

            <div className={classes.topDiv}></div>

        </Grid>
    );
};

export default Intro;
