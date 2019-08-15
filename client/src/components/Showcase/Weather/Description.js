import React, { useState, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Popper, Fade, Typography, Fab, Icon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
    },    
    weatherInfo: {
        [theme.breakpoints.up('md')]: {
            width: '50%',
            height: 450,
            margin: '0px auto',
            padding: '20px 40px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '70%',
            height: 620,
            margin: '0px auto',
            padding: '20px 40px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            height: 520,
            margin: '0px auto',
            padding: '10px 20px',
        },
        width: '70%',
        margin: '0px auto',
        padding: '20px 40px',
        height: 300,
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
    description: {
        marginTop: 20,
    },
    button: {
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            top: 0,
            marginLeft: 20,
        },
        position: 'absolute',
        top: '50%',
        left: 0,
        transition: 'all .4s ease',
        '&:hover': {
            backgroundColor: '#c4c4c4',
            transform: 'scale(1.1)',
        },
    },
}));

const Description = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    
    return (
        <Fragment>

            <Fab 
                className={classes.button}
                aria-describedby={id} 
                onClick={handleClick}
            >
                <Icon fontSize="large">{anchorEl ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</Icon>
            </Fab>

            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="bottom"
                transition
            >
                {({ TransitionProps }) => (

                    <Fade {...TransitionProps} timeout={350}>
                        
                        <Paper className={classes.weatherInfo}>

                            <Typography variant="h5" align="center" className={classes.description}>
                                This concept uses Open Weather Map's 5 day forecast API to render the widgets above.
                                It grabs the weather data from Charlotte, NC by default. The color or mood of the 
                                navigation bar at the top of the screen is based upon the weather of the currently selected city.
                                
                            </Typography>

                            <Typography variant="h5" align="center" className={classes.description}>
                                If the user chooses to change the city, they may do so by selecting the State then City of their choice.
                                It'll search a DB of cities from around the world provided by Open Weather Map. The list
                                isn't specific so it's been narrowed down to a few cities per state within the US. I'm currently
                                searching for a better Database with Coordinates as well as Cities/Provinces and States.
                            </Typography>

                        </Paper>


                    </Fade>
                
                )}

            </Popper>

        </Fragment>
    );
}

export default Description;