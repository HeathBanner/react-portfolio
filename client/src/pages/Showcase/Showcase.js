import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import Drawer from '../../components/Navigation/Drawer';

import Weather from '../../components/Showcase/Weather/Weather';
import ProfileShell from '../Social/ProfileShell';
import Jumbotron from '../../components/Showcase/Jumbotron/Jumbotron';
import PreviousWork from '../../components/Showcase/PreviousWork/PreviousWork';
import Links from '../../components/Showcase/MtnDream/Links';

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

    const grabWeather = (weather) => {
        const newMood = weather.weather[0].main
        switch (true) {
            case atmosphere.includes(newMood):
                setMood(styles.Atmosphere);
                break;
            case rain.includes(newMood):
                setMood(styles.Rain);
                break;
            default:
                setMood(styles[newMood]);
        }
    };

    return (
        <Grid container>

                <Grid item xs={12}>
                    <Drawer mood={mood.Drawer} />
                </Grid>

                <Grid item xs={12}>
                    <Jumbotron />
                </Grid>

                <PreviousWork />

                <Weather grabWeather={grabWeather} />

                <Links />

                <Grid item xs={12}>
                    <ProfileShell />
                </Grid>

        </Grid>
    );
};

export default Home;
