import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    button: {
        marginTop: 20,
        padding: 15,
        width: '100%',
        color: 'white',
        backgroundColor: 'rgb(0, 0, 0, 0.7)',
        transition: 'background-color 0.4s ease',
        '&:hover': {
            backgroundColor: 'rgb(0, 0, 0, 1)',
        },
    },
}));

const Links = () => {

    const classes = useStyles();
    const media = useContext(AppContext);

    return (
        <Grid className={classes.container} item xs={12}>

            <Typography style={{ width: '100%' }} align="center" variant={media.xs ? 'h3' : 'h1'}>
                Blog Editor Concept
            </Typography>

            <Typography
                style={{
                    width: media.xs ? '80%' : '60%',
                    marginTop: 20,
                }}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
                color="error"
            >
                This project is still under construction. It is responsive up to a screen width
                of 960px due to Material UI breakpoints. I will roll out the updates for lower
                screen widths soon.
            </Typography>

            <Typography
                style={{ 
                    width: media.xs ? '80%' : '60%',
                    marginTop: 20.
                }}
                align="center"
                variant={media.xs ? 'body1' : 'h6'}
            >
                Mountain Dream is an application built to showcase a rental cabin in
                the mountains of Boone, NC. It uses basic parallax and transform
                animations. What will stand out is the blog editor for
                the future implementation of the blog section. The client will
                be able to maintain their blog without the need of programming.
                By replicating the basic functions of Google Docs they can
                create, edit and delete blog articles.
            </Typography>

            <Link
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    width: '70%',
                }}
                to={'/blog'}
            >
                <Button className={classes.button} variant="contained">
                    <Typography variant="h6">
                        A Mountain Dream
                    </Typography>
                </Button>
            </Link>

        </Grid>
    );
};

export default Links;