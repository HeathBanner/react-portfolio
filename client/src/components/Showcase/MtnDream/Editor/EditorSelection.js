import React from 'react';

import { Grid } from '@material-ui/core';

import Nav from '../Navigation/Nav';
import ArticleSelection from './ArticleSelection';

const EditorSelection = () => {

    return (
        <Grid container>
                
            <Nav />

            <ArticleSelection />

        </Grid>
    );
};

export default EditorSelection;
