import React, {
    useContext,
    useState,
} from 'react';

import TextSize from './Tools/TextSize';
import Font from './Tools/Font';
import Styling from './Tools/Styling';
import Justify from './Tools/Justify';
import Margin from './Tools/Margin';

import { EditorContext } from '../../../../context/EditorContext';

import { makeStyles } from '@material-ui/core/styles';
import { green, amber } from '@material-ui/core/colors';
import { Grid,
    Icon,
    Fab,
    Button,
    Snackbar,
    SnackbarContent,
    Typography,
} from '@material-ui/core';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 20,
        background: '#ffffff',
        position: 'fixed',
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
    const edit = useContext(EditorContext);

    // These will toggle the notification components
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

    // This function will check if the required parameters are passing
    // before passing anything to the database
    const preSubmit = () => {
        switch (true) {
            case !edit.title.text:
                setWarning({ open: true, message: 'Title is required!' });
                break;
            case !edit.description.text:
                setWarning({ open: true, message: 'Description is required!' });
                break;
            case !edit.readLength.text:
                setWarning({ open: true, message: 'Read Length is required!' });
                break;
            case !edit.jumbotron.src:
                setWarning({ open: true, message: 'Jumbotron is required!' });
                break;
            case !edit.body[0].text:
                setWarning({ open: true, message: 'A body section is required!' });
                break;
            case edit.title.isPublished:
                handleChanges();
                break;
            case !edit.title.isPublished:
                handleSubmit();
                break;
            default:
                setError({ open: true, message: 'Something went wrong :(' });
                break;
        }
    };

    // If the preSubmit function passes with no errors or warnings it will
    // then log the current date and store it within the database
    const handleSubmit = () => {
        const now = new Date();
        const date = {
            parsedDate: `${months[now.getMonth()]} ${now.getDate()}`,
            epoch: now.getTime(),
        };
        const data = {
            title: edit.title,
            description: edit.description,
            readLength: edit.readLength,
            jumbotron: edit.jumbotron,
            body: edit.body,
            date,
        };
        fetch('/api/blog/newArticle',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((result) => {
                if (result.error) {
                    return setError({ open: true, message: result.error });
                }
                setSuccess({ open: true, message: 'Article published!' });
                edit.setPublished();
            })
            .catch((error) => { setError({ open: true, message: error }); });
    };

    // If the user has already published the article, this function will then
    // update the article within the database
    const handleChanges = () => {
        const data = {
            title: edit.title,
            description: edit.description,
            readLength: edit.readLength,
            jumbotron: edit.jumbotron,
            body: edit.body,
        };
        fetch('/api/blog/saveChanges', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((result) => {
                if (result.error) {
                    return setError({ open: true, message: result.error });
                }
                setSuccess({ open: true, message: 'Article Saved!' });
            })
            .catch((error) => { setError({ open: true, message: error }); });
    };

    return (
        <Grid
            className={classes.container}
            justify="center"
            alignItems="center"
            container
        >

            <Grid item xs={1}>

                {
                    edit.title.isPublished
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
            <Grid className={classes.editorTools} item xs={11}>

                <TextSize margin={10} />
                
                <Font margin={10} />

                <Styling margin={10} />

                <Justify margin={10} />

                <Margin margin={10} />

            </Grid>

        </Grid>
    );
};

export default Toolbar;
