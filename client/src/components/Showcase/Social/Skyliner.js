import React, { Fragment, useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Typography, Fab, Icon } from '@material-ui/core';

import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
    skyliner: {
        [theme.breakpoints.up('sm')]: {
            height: '60vh',  
        },
        [theme.breakpoints.down('sm')]: {
            height: '50vh',
        },
        width: '100%',
        zIndex: 1400,
        position: 'relative',
    },
    skylinerRow: {
        [theme.breakpoints.down('sm')]: {
            height: '50vh',
            display: 'flex',
            alignItems: 'flex-end',    
            justifyContent: 'center',
        },
        height: '60vh',
        display: 'flex',
        alignItems: 'flex-end',
    },
    skylinerContent: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'row',
        flexWrap: 'none',
    },
    profileAvatar: {
        [theme.breakpoints.down('md')]: {
            width: 120,
            height: 120,
            margin: '0px 20px 0px 10px',    
        },
        [theme.breakpoints.down('sm')]: {
            width: 120,
            height: 120,
            margin: '0px 20px 0px 10px',
        },
        [theme.breakpoints.down('xs')]: {
            width: 90,
            height: 90,
            top: 0,
            margin: '0px 10px 0px 10px',
        },
        top: 10,
        width: 120,
        height: 120,
        margin: '0px 20px 0px 10px',
    },
    username: {
        [theme.breakpoints.down('xs')]: {
            bottom: 0,
            left: 110,
        },
        color: 'white',
        position: 'absolute',
        bottom: -10,
        left: 150,
    },
    skylinerDivLeft: {
        [theme.breakpoints.down('xs')]: {
            bottom:  -7,
        },
        display: 'flex',
        alignItems: 'flex-end',
        position: 'relative',
    },
    skylinerDivRight: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
        padding: '0px 20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    Fab: {
        margin: '10px 20px',
    },
}));

const Skyliner = (props) => {
    
    const classes = useStyles();
    const holder = useContext(AppContext);

    const getTop = () => {
        switch (true) {
            case holder.xs:
                return { top: '0%' };
            case holder.lg:
                return { top: '-10%' };
            default:
                return { top: '-40%' };
        }
    };

    if (props.user) {
        return (
            <Fragment>

                <Parallax
                    bgImage={props.user.info.skyline}
                    bgImageAlt="Skyliner"
                    strength={200}
                    className={classes.skyliner}
                    bgImageStyle={getTop()}
                >
                    <Grid container className={classes.skylinerRow}>

                        <Grid item xs={6} className={classes.skylinerContent}>

                            <div className={classes.skylinerDivLeft}>

                                <Avatar
                                    className={classes.profileAvatar}
                                    src={`https://media.licdn.com/dms/image/C5603AQHqTyUqMrqJZA/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=Fwpkf09f2GNerYN2fC12EwcsHYivKOPTtRBhechPva4`}
                                    alt="Heath Banner Profile Picture"
                                />
                                
                                <Typography
                                    display="inline"
                                    variant={holder.xs ? 'h4' : 'h2'}
                                    color="textPrimary"
                                    className={classes.username}
                                >
                                    {props.username}
                                </Typography>

                            </div>

                        </Grid>
                        <Grid item xs={6} className={classes.skylinerContent}>

                            <div className={classes.skylinerDivRight}>

                                <Fab className={classes.Fab}>
                                    <Icon fontSize={holder.sm ? 'small' : 'large'}>person_outline</Icon> 
                                </Fab>  

                            </div>

                        </Grid>

                    </Grid>

                </Parallax>

            </Fragment>
        );
    } else {
        return '';
    }
};

export default Skyliner;
