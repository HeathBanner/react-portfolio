import React, { useEffect, useState, Fragment } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, useMediaQuery, Grid, GridList, GridListTile, Typography, Paper } from '@material-ui/core';

import Search from './Search';
import WeatherModule from './WeatherModule';

import weatherBG from './imgs/1x/weatherBGNew.png'

import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    //   height: '300px',
      overflow: 'hidden',
      width: '100%',
      marginTop: 180
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    weatherSection: {
        [theme.breakpoints.up('md')]: {
            height: '160vh',
        },
        [theme.breakpoints.up('sm')]: {
            height: '170vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '185vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '180vh',
        },
        backgroundImage: `url(${weatherBG})`,
        backgroundSize: 'cover',
        height: '160vh',
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
            fontSize: '5rem',
            marginLeft: '180px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.4rem',
            marginLeft: '180px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
            marginLeft: '120px',
        },
        marginTop: '30px',
        marginLeft: '80px',
    },
    title: {
        marginBottom: 10,
    },
    description: {
        marginTop: 20
    },
  }));
  

function Weather(props) {

    const [weather, setWeather] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [sentRequest, setSentRequest] = useState(false);
    const [parsedForecast, setParsedForecast] = useState(null);

    const classes = useStyles();
    const theme = useTheme();

    const lg = useMediaQuery(theme.breakpoints.up('md'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    function getHeight() {
        if(xs){return 200};
        if(sm){return 250};
        if(md){return 300};
        if(lg){return 300}
    };

    function getListCols() {
        if(xs){return 1.8};
        if(sm){return 2.2};
        if(md){return 2.8};
        if(lg){return 2.8};
    }

    function getTileRows() {
        if(xs){return 1.5};
        if(sm){return 1.2};
        if(md){return 1};
        if(lg){return 1};
    }

    useEffect(() => {
        if (!sentRequest) {
            setSentRequest(true)
            setParsedForecast('')
            fetch('https://api.openweathermap.org/data/2.5/forecast?lat=35.227085&lon=-80.843124&units=imperial&APPID=4216d1350fe31af9bf5100bb34fa72e2')
            .then(res => res.json())
            .then((result) => { 
                setWeather(result);
                setIsLoaded(true);
            });
        }
    })

    if (isLoaded) {
        var dt = '';
        const filteredResult = weather.list.filter(object => {
            if(dt === '') {dt = object.dt_txt.split(' '); dt = dt[0]; return true}
            const sample = object.dt_txt.split(' ')
            if (dt !== sample[0]) {dt = sample[0]; return true}
        })
        setParsedForecast(filteredResult);
        setIsLoaded(false);
        props.grabWeather(filteredResult[0]);
    }

    var weatherInfo = [];

    if (parsedForecast) {
        console.log('PARSED FORECAST')
        weatherInfo = parsedForecast.map((object, index) => {
            return (
            <GridListTile rows={getTileRows()} key={index} >
                <WeatherModule 
                    weather={object.weather[0].description}
                    image={object.weather[0].icon}
                    temp_max={Math.round(object.main.temp_max)}
                    temp_min={Math.round(object.main.temp_min)}
                    city={weather.city.name}
                    country={weather.city.country}
                    date={object.dt_txt}
                />
            </GridListTile>
            )
        })
    } 

    function updateModule(coords) {
        setParsedForecast('');
        console.log(coords)
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0].coord.lat}&lon=${coords[0].coord.lon}&units=imperial&APPID=4216d1350fe31af9bf5100bb34fa72e2`)
        .then(res => res.json())
        .then((result) => {console.log(result); setWeather(result); setIsLoaded(true); });
    }


    return (
        <Fragment>
            <div className={classes.weatherSection}>

                    <Grid item xs={12}>

                        <Typography className={classes.concept} align="center" color="primary" variant="h2">
                            Weather Concept
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>

                        <div className={classes.root}>
                            
                            <GridList cellHeight={getHeight()} className={classes.gridList} cols={getListCols()} spacing={8}>
                                {weatherInfo}
                            </GridList>

                        </div>

                    </Grid>

                    <Grid container>

                        <Grid item md={6} sm={12} xs={12}>
                                <div >
                                    <Search updateModule={updateModule} />
                                </div>
                        </Grid>

                        <Grid item md={6} sm={12} xs={12}>

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

                        </Grid>

                    </Grid>
            </div>
        </Fragment>
    );
}
 
export default Weather;