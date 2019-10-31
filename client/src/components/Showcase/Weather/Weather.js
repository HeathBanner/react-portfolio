import React, {
    useEffect,
    useState,
    useContext,
} from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Search from './Search';
import WeatherModule from './WeatherModule';
import Description from './Description';

const useStyles = makeStyles((theme) => ({
    weatherSection: {
        paddingTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: 'white',
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    moduleContainer: {
        marginTop: 50,
        paddingBottom: 80,
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
        color: '#0000a2',
        marginTop: 30,
        marginLeft: 80,
    },
    bottomDiv: {
        [theme.breakpoints.down('sm')]: {
            borderWidth: '0 100vw 90px 0',
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '0 100vw 40px 0', 
        },
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 100vw 130px 0',
        borderColor: 'transparent white transparent transparent',
        backgroundColor: '#0000a2',
        transform: 'scale(1.0001)',
    },
}));
  
const Weather = (props) => {

    const [weather, setWeather] = useState('');
    const [parsedForecast, setParsedForecast] = useState('');

    const classes = useStyles();
    const media = useContext(AppContext);

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

     const updateModule = (coords) => {
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

                <Typography
                    className={classes.concept}
                    variant={media.xs ? 'h5' : 'h4'}
                >
                    Weather Concept
                </Typography>

                <Description />

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

            <div className={classes.bottomDiv}></div>

        </Grid>
    );
};
 
export default Weather;
