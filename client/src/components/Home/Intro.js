import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Button,
    Divider,
} from '@material-ui/core';

import { AppContext } from '../../context/AuthContext';

import BG from './imgs/reset.jpg';
import Logo from './imgs/Logo.png';

const useStyles = makeStyles((theme) => ({
    container: {
        color: 'white',
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        height: 'calc(100vh + 130px)',
        padding: '0 25%',
        [theme.breakpoints.down('md')]: {
            padding: '0 15%',
        },
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh + 90px)', 
        },
        [theme.breakpoints.down('xs')]: {
            padding: 40,
            height: 'calc(100vh + 40px)',
        },
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
        marginTop: 40,
        marginBottom: 10,
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            marginTop: 20,
            marginBottom: 0,
        },
    },
    divider: {
        marginBlockStart: '0.5em',
        width: '50%',
        marginBottom: 60,
        backgroundColor: 'rgb(255, 255, 255, 0.2)',
        [theme.breakpoints.down('xs')]: {
            marginBottom: 30,
        },
    },
    body: {
        width: '100%',
    },
    link: {
        marginTop: 40,
        textDecoration: 'none',
        color: 'inherit',
    },
    button: {
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
            bottom: -90,
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '40px 100vw 0 0', 
            bottom: -40
        },
        bottom: -130,
        position: 'absolute',
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

                <Divider className={classes.divider} />

                <Typography
                    className={classes.body}
                    variant={media.xs ? 'body1' : 'h6'}
                    align="center"
                >
                    using my full-stack knowledge to apply the tech and my talent 
                    and experience to develop your web and mobile 
                    applications in record time
                </Typography>

                <Link className={classes.link} to="/contact">
                    <Button className={classes.button}>
                        <Typography variant={media.xs ? 'body2' : 'body1'}>
                            Discuss your project with me
                        </Typography>
                    </Button>
                </Link>
            </div>

            <div className={classes.topDiv}></div>

        </Grid>
    );
};

export default Intro;
