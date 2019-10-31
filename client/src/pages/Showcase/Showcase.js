import React from 'react';

import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Nav';

import Weather from '../../components/Showcase/Weather/Weather';
import ProfileShell from '../Social/ProfileShell';
import Jumbotron from '../../components/Showcase/Jumbotron/Jumbotron';
import Links from '../../components/Showcase/MtnDream/Links';

const Home = () => {

    return (
        <Grid container>

                <Nav />

                <Jumbotron />

                <Weather />

                <Links />

                <Grid item xs={12}>
                    <ProfileShell />
                </Grid>

        </Grid>
    );
};

export default Home;
