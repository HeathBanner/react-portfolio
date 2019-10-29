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

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        padding: 20,
        width: 350,
    },
}));

const Image = (props) => {
    
    const classes = useStyles();
    const holder = useContext(EditorContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
        holder.handleSectionMode({ el: 'image', index: props.index });
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if (props.src) {
        return (
            <Fragment>

                <Button onClick={handleClick}>

                    <img 
                        style={{ width: '100%', height: 'auto' }} 
                        src={props.src} 
                        alt={props.alt} 
                    />

                </Button>

                <Popover
                    PaperProps={{ className: classes.paper }}
                    ModalClasses={{ className: classes.paper}}
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
                        value={props.src}
                        onChange={(e) => holder.handleInput(e, { El: 'image', index: props.index })}
                    />

                </Popover>

            </Fragment>
        );
    } else {
        return (
            <Fragment>

                <Button variant="contained" onClick={handleClick}>
                    Add Image
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
                        value={props.src}
                        onChange={(e) => holder.handleInput(e, { El: 'image', index: props.index })}
                    />

                </Popover>

            </Fragment>
        );
    };
};

export default Image;
