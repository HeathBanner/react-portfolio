import React, { useEffect, useState, useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Search from './Search';
import WeatherModule from './WeatherModule';
import Description from './Description';

import weatherBG from './imgs/1x/weatherBGNew.png'

const useStyles = makeStyles(theme => ({
    weatherSection: {
        [theme.breakpoints.up('lg')]: {
            height: '200vh'
        },
        [theme.breakpoints.down('md')]: {
            height: '180vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '160vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '260vh',
        },
        backgroundImage: `url(${weatherBG})`,
        backgroundSize: 'cover',
        height: '180vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
    },
    headerContainer: {
        [theme.breakpoints.down('xs')]: {
            height: '40vh',
            alignItems: 'center',
        },
        height: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    moduleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    concept: {
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginLeft: 0,
        },
        [theme.breakpoints.down('xs')]: {
            color: 'white',
        },
        marginTop: 30,
        marginLeft: 80,
    },
}));
  
const Weather = (props) => {

    const [weather, setWeather] = useState('');
    const [parsedForecast, setParsedForecast] = useState('');

    const classes = useStyles();
    const holder = useContext(AppContext);

    const getVariant = () => {
        switch (true) {
            case holder.xs:
                return 'h4';
            case holder.sm:
                return 'h3';
            default:
                return 'h1';
        }
    };

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=35.227085&lon=-80.843124&units=imperial&APPID=4216d1350fe31af9bf5100bb34fa72e2')
            .then(res => res.json())
            .then((result) => { 
                setWeather(result);
            });
    }, []);

    useEffect(() => {
        if (!weather) { return }
        let dt = '';
        const filteredResult = weather.list.filter((object) => {
            if(dt === '') {
                dt = object.dt_txt.split(' ');
                dt = dt[0];
                return true;
            }
            const sample = object.dt_txt.split(' ')
            if (dt !== sample[0]) {
                dt = sample[0];
                return true;
            }
        })
        setParsedForecast(filteredResult);
        props.grabWeather(filteredResult[0]);
    }, [weather]);

    function updateModule(coords) {
        setParsedForecast('');
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0].coord.lat}&lon=${coords[0].coord.lon}&units=imperial&APPID=4216d1350fe31af9bf5100bb34fa72e2`)
            .then(res => res.json())
            .then((result) => {
                setWeather(result); 
            });
    };

    return (
        <Grid container className={classes.weatherSection}>

            <Grid className={classes.headerContainer} item xs={12}>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Typography className={classes.concept} color="primary" variant={getVariant()}>
                        Weather Concept
                    </Typography>

                    <Description />

                </div>


            </Grid>
                    
            <Grid className={classes.moduleContainer} item xs={12}>

                {
                    parsedForecast ?

                    <WeatherModule 
                        forecast={parsedForecast}
                        city={weather.city.name}
                        country={weather.city.country}
                    />
                        : 
                    ''
                }

                <Search updateModule={updateModule} />
            
            </Grid>

        </Grid>
    );
};
 
export default Weather;
