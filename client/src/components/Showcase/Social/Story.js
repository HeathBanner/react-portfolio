import React, { Fragment, useContext, useState } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { TextField, Icon, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'black !important',
    },
    postStory: {
        marginLeft: '10px',
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        margin: '20px auto',
    },
    textField: {
        width: '80%',
    },
    input: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            padding: '5px 0px',
        },
        fontSize: '1.5rem',
        padding: '10px 0px',
    },
    underline: {
        '&:before': {
            borderBottom: '1px solid rgb(129, 0, 206) !important',
        },
        '&:after': {
            borderBottom: '2px solid rgb(255, 145, 71) !important',
        },
        '&:hover:before': {
            borderBottom: '2px solid rgb(129, 0, 206) !important',
        },
    },
    label: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
        fontSize: '1.5rem',
    },
}));

const Story = () => {
    
    const classes = useStyles();
    const holder = useContext(AppContext);
    
    const [story, setStory] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        setStory(value);
    };

    const handleStoryPost = () => {
        const userId = holder.auth._id;
        const infoId = holder.auth.info._id;
        const time = Moment();
        fetch('/api/social/newStory', {
            method: 'POST',
            body: JSON.stringify({ userId, infoId, story, time }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then((user) => {
                setStory('');
                holder.getNewStory();
            });
    };

    return (
        <Fragment>

            <div className={classes.form}>

                <TextField
                    className={classes.textField}
                    InputProps={{ classes: {
                        input: classes.input,
                        }
                    }}
                    InputLabelProps={{ className: classes.label }}
                    multiline
                    fullWidth={false}
                    rowsMax="8"
                    label="Story"
                    name="setStory"
                    value={story}
                    onChange={handleInputChange}
                />

                <Button
                    className={classes.postStory}
                    onClick={handleStoryPost}
                    size={holder.xs ? 'small' : 'large'}
                    color="primary"
                >
                    <Icon fontSize={holder.xs ? 'small' : 'large'}>
                        add_circle
                    </Icon>
                </Button>
            
            </div>

        </Fragment>
    );
};

export default Story;
