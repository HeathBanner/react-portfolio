import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

import Tilt from 'react-tilt';
import Moment from 'react-moment';
import 'moment-timezone';
import FormatDate from 'moment';

const useStyles = makeStyles(theme => ({
    root: {
        height: 230,
        paddingBottom: 10,
        margin: '50px 20px',
        background: 'linear-gradient(45deg, #ffffff 30%, #e3e3e3 90%)'
    },
    header: {
        background: 'linear-gradient(45deg, #fcdb0d 30%, #fabf32 90%)',
        width: '100%',
        padding: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px 4px 0px 0px',
        paddingLeft: 10,
    },
    weather: {
        textTransform: 'capitalize',
        marginTop: '10px'
    },
    img: {
        display: 'flex',
        justifyContent: 'center',
    },
    city: {
        display: 'flex',
        alignItems: 'center',
    },
    date: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    day: {
        margin: '0 10px'
    },
    monthYear: {
        // margin: '0 10px'
    },
    temp: {
        backgroundColor: 'rgb(94, 188, 255. 0.7)'
    }
}));


const WeatherModule = (props) => {
    
    const classes = useStyles();

    const image =  `https://openweathermap.org/img/w/${props.image}.png`
    var date = FormatDate(props.date)

    return (
        <Paper className={classes.root}>
            <Grid container>
                <Paper className={classes.header}>
                    <Grid item xs={9}>
                        <div className={classes.city}>
                            <Typography variant="h6">
                                {props.city}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <div className={classes.date}>
                                <Typography>
                                    <Moment className={classes.day} date={date} format="dddd" />
                                </Typography>
                                <Typography>
                                    <Moment className={classes.monthYear} date={date} format="MMM YYYY" />
                                </Typography>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center" className={classes.weather}>
                        {props.weather}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Tilt className={classes.img}>
                        <img src={image} alt={props.weather} />
                    </Tilt>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Paper style={{width: 180, margin: '0 auto'}}>
                        <Typography align="center" variant="h6">
                            High: {props.temp_max}&#8457; 
                        </Typography>
                        <Typography align="center">
                            Low: {props.temp_min}&#8457;
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default WeatherModule;