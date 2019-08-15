import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Stepper, Step, StepLabel, StepConnector, Button, Icon, Zoom } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    stepperContainer: {
        [theme.breakpoints.down('lg')]: {
            width: '75%',
        },
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
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
        background: 'linear-gradient(0deg, rgba(77, 77, 77, 0.08) 0%, rgba(77, 77, 77, 0.08) 63%,rgba(96, 96, 96, 0.08) 63%, rgba(96, 96, 96, 0.08) 100%),linear-gradient(0deg, rgba(149, 149, 149, 0.02) 0%, rgba(149, 149, 149, 0.02) 35%,rgba(34, 34, 34, 0.02) 35%, rgba(34, 34, 34, 0.02) 100%),linear-gradient(0deg, rgba(199, 199, 199, 0.09) 0%, rgba(199, 199, 199, 0.09) 76%,rgba(107, 107, 107, 0.09) 76%, rgba(107, 107, 107, 0.09) 100%),linear-gradient(90deg, rgba(65, 65, 65, 0.01) 0%, rgba(65, 65, 65, 0.01) 99%,rgba(95, 95, 95, 0.01) 99%, rgba(95, 95, 95, 0.01) 100%),linear-gradient(45deg, rgba(131, 131, 131, 0.08) 0%, rgba(131, 131, 131, 0.08) 45%,rgba(11, 11, 11, 0.08) 45%, rgba(11, 11, 11, 0.08) 100%),linear-gradient(0deg, rgba(149, 149, 149, 0.06) 0%, rgba(149, 149, 149, 0.06) 94%,rgba(194, 194, 194, 0.06) 94%, rgba(194, 194, 194, 0.06) 100%),linear-gradient(90deg, rgb(3, 206, 186),rgb(38, 6, 177))',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    },
    stepLabel: {
        transition: 'all .8s ease',
        color: 'white',
        fontSize: '1.2rem',
    },
    stepLabelActive: {
        '& $stepLabel': {
            color: 'rgb(48, 48, 48) !important',
        },
    },
    connectorActive: {
        background: 'linear-gradient(90deg, rgb(116, 216, 252),rgb(156, 153, 254))',
        '& $line': {
            opacity: 0,
        }
    },
    line: {
        transition: 'opacity .8s ease',
        opacity: 1,
        background: 'rgb(255, 255, 255)',
        height: 3,
        border: 0,
        borderRadius: 1,
    },
    paper: {
        [theme.breakpoints.down('md')]: {
            height: 400,
        },
        height: 300,
        width: '100%',
        position: 'relative',
        borderRadius: '0px 0px 4px 4px',
        color: 'rgb(255, 255, 255)',
        background: 'linear-gradient(200deg, rgba(213, 213, 213, 0.01) 0%, rgba(213, 213, 213, 0.01) 14.286%,rgba(140, 140, 140, 0.01) 14.286%, rgba(140, 140, 140, 0.01) 28.572%,rgba(52, 52, 52, 0.01) 28.572%, rgba(52, 52, 52, 0.01) 42.858%,rgba(38, 38, 38, 0.01) 42.858%, rgba(38, 38, 38, 0.01) 57.144%,rgba(159, 159, 159, 0.01) 57.144%, rgba(159, 159, 159, 0.01) 71.42999999999999%,rgba(71, 71, 71, 0.01) 71.43%, rgba(71, 71, 71, 0.01) 85.71600000000001%,rgba(88, 88, 88, 0.01) 85.716%, rgba(88, 88, 88, 0.01) 100.002%),linear-gradient(337deg, rgba(25, 25, 25, 0.01) 0%, rgba(25, 25, 25, 0.01) 12.5%,rgba(150, 150, 150, 0.01) 12.5%, rgba(150, 150, 150, 0.01) 25%,rgba(84, 84, 84, 0.01) 25%, rgba(84, 84, 84, 0.01) 37.5%,rgba(85, 85, 85, 0.01) 37.5%, rgba(85, 85, 85, 0.01) 50%,rgba(188, 188, 188, 0.01) 50%, rgba(188, 188, 188, 0.01) 62.5%,rgba(80, 80, 80, 0.01) 62.5%, rgba(80, 80, 80, 0.01) 75%,rgba(73, 73, 73, 0.01) 75%, rgba(73, 73, 73, 0.01) 87.5%,rgba(219, 219, 219, 0.01) 87.5%, rgba(219, 219, 219, 0.01) 100%),linear-gradient(203deg, rgba(233, 233, 233, 0.01) 0%, rgba(233, 233, 233, 0.01) 25%,rgba(114, 114, 114, 0.01) 25%, rgba(114, 114, 114, 0.01) 50%,rgba(164, 164, 164, 0.01) 50%, rgba(164, 164, 164, 0.01) 75%,rgba(228, 228, 228, 0.01) 75%, rgba(228, 228, 228, 0.01) 100%),linear-gradient(317deg, rgba(139, 139, 139, 0.02) 0%, rgba(139, 139, 139, 0.02) 16.667%,rgba(44, 44, 44, 0.02) 16.667%, rgba(44, 44, 44, 0.02) 33.334%,rgba(166, 166, 166, 0.02) 33.334%, rgba(166, 166, 166, 0.02) 50.001000000000005%,rgba(2, 2, 2, 0.02) 50.001%, rgba(2, 2, 2, 0.02) 66.668%,rgba(23, 23, 23, 0.02) 66.668%, rgba(23, 23, 23, 0.02) 83.33500000000001%,rgba(21, 21, 21, 0.02) 83.335%, rgba(21, 21, 21, 0.02) 100.002%),linear-gradient(328deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 12.5%,rgba(116, 116, 116, 0.03) 12.5%, rgba(116, 116, 116, 0.03) 25%,rgba(214, 214, 214, 0.03) 25%, rgba(214, 214, 214, 0.03) 37.5%,rgba(217, 217, 217, 0.03) 37.5%, rgba(217, 217, 217, 0.03) 50%,rgba(68, 68, 68, 0.03) 50%, rgba(68, 68, 68, 0.03) 62.5%,rgba(118, 118, 118, 0.03) 62.5%, rgba(118, 118, 118, 0.03) 75%,rgba(200, 200, 200, 0.03) 75%, rgba(200, 200, 200, 0.03) 87.5%,rgba(198, 198, 198, 0.03) 87.5%, rgba(198, 198, 198, 0.03) 100%),linear-gradient(97deg, rgba(195, 195, 195, 0.03) 0%, rgba(195, 195, 195, 0.03) 16.667%,rgba(177, 177, 177, 0.03) 16.667%, rgba(177, 177, 177, 0.03) 33.334%,rgba(170, 170, 170, 0.03) 33.334%, rgba(170, 170, 170, 0.03) 50.001000000000005%,rgba(158, 158, 158, 0.03) 50.001%, rgba(158, 158, 158, 0.03) 66.668%,rgba(121, 121, 121, 0.03) 66.668%, rgba(121, 121, 121, 0.03) 83.33500000000001%,rgba(146, 146, 146, 0.03) 83.335%, rgba(146, 146, 146, 0.03) 100.002%),linear-gradient(268deg, rgba(103, 103, 103, 0.03) 0%, rgba(103, 103, 103, 0.03) 25%,rgba(112, 112, 112, 0.03) 25%, rgba(112, 112, 112, 0.03) 50%,rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%,rgba(227, 227, 227, 0.03) 75%, rgba(227, 227, 227, 0.03) 100%),linear-gradient(90deg, hsl(98,0%,24%),hsl(98,0%,24%))',
    },
    instructions: {
        position: 'absolute',
        padding: 20,
    },
    nextButton: {
        transition: 'all 1s ease',
        padding: 10,
        margin: '10px 0px 0px 10px',
        width: 'calc(50% - 10px)',
        background: 'linear-gradient(0deg, rgba(77, 77, 77, 0.08) 0%, rgba(77, 77, 77, 0.08) 63%,rgba(96, 96, 96, 0.08) 63%, rgba(96, 96, 96, 0.08) 100%),linear-gradient(0deg, rgba(149, 149, 149, 0.02) 0%, rgba(149, 149, 149, 0.02) 35%,rgba(34, 34, 34, 0.02) 35%, rgba(34, 34, 34, 0.02) 100%),linear-gradient(0deg, rgba(199, 199, 199, 0.09) 0%, rgba(199, 199, 199, 0.09) 76%,rgba(107, 107, 107, 0.09) 76%, rgba(107, 107, 107, 0.09) 100%),linear-gradient(90deg, rgba(65, 65, 65, 0.01) 0%, rgba(65, 65, 65, 0.01) 99%,rgba(95, 95, 95, 0.01) 99%, rgba(95, 95, 95, 0.01) 100%),linear-gradient(45deg, rgba(131, 131, 131, 0.08) 0%, rgba(131, 131, 131, 0.08) 45%,rgba(11, 11, 11, 0.08) 45%, rgba(11, 11, 11, 0.08) 100%),linear-gradient(0deg, rgba(149, 149, 149, 0.06) 0%, rgba(149, 149, 149, 0.06) 94%,rgba(194, 194, 194, 0.06) 94%, rgba(194, 194, 194, 0.06) 100%),linear-gradient(90deg, rgb(38, 6, 177),rgb(3, 206, 186))',
        '&:hover': {
            backgroundPosition: '0px 50px',
            transform: 'scale(1.05)',
        },
    },
    backButton: {
        transition: 'all 1s ease',
        padding: 10,
        margin: '10px 10px 0px 0px',
        width: 'calc(50% - 10px)',
        background: 'linear-gradient(0deg, rgba(77, 77, 77, 0.08) 0%, rgba(77, 77, 77, 0.08) 63%,rgba(96, 96, 96, 0.08) 63%, rgba(96, 96, 96, 0.08) 100%),linear-gradient(0deg, rgba(149, 149, 149, 0.02) 0%, rgba(149, 149, 149, 0.02) 35%,rgba(34, 34, 34, 0.02) 35%, rgba(34, 34, 34, 0.02) 100%),linear-gradient(0deg, rgba(199, 199, 199, 0.09) 0%, rgba(199, 199, 199, 0.09) 76%,rgba(107, 107, 107, 0.09) 76%, rgba(107, 107, 107, 0.09) 100%),linear-gradient(90deg, rgba(65, 65, 65, 0.01) 0%, rgba(65, 65, 65, 0.01) 99%,rgba(95, 95, 95, 0.01) 99%, rgba(95, 95, 95, 0.01) 100%),linear-gradient(45deg, rgba(131, 131, 131, 0.08) 0%, rgba(131, 131, 131, 0.08) 45%,rgba(11, 11, 11, 0.08) 45%, rgba(11, 11, 11, 0.08) 100%),linear-gradient(0deg, rgba(149, 149, 149, 0.06) 0%, rgba(149, 149, 149, 0.06) 94%,rgba(194, 194, 194, 0.06) 94%, rgba(194, 194, 194, 0.06) 100%),linear-gradient(90deg, rgb(3, 206, 186),rgb(38, 6, 177))',
        '&:hover': {
            backgroundPosition: '0px 50px',
            transform: 'scale(1.05)',
        },
    },
}));

