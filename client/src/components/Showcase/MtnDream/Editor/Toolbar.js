import React, { useContext, useState, Fragment } from 'react';

import TextSize from './Tools/TextSize';
import Font from './Tools/Font';
import Styling from './Tools/Styling';
import Justify from './Tools/Justify';
import Margin from './Tools/Margin';

import { EditorContext } from '../../../../context/EditorContext';
import { AppContext } from '../../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { green, amber } from '@material-ui/core/colors';
import { Grid, Icon, Fab, Button, Snackbar, SnackbarContent, Typography } from '@material-ui/core';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const useStyles = makeStyles(theme => ({
    container: {
        padding: 20,
        background: '#ffffff',
        position: 'fixed',
        top: 70,
        zIndex: 2,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    editorTools: {
        [theme.breakpoints.down('md')]: {
            marginTop: 20,
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%'
    },
    saveContainer: {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    save: {
        position: 'relative',
        backgroundColor: 'rgb(0, 0, 0, 0.2)',
        transition: 'all 0.4s ease',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundColor: 'rgb(0, 0, 0, 0.05)',
        },
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    success: {
        backgroundColor: green[600],
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const Toolbar = () => {

    const classes = useStyles();
    const holder = useContext(EditorContext);
    const media = useContext(AppContext);

    const [error, setError] = useState({
        open: false,
        message: '',
    });
    const [success, setSuccess] = useState({
        open: false,
        message: 'Article saved!'
    });
    const [warning, setWarning] = useState({
        open: false,
        messsage: '',
    });

    const closeError = () => { setError({ open: false, message: '' }); };
    const closeSuccess = () => { setSuccess({ open: false, message: 'Article Saved!' }); };
    const closeWarning = () => { setWarning({ open: false, message: '' }); };

    const preSubmit = () => {
        switch (true) {
            case !holder.title.text:
                setWarning({ open: true, message: 'Title is required!' });
                break;
            case !holder.description.text:
                setWarning({ open: true, message: 'Description is required!' });
                break;
            case !holder.readLength.text:
                setWarning({ open: true, message: 'Read Length is required!' });
                break;
            case !holder.jumbotron.src:
                setWarning({ open: true, message: 'Jumbotron is required!' });
                break;
            case !holder.body[0].text:
                setWarning({ open: true, message: 'A body section is required!' });
                break;
            case holder.title.isPublished:
                handleChanges();
                break;
            case !holder.title.isPublished:
                handleSubmit();
                break;
            default:
                setError({ open: true, message: 'Something went wrong :(' });
                break;
        }
    };

    const handleSubmit = () => {
        const now = new Date();
        const date = {
            parsedDate: `${months[now.getMonth()]} ${now.getDate()}`,
            epoch: now.getTime(),
        };
        const data = {
            title: holder.title,
            description: holder.description,
            readLength: holder.readLength,
            jumbotron: holder.jumbotron,
            body: holder.body,
            date,
        };
        fetch('/api/blog/newArticle',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((result) => {
                if (result.error) { return setError({ open: true, message: result.error }); }
                setSuccess({ open: true, message: 'Article published!' });
                holder.setPublished();
            })
            .catch((error) => {
                setError({ open: true, message: 'Something went wrong :(' });
            });
    };

    const handleChanges = () => {
        const data = {
            title: holder.title,
            description: holder.description,
            readLength: holder.readLength,
            jumbotron: holder.jumbotron,
            body: holder.body,
        };
        fetch('/api/blog/saveChanges', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((result) => {
                if (result.error) { return setError({ open: true, message: result.error }); }
                setSuccess({ open: true, message: 'Article Saved!' });
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                setError({ open: true, message: 'Something went wrong :(' });
            });
    };

    return (
        <Grid className={classes.container} justify="center" alignItems="center" container>

            <Grid className={classes.saveContainer} item lg={1} md={12}>

                {
                    holder.title.isPublished
                        ?
                    <Fab className={classes.save} onClick={preSubmit} variant="extended">
                        <Icon>save</Icon>
                        <Typography style={{ marginLeft: 10 }}>
                            Save
                        </Typography>
                    </Fab>
                        :
                    <Fab className={classes.save} onClick={preSubmit} variant="extended">
                        <Icon>save</Icon>
                        <Typography style={{ marginLeft: 10 }}>
                            Publish
                        </Typography>
                    </Fab>
                }

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={error.open}
                    autoHideDuration={6000}
                    onClose={closeError}
                >
                    <SnackbarContent
                        className={classes.error}
                        message={
                            <Typography className={classes.message}>

                                <Icon style={{ marginRight: 10 }}>
                                    error
                                </Icon>

                                {error.message}

                            </Typography>
                        }
                        action={
                            <Button onClick={closeError}>
                                <Icon>close</Icon>
                            </Button>
                        }
                    />
                </Snackbar>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={success.open}
                    autoHideDuration={6000}
                    onClose={closeSuccess}
                >
                    <SnackbarContent
                        className={classes.success}
                        message={
                            <Typography className={classes.message}>

                                <Icon style={{ marginRight: 10 }}>
                                    check_circle
                                </Icon>

                                {success.message}
                                
                            </Typography>
                        }
                        action={
                            <Button onClick={closeSuccess}>
                                <Icon>close</Icon>
                            </Button>
                        }
                    />
                </Snackbar>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={warning.open}
                    autoHideDuration={6000}
                    onClose={closeWarning}
                >
                    <SnackbarContent
                        className={classes.warning}
                        message={
                            <Typography className={classes.message}>

                                <Icon style={{ marginRight: 10 }}>
                                    check_circle
                                </Icon>

                                {warning.message}
                                
                            </Typography>
                        }
                        action={
                            <Button onClick={closeWarning}>
                                <Icon>close</Icon>
                            </Button>
                        }
                    />
                </Snackbar>

            </Grid>
            <Grid className={classes.editorTools} item lg={11} md={12}>

                <TextSize />
                
                <Font />

                <Styling />

                {
                    !media.md
                        ?
                        <Fragment>
                            <Justify />
        
                            <Margin />
                        </Fragment>
                        :
                    ''
                }


            </Grid>

            {
                media.md
                    ?
                <Grid className={classes.editorTools} item lg={5} md={12}>
                            
                    <Justify />

                    <Margin />
                    
                </Grid>
                    :
                ''
            }

        </Grid>
    );
};

export default Toolbar;
