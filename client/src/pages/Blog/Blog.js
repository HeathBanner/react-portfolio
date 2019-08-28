import React from 'react';

import { EditorProvider } from '../../context/EditorContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Nav from '../../components/Showcase/MtnDream/Navigation/Nav';
import NewArticle from '../../components/Showcase/MtnDream/Blog/NewArticle';
import Latest from '../../components/Showcase/MtnDream/Blog/Latest';

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: 60,
            marginBottom: 40,
        },
        marginTop: 120,
        marginBottom: 80,
        paddingLeft: 40,
        paddingRight: 40,
    },
    articlesContainer: {
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '15%',
            paddingRight: '15%',
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft:'10%',
            paddingRight: '10%',
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        paddingLeft: '25%',
        paddingRight: '25%',
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
                <Grid className={classes.articlesContainer} item xs={12}>

                    <NewArticle />

                    <Latest />
                
                </Grid>

            </EditorProvider>

        </Grid>
    );
};

export default Blog;