const Desktop = (props) => {

    const classes = useStyles();

    return (

        <div className={classes.stepperContainer}>

            <Stepper
                className={classes.stepper} 
                activeStep={props.activeStep}
                connector={
                    <StepConnector
                        classes={{
                            line: classes.line,
                            active: classes.connectorActive,
                            completed: classes.connectorActive,
                        }} 
                    />
                }
            >
                {
                    props.steps.map((label) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label.title} {...stepProps}>

                                <StepLabel 
                                    {...labelProps}
                                    icon={<Icon>{label.icon}</Icon>}
                                    classes={{
                                        label: classes.stepLabel,
                                        completed: classes.stepLabelActive
                                    }}
                                >
                                    {label.title}
                                </StepLabel>

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

                            <Zoom in={props.activeStep % 2 === 0}>

                                <Typography className={classes.instructions} variant="h5" align="center">
                                    {props.getContent(props.activeStep)}
                                </Typography>

                            </Zoom>
                            <Zoom className={classes.instructions} in={props.activeStep % 2 === 1}>

                                <Typography variant="h5" align="center">
                                    {props.getContent(props.activeStep)}
                                </Typography>
                                
                            </Zoom>
                        
                        </Paper>
                    
                        <Button 
                            variant="contained"
                            color="primary" 
                            disabled={props.activeStep === 0} 
                            onClick={props.handleBack} 
                            className={classes.backButton}
                        >
                            <Typography variant="h6" align="center">  
                                Back
                            </Typography>
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={props.activeStep === props.steps.length - 1 ? props.handleReset : props.handleNext}
                            className={classes.nextButton}
                        >
                            <Typography variant="h6" align="center">
                                {props.activeStep === props.steps.length - 1 ? 'Start Over' : 'Next'}
                            </Typography>
                        </Button>

                    </Fragment>
                )
            }
        </div>
    );
};

export default Desktop;