import React, { useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider } from '@material-ui/core';

import Moment from 'react-moment';
import 'moment-timezone';
import FormatDate from 'moment';

const useStyles = makeStyles(theme => ({
    moduleBox: {
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginBottom: 50,
        },
        width: '70%',
        marginBottom: 100,
        color: 'white',
        backgroundColor: 'rgb(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    weatherBoxes: {
        [theme.breakpoints.down('xs')]: {
            width: '50%',
            height: 220,
        },
        width: '33.3%',
        height: 300,
        padding: 20,
        borderRadius: 0,
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    boxHeader: {
        textTransform: 'capitalize',
        width: '100%'
    },
}));


const WeatherModule = (props) => {
    
    const classes = useStyles();
    const holder = useContext(AppContext);

    const getMomentVariant = () => {
        switch (true) {
            case holder.xs:
                return 'h6';
            case holder.sm:
                return 'h5';
            case holder.md:
                return 'h4';
            default:
                return 'h3'
        }
    };

    const getDescVariant = () => {
        switch (true) {
            case holder.xs:
                return 'h6';
            case holder.md:
                return 'h5';
            default:
                return 'h4'
        }
    };

    const getTempVariant = () => {
        switch (true) {
            case holder.xs:
                return 'body2';
            case holder.md:
                return 'h6';
            default:
                return 'h5'
        }
    };

    return (
        <Paper className={classes.moduleBox}>

            <Typography style={{ width: '100%', padding: '20px 0px 10px 0px' }} variant={holder.sm ? 'h2' : 'h1'} align="center">
                {props.city}
            </Typography>

            <Divider style={{ width: '70%', marginBottom: holder.xs ? 10 : 20 }} />

            {
                props.forecast.map((weather) => (

                    <Paper className={classes.weatherBoxes} key={weather.dt_txt}>

                        <Typography style={{ width: '100%' }} variant={getMomentVariant()} align="center">
                            <Moment className={classes.day} date={FormatDate(weather.dt_txt)} format="dddd" />
                        </Typography>

                        <Divider 
                            style={{
                                width: '70%',
                                borderTop: '1px solid rgba(0,0,0,.1)',
                                margin: holder.xs ? '5px 0px 10px 0px' : '10px 0px 20px 0px',
                            }}
                        />

                        <Typography className={classes.boxHeader} variant={getDescVariant()} align="center">
                            {weather.weather[0].description}
                        </Typography>

                        <img
                            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                            alt="Weather"
                        />

                        <Typography style={{ width: '100%' }} variant={getTempVariant()} align="center">
                            High: {`${Math.round(weather.main.temp_max)}`}&#8457;
                        </Typography>

                        <Typography style={{ width: '100%' }} variant={getTempVariant()} align="center">
                            Low: {`${Math.round(weather.main.temp_min)}`}&#8457;
                        </Typography>

                    </Paper>

                ))
            }                

        </Paper>
    );
}

export default WeatherModule;
