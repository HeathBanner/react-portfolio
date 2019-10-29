import React from 'react';

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
        },
        paddingBottom: 40,
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
        marginTop: '15%',
    },
}));

const Blog = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} container>

            <Nav isBlog={true} />

            <Grid className={classes.articlesContainer} item xs={12}>

                <NewArticle />

                <Latest />
            
            </Grid>

        </Grid>
    );
};

export default Blog;
