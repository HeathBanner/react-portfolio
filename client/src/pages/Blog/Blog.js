import React from 'react';

import { EditorProvider } from '../../context/EditorContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Nav from '../../components/Showcase/MtnDream/Navigation/Nav';
import NewArticle from '../../components/Showcase/MtnDream/Blog/NewArticle';
import Latest from '../../components/Showcase/MtnDream/Blog/Latest';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 120,
        marginBottom: 80,
    },
    articlesContainer: {
        paddingLeft: '20%',
        paddingRight: 40,
    },
}));

const Blog = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} container>

            <EditorProvider>

                <Grid style={{ height: 60 }} item xs={12}>

                    <Nav isBlog={true} />

                </Grid>
                <Grid className={classes.articlesContainer} item xs={9}>

                    <NewArticle />

                    <Latest />
                
                </Grid>
                <Grid item xs={3}>

                </Grid>

            </EditorProvider>

        </Grid>
    );
};

export default Blog;
