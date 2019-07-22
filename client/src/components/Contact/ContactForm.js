import React, { useState, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, Snackbar, SnackbarContent, IconButton, Icon, Typography } from '@material-ui/core';
import Image from './imgs/luke-chesser.jpg';

const useStyles = makeStyles(theme => ({
    form : {
        backgroundImage: `url(${Image})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        padding: '100px 0px 50px 0px',
        height: '100vh'
    },
    paper: {
        width: '60%',
        padding: '20px 40px',
        [theme.breakpoints.down('lg')]: {
            width: '60%',
            padding: '20px 40px',
        },
        [theme.breakpoints.down('md')]: {
            width: '60%',
            padding: '20px 40px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '60%',
            padding: '20px 40px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            padding: '20px 20px',    
        }
    },
    header: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '3.2rem',  
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',  
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.7rem',  
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.3rem',  
        }

    },
    textFields: {
        marginTop: '20px',
        width: '80%',
    },
    button: {
        padding: '10px',
        marginTop: '20px'
    },
    snackbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginRight: '10px'
    },
    label: {
        '&$focused': {
            color: '#c13bff !important',
        },
    },
    outlinedInput: {
        '&$focused $notchedOutline': {
            borderColor: '#f50057 !important',
        },
        '&:hover $notchedOutline': {
            borderColor: '#f50057 !important',
        }
    },
    focused: {},
    hover: {},
    notchedOutline: {},
}))

function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
 
    const classes = useStyles();

    function handleSubmit(e) {

        e.preventDefault();

        const data = {name: name, email: email, phone: phone, message: message};
        
        fetch('/api/contact/newContact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
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

    function handleClose() {
        setOpen(false);
    }

    return (
        <div className={classes.form}>
            <Paper  className={classes.paper}>
                <Typography className={classes.header} align="center" color="textSecondary" variant="h2">
                    Contact Me
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        variant="outlined"
                        label="Your Name"
                        name="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={classes.textFields}
                        InputLabelProps={{classes: {
                            root: classes.label,
                            focused: classes.focused
                        }}}
                        InputProps={{classes: {
                            root: classes.outlinedInput,
                            focused: classes.focused,
                            hover: classes.hover,
                            notchedOutline: classes.notchedOutline
                        }}}
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
                        InputLabelProps={{classes: {
                            root: classes.label,
                            focused: classes.focused
                        }}}
                        InputProps={{classes: {
                            root: classes.outlinedInput,
                            focused: classes.focused,
                            hover: classes.hover,
                            notchedOutline: classes.notchedOutline
                        }}}
                    />
                    <TextField 
                        variant="outlined"
                        label="Your Phone Number"
                        name="Phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={classes.textFields}
                        InputLabelProps={{classes: {
                            root: classes.label,
                            focused: classes.focused
                        }}}
                        InputProps={{classes: {
                            root: classes.outlinedInput,
                            focused: classes.focused,
                            hover: classes.hover,
                            notchedOutline: classes.notchedOutline
                        }}}
                    />
                    <TextField 
                        variant="outlined"
                        label="Message"
                        name="Message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={classes.textFields}
                        InputLabelProps={{classes: {
                            root: classes.label,
                            focused: classes.focused
                        }}}
                        InputProps={{classes: {
                            root: classes.outlinedInput,
                            focused: classes.focused,
                            hover: classes.hover,
                            notchedOutline: classes.notchedOutline
                        }}}
                    />
                    <Button type="submit" className={classes.button} fullWidth color='secondary' >Send</Button>
                </form>

                <Snackbar
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
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
                        classes={{message: classes.snackbar}}
                    />

                </Snackbar>

            </Paper>
        </div>
    );
}

export default ContactForm;