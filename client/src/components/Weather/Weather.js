import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile, Typography, Paper } from '@material-ui/core';

import Search from './Search';
import WeatherModule from './WeatherModule';

import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      height: '300px',
      overflow: 'hidden',
      width: '100%',
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    weatherInfo: {
        [theme.breakpoints.up('md')]: {
            width: '70%',
            margin: '50px auto',
            padding: '20px 40px',
        },
        [theme.breakpoints.up('sm')]: {
            width: '90%',
            margin: '50px auto',
            padding: '20px 40px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: '20px auto',
            padding: '20px 40px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            margin: '20px auto',
            padding: '10px 20px',
        },
    },
    concept: {
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem'
        },
        marginTop: '30px',
    },
    description: {
    }
  }));
  

function Weather(props) {

    const [weather, setWeather] = useState('');
    const [weatherToday, setWeatherToday] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [sentRequest, setSentRequest] = useState(false);
    const [parsedForecast, setParsedForecast] = useState(null);

    const classes = useStyles();


    useEffect(() => {
        if (!sentRequest) {
            setSentRequest(true)
            fetch('https://api.openweathermap.org/data/2.5/forecast?lat=35.227085&lon=-80.843124&APPID=4216d1350fe31af9bf5100bb34fa72e2')
            .then(res => res.json())
            .then((result) => { 
                var test = result.list[0].main.temp
                console.log(test*9/5-459.67)
        
                console.log(result); setWeather(result); setSentRequest(true); setIsLoaded(true);});
        }
    })

    if (isLoaded) {
        var dt = '';
        const filteredResult = weather.list.filter(object => {
            if(dt === '') {dt = object.dt_txt.split(' '); dt = dt[0]; return true}
            const sample = object.dt_txt.split(' ')
            if (dt !== sample[0]) {dt = sample[0]; console.log(sample[0]); return true}
        })
        setParsedForecast(filteredResult);
        setIsLoaded(false);
        setWeatherToday(filteredResult[0]);
        props.grabWeather(filteredResult[0]);
        console.log(filteredResult[0]);
    }

    var weatherInfo = [];

    if (parsedForecast) {
        console.log('PARSE')
        weatherInfo = parsedForecast.map(object => {
            return (
            <GridListTile >
                <WeatherModule 
                    weather={object.weather[0].description}
                    image={object.weather[0].icon}
                    temp_max={Math.round(object.main.temp_max*9/5-459.67)}
                    temp_min={Math.round(object.main.temp_min*9/5-459.673)}
                    city={weather.city.name}
                    country={weather.city.country}
                    date={object.dt_txt}
                />
            </GridListTile>
            )
        })
    } 

    function updateModule(coords) {
        console.log(coords)
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coords[0].coord.lat}&lon=${coords[0].coord.lon}&units=imperial&APPID=4216d1350fe31af9bf5100bb34fa72e2`)
        .then(res => res.json())
        .then((result) => {console.log(result); setWeather(result); setIsLoaded(true) });
    }


    return (
        <div>
            <Parallax
                bgImage={require('./imgs/gabriele-diwald.png')}
                bgImageAlt="Weather"
                strength={400}
            >
                <div className="weather-section">
                    <div className="row">
                        <div className="col-12">
                           <Typography className={classes.concept} align="center" variant="h2">
                                Weather Concept
                           </Typography>
                        <div className={classes.root}>
                            
                            <GridList cellHeight={'auto'} className={classes.gridList} cols={2} spacing={8}>
                                {weatherInfo}
                            </GridList>
                        </div>
                        </div>
                    </div>
                        <Grid container>
                            <Grid md={6} sm={12} xs={12}>
                                    <div >
                                        <Search updateModule={updateModule} />
                                    </div>
                            </Grid>
                            <Grid md={6} sm={12} xs={12}>
                                <Paper className={classes.weatherInfo}>
                                    <Typography className={classes.description} align="center" variant="h3">
                                        Description
                                    </Typography>
                                    <Typography variant="body1" align="center" className={classes.description}>
                                        This concept uses Open Weather Map's 5 day forecast API to render the widgets above.
                                        It grabs the weather data from Charlotte, NC by default. The color or mood of the 
                                        navigation bar at the top of the screen is based upon the weather of the currently selected city.
                                        If the user chooses to change the city, they may do so by selecting the State then City of their choice.
                                        It'll search a DB of cities from around the world provided by Open Weather Map. The list
                                        isn't specific so it's been narrowed down to a few cities per state within the US. I'm currently
                                        searching for a better Database with Coordinates as well as Cities/Provinces and States.
                                    </Typography>
                                </Paper>
                            </Grid>

                        </Grid>
                </div>
            </Parallax>
        </div>
    );
}
 
export default Weather;