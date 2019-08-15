import React, { Fragment, useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { Grid } from '@material-ui/core';

import Timeline from './Timeline';
import MobileTimeline from './MobileTimeline';
import Story from './Story';

const TimelineTab = (props) => {

    const holder = useContext(AppContext);

    return (
        <Fragment>

            <Grid item xs={12}>

                <Story />

                {
                    holder.xs
                        ?
                    <MobileTimeline page={props.page} />
                        :
                    <Timeline page={props.page} />
                }

            </Grid>

        </Fragment>
    );  
};

export default TimelineTab;