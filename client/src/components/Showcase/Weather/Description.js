import React, { useState, useContext, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Popover,
    Fade,
    Typography,
    Fab,
    Icon,
} from '@material-ui/core';

import { AppContext } from '../../../context/AuthContext';

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
    },    
    weatherInfo: {
        width: '70%',
        margin: '0px auto',
        padding: '20px 40px',
        zIndex: 1900,
        position: 'relative',
        overflowY: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    title: {
        marginBottom: 10,
    },
    paper: {
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        color: '#0000a2',
    },
    description: {
        marginTop: 20,
    },
    button: {
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
        },
        marginTop: 30,
        marginLeft: 20,
        transition: 'all .4s ease',
        '&:hover': {
            backgroundColor: '#c4c4c4',
            transform: 'scale(1.1)',
        },
    },
}));

const Description = () => {

    const classes = useStyles();
    const media = useContext(AppContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };
    const handleClose = () =>{ setAnchorEl(null); };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    
    return (
        <Fragment>

            <Fab 
                className={classes.button}
                aria-describedby={id} 
                onClick={handleClick}
                size={media.xs ? 'small' : 'large'}
            >
                <Icon
                    fontSize={media.xs ? 'small' : 'large'}
                >
                    {anchorEl ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                </Icon>
            </Fab>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="bottom"
                onClose={handleClose}
                PaperProps={{ className: classes.paper }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography
                    className={classes.description}
                    variant={media.xs ? 'body1' : 'h6'}
                    align="center"
                >
                    This concept uses Open Weather Map's 5 day forecast API to render the widgets above.
                    It grabs the weather data from Charlotte, NC by default. The color or mood of the 
                    navigation bar at the top of the screen is based upon the weather of the currently selected city.
                    
                </Typography>

                <Typography
                    className={classes.description}
                    variant={media.xs ? 'body1' : 'h6'}
                    align="center"
                >
                    If the user chooses to change the city, they may do so by selecting the State then City of their choice.
                    It'll search a DB of cities from around the world provided by Open Weather Map. The list
                    isn't specific so it's been narrowed down to a few cities per state within the US. I'm currently
                    searching for a better Database with Coordinates as well as Cities/Provinces and States.
                </Typography>

            </Popover>

        </Fragment>
    );
}

export default Description;