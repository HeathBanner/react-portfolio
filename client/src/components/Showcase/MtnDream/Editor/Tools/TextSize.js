import React, { Fragment, useState, useContext } from 'react';

import { Menu, MenuItem, Button, Icon } from '@material-ui/core';

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

const TextSize = () => {
    
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
                return <Button style={{ marginRight: 10 }} onClick={handleOpen} variant="contained">
                            {holder[holder.sectionMode.el][holder.sectionMode.index].textStyle}
                        </Button>;
            case 'jumbotron':
                return <Button style={{ marginRight: 10 }} disabled={true} variant="contained">
                            <Icon>lock</Icon>
                        </Button>;
            case 'image':
                return <Button style={{ marginRight: 10 }} disabled={true} variant="contained">
                            <Icon>lock</Icon>
                        </Button>;
            case 'readLength':
                return <Button style={{ marginRight: 10 }} disabled={true} variant="contained">
                            <Icon>lock</Icon>
                        </Button>;
            default:
                return <Button style={{ marginRight: 10 }} onClick={handleOpen} variant="contained">
                            {holder[holder.sectionMode.el].textStyle}
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
