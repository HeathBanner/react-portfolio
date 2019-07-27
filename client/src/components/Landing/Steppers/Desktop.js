import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Typography, Paper, Stepper, Step, StepLabel, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    stepperContainer: {
        width: '60%',
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    stepper: {
        width: '100%',
        borderRadius: '4px 4px 0px 0px',
        background: 'linear-gradient(45deg, #ffffff 30%, #fff4d1 90%)',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    },
    paper: {
        height: 300,
        padding: 20,
        borderRadius: '0px 0px 4px 4px',
        background: 'linear-gradient(45deg, #ffffff 30%, #ece9e6 90%)'
    },
    button: {
        margin: '10px 20px 0px 0px',
        width: '40%',
    },
}));

const Desktop = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.stepperContainer}>

            <Stepper className={classes.stepper} activeStep={props.activeStep}>
                {
                    props.steps.map((label) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })
                }
            </Stepper>

            {
                props.activeStep === props.steps.length 
                    ? 
                (
                    <Fragment>

                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>

                        <Button 
                            onClick={props.handleReset} 
                        >
                            Reset
                        </Button>

                    </Fragment>
                ) 
                    :   
                (
                    <Fragment>

                        <Paper className={classes.paper}>

                            <Typography className={classes.instructions} variant="body1">
                                {props.getContent(props.activeStep)}
                            </Typography>
                        
                        </Paper>
                    
                        <Button 
                            variant="contained"
                            color="primary" 
                            disabled={props.activeStep === 0} 
                            onClick={props.handleBack} 
                            className={classes.button}
                        >
                            Back
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={props.activeStep === props.steps.length - 1 ? props.handleReset : props.handleNext}
                            style={{marginTop: 10, width: '40%'}}
                        >
                            {props.activeStep === props.steps.length - 1 ? 'Start Over' : 'Next'}
                        </Button>

                    </Fragment>
                )
            }
        </div>
    );
};

export default Desktop;