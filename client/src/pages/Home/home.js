import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import Drawer from '../../components/Navigation/Drawer';

import AppGrid from '../../components/AppCard/Grid';
import Weather from '../../components/Weather/Weather';
import ProfileShell from '../Social/ProfileShell';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

import './home.css';

const atmosphere = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado']
const rain = ['Rain', 'Drizzle']

const styles = {
    Clouds: {
        Drawer: {
            toolbar: 'linear-gradient(45deg, #c7c7c7 30%, #a8a8a8 90%)',
            barTitle: 'white',
            menuButton: 'white',
        }
    },
    Rain: {
        Drawer: {
            toolbar: 'linear-gradient(45deg, #539ad4 30%, #3676aa 90%)',
            barTitle: 'white',
            menuButton: 'white',
        }
    },
    Clear: {
        Drawer: {
            toolbar: 'linear-gradient(45deg, #3cfae7 30%, #21d9c6 90%)',
            barTitle: 'white',
            menuButton: 'white',
        }
    },
    ThunderStorm: {
        Drawer: {
            toolbar: 'linear-gradient(45deg, #f7f379 30%, #dbd623 90%)',
            barTitle: 'white',
            menuButton: 'white',
        }
    },
    Snow: {
        toolbar: 'linear-gradient(45deg, #f7f7f7 30%, #e5e5e5 90%)',
        barTitle: 'rgb(0, 0, 0, 0.8)',
        menuButton: 'rgb(0, 0, 0, 0.8)',
    },
    Atmosphere: {
        toolbar: 'linear-gradient(45deg, #fc694c 30%, #ff5938 90%)',
        barTitle: 'white',
        menuButton: 'white',
    },
}

function Home() {

    const [mood, setMood] = useState('');

    function grabWeather(weather) {
        const newMood = weather.weather[0].main
        if(atmosphere.includes(newMood)){setMood(styles.Atmosphere)}
        else if(rain.includes(newMood)){setMood(styles.Rain)}
        else {setMood(styles[newMood])}
        console.log(styles[newMood].Drawer);   
    }

    return (
        <Grid container>

                <Grid item xs={12}>
                    <Drawer mood={mood.Drawer} />
                </Grid>

                <Grid item xs={12}>
                    <Jumbotron />
                </Grid>

                <Grid item xs={12}>
                    <AppGrid />
                </Grid>

                <Grid item xs={12}>
                    <Weather grabWeather={grabWeather} />
                </Grid>

                <Grid item xs={12}>
                    <ProfileShell />
                </Grid>

        </Grid>
    );
}

export default Home;