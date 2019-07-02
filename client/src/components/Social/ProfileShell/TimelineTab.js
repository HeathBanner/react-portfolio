import React, { Fragment } from 'react';

import { Grid } from '@material-ui/core';

import Timeline from './Timeline';
import Story from './Story';

function TimelineTab(props) {

    return (
        <Fragment>
            <Grid xs={12}>
                <Story />
                <Timeline page={props.page} />
            </Grid>
        </Fragment>
    );  
}

export default TimelineTab;