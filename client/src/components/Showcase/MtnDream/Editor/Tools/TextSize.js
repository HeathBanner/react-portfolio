import React, {
    Fragment,
    useState,
    useContext,
} from 'react';

import {
    Menu,
    MenuItem,
    Button,
    Icon,
    Typography,
} from '@material-ui/core';

import { EditorContext } from '../../../../../context/EditorContext';

const textOptions = [
    {
        cb: 'h1'
    },
    {
        cb: 'h2'
    },
    {
        cb: 'h3'
    },
    {
        cb: 'h4'
    },
    {
        cb: 'h5'
    },
    {
        cb: 'h6'
    },
    {
        cb: 'subtitle1'
    },
    {
        cb: 'subtitle2'
    },
    {
        cb: 'body1'
    },
    {
        cb: 'body2'
    },
    {
        cb: 'caption'
    },
    {
        cb: 'button'
    },
    {
        cb: 'overline'
    },
    {
        cb: 'srOnly'
    },
    {
        cb: 'inherit'
    }
];

const TextSize = (props) => {
    
    const holder = useContext(EditorContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };  

    const wrapper = newStyle => {
        holder.handleTextStyle(newStyle);
        handleClose();
    };

    const sizeSwitch = () => {
        switch (holder.sectionMode.el) {
            case 'body':
                return <Button
                            style={{ marginRight: props.margin }}
                            onClick={handleOpen}
                            variant="contained"
                        >
                            <Typography
                                variant={props.xs ? 'body1' : 'h6'}
                            >
                                {holder[holder.sectionMode.el][holder.sectionMode.index].textStyle}
                            </Typography>
                        </Button>;
            case 'jumbotron':
                return <Button
                            style={{ marginRight: props.margin }}
                            disabled={true}
                            variant="contained"
                        >
                            <Icon>lock</Icon>
                        </Button>;
            case 'image':
                return <Button 
                            style={{ marginRight: props.margin }}
                            disabled={true}
                            variant="contained"
                        >
                            <Icon>lock</Icon>
                        </Button>;
            case 'readLength':
                return <Button
                            style={{ marginRight: props.margin }}
                            disabled={true}
                            variant="contained"
                        >
                            <Icon>lock</Icon>
                        </Button>;
            default:
                return <Button
                            style={{ marginRight: props.margin }}
                            onClick={handleOpen}
                            variant="contained"
                        >
                            <Typography
                                variant={props.xs ? 'body1' : 'h6'}
                            >
                                {holder[holder.sectionMode.el].textStyle}
                            </Typography>
                        </Button>;
        }
    };

    return (
        <Fragment>
            
            {sizeSwitch()}

            <Menu
                id="textSize"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    textOptions.map(item => {
                        return (
                            <MenuItem key={item.cb} onClick={() => wrapper(item.cb)}>
                                {item.cb}
                            </MenuItem>
                        );
                    })
                }    
            </Menu>

        </Fragment>
    );
};

export default TextSize;
