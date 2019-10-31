import React, {
    useContext,
    useState,
    Fragment,
} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Popover,
    Button,
    TextField,
} from '@material-ui/core';

import { EditorContext } from '../../../../../context/EditorContext';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 20,
        width: 350,
    },
}));

const Jumbotron = () => {

    const classes = useStyles();
    const holder = useContext(EditorContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
        holder.handleSectionMode({ el: 'jumbotron' });
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if (holder.jumbotron.src) {
        return (
            <Fragment>

                <Button style={{ width: '50%' }} onClick={handleClick}>

                    <img 
                        style={{
                            width: '100%',
                            height: 'auto',
                            margin: '20px 0px',
                        }} 
                        src={holder.jumbotron.src} 
                        alt={holder.title.text} 
                    />

                </Button>

                <Popover
                    PaperProps={{ className: classes.paper }}
                    ModalClasses={{ className: classes.paper }}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                > 

                    <TextField
                        style={{ width: '100%' }}
                        label="Paste Url"
                        variant="outlined"
                        value={holder.jumbotron.src}
                        onChange={(e) => holder.handleInput(e, { El: 'jumbotron' })}
                    />

                </Popover> 

            </Fragment>
        );
    } else {
        return (
            <Fragment>

                <Button style={{ margin: '40px auto 0px auto' }} variant="contained" onClick={handleClick}>
                    Add Jumbotron
                </Button>

                <Popover
                    PaperProps={{ className: classes.paper }}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                > 

                    <TextField
                        style={{ width: '100%' }}
                        label="Paste Url"
                        variant="outlined"
                        value={holder.jumbotron.src}
                        onChange={(e) => holder.handleInput(e, { El: 'jumbotron' })}
                    />

                </Popover>

            </Fragment>
        );
    }
};

export default Jumbotron;
