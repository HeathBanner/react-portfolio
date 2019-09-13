import React, { useState, useContext, Fragment } from 'react';

import { AppContext } from '../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, Snackbar, SnackbarContent, IconButton, Icon, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            padding: '20px 40px',
        },
        width: '60%',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    header: {
        width: '100%',
        color: '#0000a2',
    },
    textFields: {
        marginTop: 20,
        width: '100%',
    },
    button: {
        width: '100%',
        padding: '15px 10px 10px 10px',
        marginTop: '20px',
        color: 'white',
        backgroundColor: '#0000a2',
        transition: 'all .4s ease',
        '&:hover': {
            backgroundColor: '#1f1fc4',
            transform: 'scale(1.01)',
        },
    },
    snackbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginRight: '10px',
    },
}));

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
 
    const classes = useStyles();
    const holder = useContext(AppContext);

    const handleSubmit = () => {
        const data = {
            name,
            email,
            phone,
            message,
        };
        fetch('/api/contact/newContact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then((response) => {
                setOpen(true)
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            });
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Paper className={classes.paper}>

            <Typography
                className={classes.header}
                variant={holder.xs ? 'h4' : 'h3'}
                align="center"
            >
                Contact Me
            </Typography>
            
            <Divider style={{ width: '70%', marginBlockStart: '5px' }} />

                <TextField 
                    variant="outlined"
                    label="Your Name"
                    name="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={classes.textFields}
                    InputLabelProps={{
                        classes: {
                            root: classes.label,
                            focused: classes.focused,
                        }
                    }}
                    InputProps={{
                        classes: {
                            root: classes.outlinedInput,
                            focused: classes.focused,
                            notchedOutline: classes.notchedOutline,
                            input: classes.input,
                        }
                    }}
                />

                <TextField 
                    variant="outlined"
                    label="Your Email"
                    name="Email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.textFields}
                    InputLabelProps={{
                        classes: {
                            root: classes.label,
                            focused: classes.focused
                        }
                    }}
                    InputProps={{
                        classes: {
                            root: classes.outlinedInput,
                            focused: classes.focused,
                            notchedOutline: classes.notchedOutline,
                            input: classes.input,
                        }
                    }}
                />

                <TextField 
                    variant="outlined"
                    label="Your Phone Number"
                    name="Phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={classes.textFields}
                    InputLabelProps={{
                        classes: {
                            root: classes.label,
                            focused: classes.focused
                        }
                    }}
                    InputProps={{
                        classes: {
                        root: classes.outlinedInput,
                        focused: classes.focused,
                        notchedOutline: classes.notchedOutline,
                        input: classes.input,
                        }
                    }}
                />

                <TextField 
                    variant="outlined"
                    label="Message"
                    name="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={classes.textFields}
                    InputLabelProps={{
                        classes: {
                            root: classes.label,
                            focused: classes.focused
                        }
                    }}
                    InputProps={{
                        classes: {
                            root: classes.outlinedInput,
                            focused: classes.focused,
                            notchedOutline: classes.notchedOutline,
                            input: classes.input,
                        }
                    }}
                />

                <Button
                    onClick={handleSubmit}
                    className={classes.button}
                    fullWidth
                    color='secondary'
                >
                    <Typography variant={holder.xs ? 'body1' : 'h6'}>
                        Send
                    </Typography>
                </Button>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >

                <SnackbarContent 
                    message={
                        <Fragment>
                            <Icon className={classes.icon}>check</Icon>
                            <Typography>
                                Your contact information has been saved!
                            </Typography>
                        </Fragment>
                    }
                    action={
                        <IconButton onClick={handleClose}>
                            <Icon style={{color: 'white'}}>close</Icon>
                        </IconButton>
                    }
                    classes={{ message: classes.snackbar }}
                />

            </Snackbar>

        </Paper>
    );
};

export default ContactForm;
