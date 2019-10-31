import React, {
    Fragment,
    useContext,
} from 'react';

import { Button, Icon } from '@material-ui/core';

import { EditorContext } from '../../../../../context/EditorContext';

const Justify = (props) => {

    const holder = useContext(EditorContext);

    const leftSwitch = () => {
        if ( (holder.sectionMode.el === 'body') || (holder.sectionMode.el === 'image') ) {
            return holder.body[holder.sectionMode.index].justify === 'left';
        } else {
            return holder[holder.sectionMode.el].justify === 'left';
        }
    };

    const centerSwitch = () => {
        if ( (holder.sectionMode.el === 'body') || (holder.sectionMode.el === 'image') ) {
            return holder.body[holder.sectionMode.index].justify === 'center';
        } else {
            return holder[holder.sectionMode.el].justify === 'center';
        }
    };

    const rightSwitch = () => {
        if ( (holder.sectionMode.el === 'body') || (holder.sectionMode.el === 'image') ) {
            return holder.body[holder.sectionMode.index].justify === 'right';
        } else {
            return holder[holder.sectionMode.el].justify === 'right';
        }
    };

    const justifySwitch = () => {
        if ( (holder.sectionMode.el === 'body') || (holder.sectionMode.el === 'image') ) {
            return holder.body[holder.sectionMode.index].justify === 'justify';
        } else {
            return holder[holder.sectionMode.el].justify === 'justify';
        }
    };

    return (
        <Fragment>

            <Button
                disabled={leftSwitch()}
                onClick={() => holder.handleJustify('left')}
                variant="contained"
                style={{ marginRight: props.margin }}
            >
                <Icon
                    fontSize={props.xs ? 'small' : 'large'}
                >
                    format_align_left
                </Icon>
            </Button>
            <Button
                disabled={centerSwitch()}
                onClick={() => holder.handleJustify('center')}
                variant="contained"
                style={{ marginRight: props.margin }}
            >
                <Icon
                    fontSize={props.xs ? 'small' : 'large'}
                >
                    format_align_center
                </Icon>
            </Button>
            <Button
                disabled={rightSwitch()}
                onClick={() => holder.handleJustify('right')}
                variant="contained"
                style={{ marginRight: props.margin }}
            >
                <Icon
                    fontSize={props.xs ? 'small' : 'large'}
                >
                    format_align_right
                </Icon>
            </Button>
            <Button
                disabled={justifySwitch()}
                onClick={() => holder.handleJustify('justify')}
                variant="contained"
                style={{ marginRight: props.margin }}
            >
                <Icon
                    fontSize={props.xs ? 'small' : 'large'}
                >
                    format_align_justify
                </Icon>
            </Button>

        </Fragment>
    );
};

export default Justify;
