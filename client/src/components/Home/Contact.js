import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Icon,
} from '@material-ui/core';

import { AppContext } from '../../context/AuthContext';

import Logo from './imgs/Logo.png';

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            padding: 40,
        },
        padding: 80,
        color: 'white',
        backgroundColor: '#0000a2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    logo: {
        [theme.breakpoints.down('sm')]: {
            width: '30%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '40%',
        },
        width: '15%',
        height: 'auto',
        marginTop: 30,
    },
    contactContainer: {
        width: '100%',
    },
    location: {
        width: '100%',
        marginTop: 40,
    },
    header: {
        width: '100%',
        margin: '30px 0px',
    },
    links: {
        marginBottom: 20,
        textDecoration: 'none',
        color: 'inherit',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        marginRight: 5,
    },
}));

const Contact = () => {

    const classes = useStyles();
    const media = useContext(AppContext);

    return (
        <Grid className={classes.container} item xs={12}>

            <img
                className={classes.logo}
                src={Logo}
                alt="Heath Banner Logo"
            />

            <Typography
                className={classes.location}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                Located In Charlotte, NC
            </Typography>

            <Typography
                className={classes.header}
                variant={media.xs ? 'h4' : 'h3'}
                align="center"
            >
                Contact Me
            </Typography>

            <div className={classes.contactContainer}>

                <a
                    className={classes.links}
                    href="https://www.linkedin.com/in/heath-banner-76b59b187/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i
                        className="fa-lg fab fa-linkedin-in"
                        style={{
                            marginRight: 5,
                        }}
                    ></i>
                    <Typography
                        className={classes.info}
                        align="center"
                        variant={media.xs ? 'body1' : 'h5'}
                    >
                        LinkedIn
                    </Typography>
                </a>

                <a
                    className={classes.links}
                    href="mailto:heathbanner@outlook.com"
                    target="_top"
                    rel="noopener noreferrer"
                >
                    <Icon className={classes.icons}>
                        email
                    </Icon>
                    <Typography
                        className={classes.info}
                        align="center"
                        variant={media.xs ? 'body1' : 'h5'}
                    >
                        Email
                    </Typography>
                </a>

                <a
                    className={classes.links}
                    href="tel:+17049426721"
                >
                    <Icon className={classes.icons}>
                        phone_android
                    </Icon> 
                    <Typography
                        className={classes.info}
                        align="center"
                        variant={media.xs ? 'body1' : 'h5'}
                    > 
                        Phone
                    </Typography>
                </a>

            </div>

        </Grid>
    );
};

export default Contact;
