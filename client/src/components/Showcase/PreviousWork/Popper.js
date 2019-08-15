import React, { useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Fab, Typography, Slide, Icon } from '@material-ui/core';

const linkData = {
    futureScaper: {
        repo: `https://github.com/HeathBanner/FutureScaper`,
        website: `https://futurescaper.herokuapp.com/`,
    },
    mtnDream: {
        repo: `https://github.com/HeathBanner/MtnDream`,
        website: `https://mtndream.herokuapp.com/`,
    },
    rps: {
        repo: `https://github.com/HeathBanner/RPS`,
        website: `https://heathbanner.github.io/RPS/`,
    },
};

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            paddingRight: 0,
        },
        width: '100%',
        position: 'absolute',
        paddingRight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    links: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'center',
        },
        '&:hover': {
            textDecoration: 'none',
        },
    },
    buttons: {
        transition: 'transform .4s ease',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
}));

const DescPopper = (props) => {

    const classes = useStyles();
    const holder = useContext(AppContext);

    if (props.link) { 
        return (
            <Slide
                direction="right"
                in={props.check[props.link]}
                mountOnEnter
                unmountOnExit
            >
                
                <div className={classes.container}>
    
                    <a
                        href={linkData[props.link].website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginRight: holder.sm ? 0 : 20 }}
                        className={classes.links}
                    >
                        <Fab className={classes.buttons} variant="extended">
                            <Typography variant={holder.xs ? 'h6' : 'h4'} align="center" className={classes.description}>
                                Website
                            </Typography>
                            <Icon fontSize="large">arrow_forward_ios</Icon>
                        </Fab>
                    </a>
    
                    <a
                        href={linkData[props.link].repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.links}
                    >
                        <Fab className={classes.buttons} size="large" variant="extended">
                            <Typography variant={holder.xs ? 'h6' : 'h4'} align="center" className={classes.description}>
                                Repo
                            </Typography>
                            <Icon fontSize="large">arrow_forward_ios</Icon>
                        </Fab>
                    </a>
    
                </div>
    
            </Slide>
    
        );
    } else {
        return ('')
    }
};

export default DescPopper;