import React, {
    useState,
    useContext,
} from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Tabs,
    Tab,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: '100%',
        overflow: 'hidden',
        zIndex: 1500,
    },
    label: {
        fontSize: '0.9rem',
        padding: 10,
    }
});

const tabIndex = ['Timeline', 'About', 'Friends', 'Photos'];

const ProfileNav = (props) => {

    const classes = useStyles();
    const holder = useContext(AppContext);
    
    const [value, setValue] = useState(0);

    const getVariant = () => {
        switch (true) {
            case holder.xs:
                return 'body2';
            case holder.sm:
                return 'body1';
            default:
                return 'h6'
        }
    };

    const handleChange = (e, newValue) => {
        setValue(newValue);
        const newTab = tabIndex[newValue];
        props.tabChange(newTab);
    };

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
                <Tab wrapped={true} className={classes.label} label={<Typography variant={getVariant()}>Timeline</Typography>} />
                <Tab wrapped={true} className={classes.label} label={<Typography variant={getVariant()}>About</Typography>} />
                <Tab wrapped={true} className={classes.label} label={<Typography variant={getVariant()}>Friends</Typography>} />
                <Tab wrapped={true} className={classes.label} label={<Typography variant={getVariant()}>Photos</Typography>} />
            </Tabs>
        
        </Paper>
    );
};

export default ProfileNav;
