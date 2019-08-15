import React from 'react';

import { Grid } from '@material-ui/core';

import Drawer from '../../components/Navigation/Drawer';
import Jumbotron from '../../components/Landing/Jumbotron';
import Introduction from '../../components/Landing/Introduction';
import Skills from '../../components/Landing/Skills';

const Landing = () => {

    return (
        <Grid style={{background: 'linear-gradient(45deg, #0b8793 30%, #360033 90%)'}} container>

            <Drawer />

            <Jumbotron />

            <Introduction />

            <Skills />

        </Grid>
    );
};

export default Landing;
