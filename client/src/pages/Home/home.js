import React, { useState, useEffect } from 'react';
import AppCard from '../../components/AppCard/Card';
import Drawer from '../../components/Navigation/Drawer';

import Grid from '../../components/AppCard/Grid';
import Weather from '../../components/Weather/Weather';
import ProfileShell from '../Social/ProfileShell';
import Jumbotron from '../../components/Jumbotron/Jumbotron';


import './home.css';

const atmosphere = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado']
const rain = ['Rain', 'Drizzle']

const styles = {
    Clouds: {
        Drawer: {
            toolbar: 'rgb(168, 168, 168)',
            barTitle: 'white',
            menuButton: 'white',
        }
    },
    Rain: {
        Drawer: {
            toolbar: 'rgb(54, 118, 170)',
            barTitle: 'white',
            menuButton: 'white',
        }
    },
    Clear: {
        Drawer: {
            toolbar: 'rgb(37, 237, 217)',
            barTitle: 'white',
            menuButton: 'white',
        }
    },
    ThunderStorm: {
        Drawer: {
            toolbar: 'rgb(219, 214, 57)',
            barTitle: 'white',
            menuButton: 'white',
        }
    },
    Snow: {
        toolbar: 'rgb(229, 229, 229)',
        barTitle: 'rgb(0, 0, 0, 0.8)',
        menuButton: 'rgb(0, 0, 0, 0.8)',
    },
    Atmosphere: {
        toolbar: 'rgb(255, 162, 56)',
        barTitle: 'white',
        menuButton: 'white',
    },
}

function Home() {

    const [mood, setMood] = React.useState('');

    function grabWeather(weather) {
        const newMood = weather.weather[0].main
        if(atmosphere.includes(newMood)){setMood(styles.Atmosphere)}
        else if(rain.includes(newMood)){setMood(styles.Rain)}
        else {setMood(styles[newMood])}
        console.log(styles[newMood].Drawer);   
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 colp">
                    <Drawer mood={mood.Drawer} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 colp">
                    <Jumbotron />
                </div>
            </div>
            <div className="row">
                <div className="col-12 colp">
                    <Grid />
                </div>
            </div>
            <div className="row">
                <div className="col-12 colp">
                    <Weather grabWeather={grabWeather} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 colp">
                    <ProfileShell />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                </div>
            </div>
        </div>
    );
}

export default Home;