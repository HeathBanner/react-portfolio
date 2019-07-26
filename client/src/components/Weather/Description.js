import React, { useState, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper, Popper, Fade, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '20px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    typography: {
        padding: theme.spacing(2),
    },    
    weatherInfo: {
        [theme.breakpoints.up('md')]: {
            width: '70%',
            margin: '50px auto',
            padding: '20px 40px',
        },
        [theme.breakpoints.up('sm')]: {
            width: '70%',
            margin: '50px auto',
            padding: '20px 40px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '70%',
            margin: '20px auto',
            padding: '20px 40px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '70%',
            margin: '20px auto',
            padding: '10px 20px',
        },
        padding: 20,
    },
    title: {
        marginBottom: 10,
    },
    description: {
        marginTop: 20,
    },
}));

const Description = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    
    return (
        <div className={classes.root}>

            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                Information
            </Button>

            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="top"
                transition
            >
                {({ TransitionProps }) => (

                    <Fade {...TransitionProps} timeout={350}>
                        
                        <Paper className={classes.weatherInfo}>

                            <Typography className={classes.title} align="center" color="textSecondary" variant="h3">
                                Description
                            </Typography>

                            <Divider />

                            <Typography variant="body1" align="center" className={classes.description}>
                                This concept uses Open Weather Map's 5 day forecast API to render the widgets above.
                                It grabs the weather data from Charlotte, NC by default. The color or mood of the 
                                navigation bar at the top of the screen is based upon the weather of the currently selected city.
                                
                            </Typography>

                            <Typography variant="body1" align="center" className={classes.description}>
                                If the user chooses to change the city, they may do so by selecting the State then City of their choice.
                                It'll search a DB of cities from around the world provided by Open Weather Map. The list
                                isn't specific so it's been narrowed down to a few cities per state within the US. I'm currently
                                searching for a better Database with Coordinates as well as Cities/Provinces and States.
                            </Typography>

                        </Paper>


                    </Fade>
                
                )}

            </Popper>

        </div>
    );
}

export default Description;