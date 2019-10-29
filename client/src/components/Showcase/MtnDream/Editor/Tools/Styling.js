import React, { Fragment, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon } from '@material-ui/core';

import { EditorContext } from '../../../../../context/EditorContext';

import ColorPicker from './ColorPicker';

const useStyles = makeStyles(theme => ({
    container: {
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabled: {
        color: 'rgba(0, 0, 0, 0.26)',
        boxShadow: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
}));

const Styling = (props) => {

    const classes = useStyles();
    const holder = useContext(EditorContext);

    const disableList = ['jumbotron', 'image', 'description', 'readLength'];

    const checkDisabled = (style) => {
        if (holder.sectionMode.el === 'body') {
            return holder.body[holder.sectionMode.index][style];
        } else {
            return holder[holder.sectionMode.el][style];
        }
    };

    const disablePicker = () => {
        switch (holder.sectionMode.el) {
            case 'title':
                return true;
            case 'description':
                return true;
            case 'readLength':
                return true;
            case 'body':
                return true;
            default:
                return false;
        }
    };

    if (disableList.includes(holder.sectionMode.el)) {
        return (
            <Fragment>

                <Button
                    disabled={true}
                    onClick={() => holder.handleStyling('bold')}
                    variant="contained"
                    style={{ marginRight: props.margin }}
                >
                    <Icon
                        fontSize={props.xs ? 'small' : 'large'}
                    >
                        format_bold
                    </Icon>
                </Button>

                <Button
                    disabled={true}
                    onClick={() => holder.handleStyling('italic')}
                    variant="contained"
                    style={{ marginRight: props.margin }}
                >
                    <Icon
                        fontSize={props.xs ? 'small' : 'large'}
                    >
                        format_italic
                    </Icon>
                </Button>

                <Button
                    disabled={true}
                    onClick={() => holder.handleStyling('underline')}
                    variant="contained"
                    style={{ marginRight: props.margin }}
                >
                    <Icon
                        fontSize={props.xs ? 'small' : 'large'}
                    >
                        format_underline
                    </Icon>
                </Button>

                {
                    disablePicker()
                        ?
                    <ColorPicker />
                        :
                    <Button
                        style={{ marginRight: props.margin }}
                        disabled={true}
                        variant="contained"
                    >
                        <Icon
                            fontSize={props.xs ? 'small' : 'large'}
                        >
                            format_color_text
                        </Icon>
                    </Button>
                }

                <Button
                    disabled={true}
                    onClick={() => holder.handleStyling('highlight')}
                    variant="contained"
                    style={{ marginRight: props.margin }}
                >
                    <Icon
                        fontSize={props.xs ? 'small' : 'large'}
                    >
                        highlight
                    </Icon>
                </Button>

            </Fragment>
        );
    } else {
        return (
            <Fragment>
    
                <Button
                    className={checkDisabled('bold') ? classes.disabled : classes.active}
                    onClick={() => holder.handleStyling('bold')}
                    variant="contained"
                    style={{ marginRight: props.margin }}
                >
                    <Icon
                        fontSize={props.xs ? 'small' : 'large'}
                    >
                        format_bold
                    </Icon>
                </Button>
    
                <Button
                    className={checkDisabled('italic') ? classes.disabled : classes.active}
                    onClick={() => holder.handleStyling('italic')}
                    variant="contained"
                    style={{ marginRight: props.margin }}
                >
                    <Icon
                        fontSize={props.xs ? 'small' : 'large'}
                    >
                        format_italic
                    </Icon>
                </Button>
    
                <Button
                    className={checkDisabled('underline') ? classes.disabled : classes.active}
                    onClick={() => holder.handleStyling('underline')}
                    variant="contained"
                    style={{ marginRight: props.margin }}
                >
                    <Icon
                        fontSize={props.xs ? 'small' : 'large'}
                    >
                        format_underline
                    </Icon>
                </Button>
    
                {
                    disablePicker()
                        ?
                    <ColorPicker />
                        :
                    <Button
                        style={{ marginRight: props.margin }}
                        disabled={true}
                        variant="contained"
                    >
                        <Icon
                            fontSize={props.xs ? 'small' : 'large'}
                        >
                            format_color_text
                        </Icon>
                    </Button>
                }
    
                <Button
                    className={checkDisabled('highlight') ? classes.disabled : classes.active}
                    onClick={() => holder.handleStyling('highlight')}
                    variant="contained"
                    style={{ marginRight: props.margin }}
                >
                    <Icon
                        fontSize={props.xs ? 'small' : 'large'}
                    >
                        highlight
                    </Icon>
                </Button>
    
            </Fragment>
        );
    }
};

export default Styling;
