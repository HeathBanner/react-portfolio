import React from 'react';

import { Grid } from '@material-ui/core';

import { EditorProvider } from '../../../../context/EditorContext';

import Nav from '../Navigation/Nav';
import ArticleSelection from './ArticleSelection';

const EditorSelection = () => {

    return (
        <Grid container>

            <Grid style={{ zIndex: 5, height: 70 }} item xs={12}>
                
                <Nav />

            </Grid>
            
            <EditorProvider>

                <ArticleSelection />

            </EditorProvider>

        </Grid>
    );
};

export default EditorSelection;
