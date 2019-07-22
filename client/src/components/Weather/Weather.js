import React, { useEffect, useState, Fragment } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, useMediaQuery, Grid, GridList, GridListTile, Typography, Paper } from '@material-ui/core';

import Search from './Search';
import WeatherModule from './WeatherModule';
import Description from './Description';

import weatherBG from './imgs/1x/weatherBGNew.png'

import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
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
        });
    } 

    function updateModule(coords) {

        setParsedForecast('');
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0].coord.lat}&lon=${coords[0].coord.lon}&units=imperial&APPID=4216d1350fe31af9bf5100bb34fa72e2`)
        .then(res => res.json())
        .then((result) => {
            setWeather(result); 
            setIsLoaded(true); 
        });
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

                        <Grid item md={12} sm={12} xs={12}>
                                <div >
                                    <Search updateModule={updateModule} />
                                </div>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>

                            <Description />

                        </Grid>

                    </Grid>
            </div>
        </Fragment>
    );
}
 
export default Weather;