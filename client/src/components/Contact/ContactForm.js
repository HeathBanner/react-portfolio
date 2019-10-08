import React, {
    useState,
    useContext,
} from 'react';

import { AppContext } from '../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    TextField,
    Button,
    Typography,
    Divider,
} from '@material-ui/core';

import SuccessNotification from '../Notifications/SuccessNotification';
import ErrorNotification from '../Notifications/ErrorNotification';
import WarningNotification from '../Notifications/WarningNotification';

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

const initInfo = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

const initNotifications = {
    open: false,
    message: '',
};

const ContactForm = () => {

    const [info, setInfo] = useState({ ...initInfo });
    const [success, setSuccess] = useState({ ...initNotifications });
    const [error, setError] = useState({ ...initNotifications });
    const [warning, setWarning] = useState({ ...initNotifications });
 
    const closeError = () => { setError({ ...initNotifications }); };
    const closeSuccess = () => { setSuccess({ ...initNotifications }); };
    const closeWarning = () => { setWarning({ ...initNotifications }); };

    const classes = useStyles();
    const holder = useContext(AppContext);

    const preSubmit = () => {
        switch (true) {
            case info.name.length < 1:
                return setWarning({
                    open: true,
                    message: 'Name must have at least 2 characters'
                })
            case info.email.length < 2:
                return setWarning({
                    open: true,
                    message: 'Incorrect email!',
                });
            case info.message.length < 2:
                return setWarning({
                    open: true,
                    message: 'Message must have at least 2 characters!',
                });
            default:
                return handleSubmit();
        }
    };

    const handleSubmit = () => {
        fetch('/api/contact/newContact', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then((response) => {
                if (!response) {
                    setError({
                        open: true,
                        message: 'Something went wrong!',
                    });
                }
                setSuccess({
                    open: true,
                    message: response.message,
                });
                setInfo({ ...initInfo });
            })
            .catch(() => {
                setError({
                    open: true,
                    message: 'Something went wrong!',
                });
            });
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
                    value={info.name}
                    onChange={(e) => setInfo({ ...info, name: e.target.value })}
                    className={classes.textFields}
                />

                <TextField 
                    variant="outlined"
                    label="Your Email"
                    name="Email"
                    type="email"
                    required
                    value={info.email}
                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                    className={classes.textFields}
                />

                <TextField 
                    variant="outlined"
                    label="Your Phone Number"
                    name="Phone"
                    required
                    value={info.phone}
                    onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                    className={classes.textFields}
                />

                <TextField 
                    variant="outlined"
                    label="Message"
                    name="Message"
                    required
                    value={info.message}
                    onChange={(e) => setInfo({ ...info, message: e.target.value })}
                    className={classes.textFields}
                />

                <Button
                    onClick={preSubmit}
                    className={classes.button}
                    fullWidth
                    color='secondary'
                >
                    <Typography variant={holder.xs ? 'body1' : 'h6'}>
                        Send
                    </Typography>
                </Button>


            <SuccessNotification
                success={success}
                closeSuccess={closeSuccess}
                holder={holder}
            />
            <ErrorNotification
                error={error}
                closeError={closeError}
                holder={holder}
            />
            <WarningNotification
                warning={warning}
                closeWarning={closeWarning}
                holder={holder}
            />

        </Paper>
    );
};

export default ContactForm;
