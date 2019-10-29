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

const fontOptions = [
    {
        font: 'arial'
    },
    {
        font: 'helvetica'
    },
    {
        font: 'Times New Roman'
    },
    {
        font: 'Time'
    },
    {
        font: 'Courier New'
    },
    {
        font: 'Courier'
    },
    {
        font: 'Verdana'
    },
    {
        font: 'Georgia'
    },
    {
        font: 'Palatino'
    },
    {
        font: 'Garamond'
    },
    {
        font: 'Bookman'
    },
    {
        font: 'Comic Sans MS'
    },
    {
        font: 'Trebuchet MS'
    },
    {
        font: 'Arial Black'
    },
    {
        font: 'Impact'
    }
];

const Font = (props) => {

    const holder = useContext(EditorContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };  

    const wrapper = (font) => {
        holder.handleFont(font);
        handleClose();
    };

    const fontSwitch = () => {
        switch (holder.sectionMode.el) {
            case 'body':
                return <Button
                            style={{
                                marginRight: props.margin,
                                textTransform: 'capitalize',
                                fontFamily: `${holder.body[holder.sectionMode.index].font}, Helvetica, Arial, sans-serif`,
                            }}
                            onClick={handleOpen}
                            variant="contained"
                        >
                            <Typography
                                variant={props.xs ? 'body1' : 'h6'}
                            >
                                {holder.body[holder.sectionMode.index].font}
                            </Typography>
                        </Button>;
            case 'title':
                return <Button
                            style={{
                                marginRight: props.margin,
                                textTransform: 'capitalize',
                                fontFamily: `${holder[holder.sectionMode.el].font}, Helvetica, Arial, sans-serif`,
                            }}
                            onClick={handleOpen}
                            variant="contained"
                        >
                            <Typography
                                variant={props.xs ? 'body1' : 'h6'}
                            >
                                {holder[holder.sectionMode.el].font}
                            </Typography>
                        </Button>;
            case 'description':
                return <Button
                            style={{
                                marginRight: props.margin,
                                textTransform: 'capitalize',
                                fontFamily: `${holder[holder.sectionMode.el].font}, Helvetica, Arial, sans-serif`,
                            }}
                            onClick={handleOpen}
                            variant="contained"
                        >
                            <Typography
                                variant={props.xs ? 'body1' : 'h6'}
                            >
                                {holder[holder.sectionMode.el].font}
                            </Typography>
                        </Button>;
            case 'readLength':
                return <Button
                            style={{
                                marginRight: props.margin,
                                textTransform: 'capitalize',
                                fontFamily: `${holder[holder.sectionMode.el].font}, Helvetica, Arial, sans-serif`,
                            }}
                            onClick={handleOpen}
                            variant="contained"
                        >
                            <Typography
                                variant={props.xs ? 'body1' : 'h6'}
                            >
                                {holder[holder.sectionMode.el].font}
                            </Typography>
                    </Button>;
            default:
                return <Button style={{ marginRight: props.margin }} disabled={true} variant="contained">
                            <Icon>lock</Icon>
                        </Button>;
        }
    };

    return (
        <Fragment>
            
            {fontSwitch()}

            <Menu
                id="textSize"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    fontOptions.map((item) => {
                        return (
                            <MenuItem
                                style={{
                                    textTransform: 'capitalize',
                                    fontFamily: `${item.font}, Helvetica, Arial, sans-serif`,
                                }}
                                onClick={() => wrapper(item.font)}
                                key={item.font}
                            >
                                {item.font}
                            </MenuItem>
                        );
                    })
                }
            </Menu>

        </Fragment>
    );
};

export default Font;
