import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, MobileStepper, Button, Icon, Typography, Paper, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    stepperContainer: {
        [theme.breakpoints.down('xs')]: {
            width: '80%'
        },
        width: '60%',
        margin: '40px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    stepper: {
        width: '100%',
        borderRadius: '0px 0px 4px 4px',
        background: 'linear-gradient(45deg, #ffffff 30%, #fff9e6 90%)',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    },
    paper: {
        height: 350,
        padding: 20,
        overflow: 'scroll',
        borderRadius: '4px 4px 0px 0px',
        background: 'linear-gradient(45deg, #ffffff 30%, #ece9e6 90%)'
    },
    storyHeader: {
        
    },
    button: {
        margin: '10px 20px 0px 0px',
        width: '40%',
    },
}));

const Mobile = (props) => {
    
    const classes = useStyles();
    const theme = useTheme();

    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    const getVariant = () => {
        if(xs) { return 'h4' }
        else { return 'h3' }
    };

    return (
        <div className={classes.stepperContainer}>

            <Paper className={classes.paper}>

                <Typography className={classes.storyHeader} color="primary" variant={getVariant()} align="center">
                    {props.steps[props.activeStep]}
                </Typography>

                <Divider style={{marginBottom: 20}} />

                <Typography className={classes.instructions} variant="body1">
                    {props.getContent(props.activeStep)}
                </Typography>
            
            </Paper>  

            <MobileStepper
                variant="progress"
                steps={props.steps.length}
                position="static"
                activeStep={props.activeStep}
                className={classes.stepper}
                nextButton={
                    <Button size="small" onClick={props.handleNext} disabled={props.activeStep === props.steps.length - 1}>
                        Next
                        {theme.direction === 'rtl' ? <Icon>keyboard_arrow_left</Icon> : <Icon>keyboard_arrow_right</Icon>}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={props.handleBack} disabled={props.activeStep === 0}>
                        {theme.direction === 'rtl' ? <Icon>keyboard_arrow_right</Icon> : <Icon>keyboard_arrow_left</Icon>}
                        Back
                    </Button>
                }
            />

        </div>

    );
};

export default Mobile;