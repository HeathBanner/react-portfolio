import React, { Fragment, useContext } from 'react';

import { Typography, TextField, Icon } from '@material-ui/core';

import { EditorContext } from '../../../../../context/EditorContext';

const Margin = () => {

    const holder = useContext(EditorContext);

    const marginSwitch = () => {
        switch (holder.sectionMode.el) {
            case 'body':
                return true;
            case 'image':
                return true;
            case 'title':
                return true;
            case' jumbotron':
                return true;
            default:
                return false;
        }
    };

    return (
        <Fragment>

            <Typography style={{ marginRight: 10 }}>
                Margin Top:
            </Typography>

            {
                marginSwitch()
                    ?
                <TextField
                    style={{ width: 40 }}
                    value={
                        holder.sectionMode.el === 'body' || holder.sectionMode.el === 'image'
                            ?
                        holder.body[holder.sectionMode.index].marginTop
                            :
                        holder[holder.sectionMode.el].marginTop
                    }
                    onChange={holder.handleMarginTop}
                />
                    :
                <Icon style={{ width: 40 }}>lock</Icon>
            }

            <Typography style={{ margin: '0px 10px' }}>
                Margin Bottom:
            </Typography>

            {
                marginSwitch()
                    ?
                <TextField
                    style={{ width: 40 }}
                    value={
                        holder.sectionMode.el === 'body' || holder.sectionMode.el === 'image'
                            ?
                        holder.body[holder.sectionMode.index].marginBottom
                            :
                        holder[holder.sectionMode.el].marginBottom
                    }
                    onChange={holder.handleMarginBottom}
                />
                    :
                <Icon style={{ width: 40 }}>lock</Icon>
            }

        </Fragment>
    );
};

export default Margin;
