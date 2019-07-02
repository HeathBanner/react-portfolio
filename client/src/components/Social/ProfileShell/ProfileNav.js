import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: '100%',
        overflow: 'hidden',
    },
    label: {
        fontSize: '0.9rem'
    }
});

const tabIndex = ['Timeline', 'About', 'Friends', 'Photos'];

function ProfileNav(props) {

    const [value, setValue] = React.useState(0);

    const classes = useStyles();

    function handleChange(event, newValue) {
        setValue(newValue);
        const newTab = tabIndex[newValue];
        console.log(newTab);
        props.tabChange.onChange(newTab);
    }

    return (
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    variant="fullWidth"
                >
                    <Tab wrapped={true} className={classes.label} label="Timeline" />
                    <Tab wrapped={true} className={classes.label} label="About" />
                    <Tab wrapped={true} className={classes.label} label="Friends" />
                    <Tab wrapped={true} className={classes.label} label="Photos" />
                </Tabs>
            </Paper>
    );
}

export default ProfileNav;