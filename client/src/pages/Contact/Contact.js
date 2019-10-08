import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Nav from '../../components/Navigation/Nav';
import ContactForm from '../../components/Contact/ContactForm';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#002280',
    },
}));

const Contact = () => {

    const classes = useStyles();

    return (
        <Grid container>

            <Grid item xs={12}>

                <Nav />
            
            </Grid>
            <Grid className={classes.container} item xs={12}>

                <ContactForm />

            </Grid>

        </Grid>
    );
};

export default Contact;
