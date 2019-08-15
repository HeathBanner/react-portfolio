import React, { useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Button, Icon, Typography, Paper, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    stepperContainer: {
        [theme.breakpoints.down('xs')]: {
            width: '80%'
        },
        width: '75%',
        margin: '40px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    stepper: {
        width: '100%',
        borderRadius: '0px 0px 4px 4px',
        background: 'linear-gradient(0deg, rgba(77, 77, 77, 0.08) 0%, rgba(77, 77, 77, 0.08) 63%,rgba(96, 96, 96, 0.08) 63%, rgba(96, 96, 96, 0.08) 100%),linear-gradient(0deg, rgba(149, 149, 149, 0.02) 0%, rgba(149, 149, 149, 0.02) 35%,rgba(34, 34, 34, 0.02) 35%, rgba(34, 34, 34, 0.02) 100%),linear-gradient(0deg, rgba(199, 199, 199, 0.09) 0%, rgba(199, 199, 199, 0.09) 76%,rgba(107, 107, 107, 0.09) 76%, rgba(107, 107, 107, 0.09) 100%),linear-gradient(90deg, rgba(65, 65, 65, 0.01) 0%, rgba(65, 65, 65, 0.01) 99%,rgba(95, 95, 95, 0.01) 99%, rgba(95, 95, 95, 0.01) 100%),linear-gradient(45deg, rgba(131, 131, 131, 0.08) 0%, rgba(131, 131, 131, 0.08) 45%,rgba(11, 11, 11, 0.08) 45%, rgba(11, 11, 11, 0.08) 100%),linear-gradient(0deg, rgba(149, 149, 149, 0.06) 0%, rgba(149, 149, 149, 0.06) 94%,rgba(194, 194, 194, 0.06) 94%, rgba(194, 194, 194, 0.06) 100%),linear-gradient(90deg, rgb(3, 206, 186),rgb(38, 6, 177))',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    },
    paper: {
        [theme.breakpoints.down('xs')]: {
            padding: 10,
            height: 470,
        },
        height: 600,
        padding: 30,
        borderRadius: '4px 4px 0px 0px',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        background: 'linear-gradient(55deg, rgba(208, 208, 208, 0.03) 0%, rgba(208, 208, 208, 0.03) 20%,rgba(55, 55, 55, 0.03) 20%, rgba(55, 55, 55, 0.03) 40%,rgba(81, 81, 81, 0.03) 40%, rgba(81, 81, 81, 0.03) 60%,rgba(208, 208, 208, 0.03) 60%, rgba(208, 208, 208, 0.03) 80%,rgba(191, 191, 191, 0.03) 80%, rgba(191, 191, 191, 0.03) 100%),linear-gradient(291deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 14.286%,rgba(105, 105, 105, 0.02) 14.286%, rgba(105, 105, 105, 0.02) 28.572%,rgba(230, 230, 230, 0.02) 28.572%, rgba(230, 230, 230, 0.02) 42.858%,rgba(216, 216, 216, 0.02) 42.858%, rgba(216, 216, 216, 0.02) 57.144%,rgba(181, 181, 181, 0.02) 57.144%, rgba(181, 181, 181, 0.02) 71.42999999999999%,rgba(129, 129, 129, 0.02) 71.43%, rgba(129, 129, 129, 0.02) 85.71600000000001%,rgba(75, 75, 75, 0.02) 85.716%, rgba(75, 75, 75, 0.02) 100.002%),linear-gradient(32deg, rgba(212, 212, 212, 0.03) 0%, rgba(212, 212, 212, 0.03) 12.5%,rgba(223, 223, 223, 0.03) 12.5%, rgba(223, 223, 223, 0.03) 25%,rgba(11, 11, 11, 0.03) 25%, rgba(11, 11, 11, 0.03) 37.5%,rgba(86, 86, 86, 0.03) 37.5%, rgba(86, 86, 86, 0.03) 50%,rgba(106, 106, 106, 0.03) 50%, rgba(106, 106, 106, 0.03) 62.5%,rgba(220, 220, 220, 0.03) 62.5%, rgba(220, 220, 220, 0.03) 75%,rgba(91, 91, 91, 0.03) 75%, rgba(91, 91, 91, 0.03) 87.5%,rgba(216, 216, 216, 0.03) 87.5%, rgba(216, 216, 216, 0.03) 100%),linear-gradient(312deg, rgba(113, 113, 113, 0.01) 0%, rgba(113, 113, 113, 0.01) 14.286%,rgba(54, 54, 54, 0.01) 14.286%, rgba(54, 54, 54, 0.01) 28.572%,rgba(166, 166, 166, 0.01) 28.572%, rgba(166, 166, 166, 0.01) 42.858%,rgba(226, 226, 226, 0.01) 42.858%, rgba(226, 226, 226, 0.01) 57.144%,rgba(109, 109, 109, 0.01) 57.144%, rgba(109, 109, 109, 0.01) 71.42999999999999%,rgba(239, 239, 239, 0.01) 71.43%, rgba(239, 239, 239, 0.01) 85.71600000000001%,rgba(54, 54, 54, 0.01) 85.716%, rgba(54, 54, 54, 0.01) 100.002%),linear-gradient(22deg, rgba(77, 77, 77, 0.03) 0%, rgba(77, 77, 77, 0.03) 20%,rgba(235, 235, 235, 0.03) 20%, rgba(235, 235, 235, 0.03) 40%,rgba(215, 215, 215, 0.03) 40%, rgba(215, 215, 215, 0.03) 60%,rgba(181, 181, 181, 0.03) 60%, rgba(181, 181, 181, 0.03) 80%,rgba(193, 193, 193, 0.03) 80%, rgba(193, 193, 193, 0.03) 100%),linear-gradient(80deg, rgba(139, 139, 139, 0.02) 0%, rgba(139, 139, 139, 0.02) 14.286%,rgba(114, 114, 114, 0.02) 14.286%, rgba(114, 114, 114, 0.02) 28.572%,rgba(240, 240, 240, 0.02) 28.572%, rgba(240, 240, 240, 0.02) 42.858%,rgba(221, 221, 221, 0.02) 42.858%, rgba(221, 221, 221, 0.02) 57.144%,rgba(74, 74, 74, 0.02) 57.144%, rgba(74, 74, 74, 0.02) 71.42999999999999%,rgba(201, 201, 201, 0.02) 71.43%, rgba(201, 201, 201, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(257deg, rgba(72, 72, 72, 0.03) 0%, rgba(72, 72, 72, 0.03) 16.667%,rgba(138, 138, 138, 0.03) 16.667%, rgba(138, 138, 138, 0.03) 33.334%,rgba(54, 54, 54, 0.03) 33.334%, rgba(54, 54, 54, 0.03) 50.001000000000005%,rgba(161, 161, 161, 0.03) 50.001%, rgba(161, 161, 161, 0.03) 66.668%,rgba(17, 17, 17, 0.03) 66.668%, rgba(17, 17, 17, 0.03) 83.33500000000001%,rgba(230, 230, 230, 0.03) 83.335%, rgba(230, 230, 230, 0.03) 100.002%),linear-gradient(47deg, rgba(191, 191, 191, 0.01) 0%, rgba(191, 191, 191, 0.01) 16.667%,rgba(27, 27, 27, 0.01) 16.667%, rgba(27, 27, 27, 0.01) 33.334%,rgba(66, 66, 66, 0.01) 33.334%, rgba(66, 66, 66, 0.01) 50.001000000000005%,rgba(36, 36, 36, 0.01) 50.001%, rgba(36, 36, 36, 0.01) 66.668%,rgba(230, 230, 230, 0.01) 66.668%, rgba(230, 230, 230, 0.01) 83.33500000000001%,rgba(93, 93, 93, 0.01) 83.335%, rgba(93, 93, 93, 0.01) 100.002%),linear-gradient(90deg, #FFF,#FFF)',
    },
    buttons: {
        color: 'white',
        transition: 'transform .4s ease',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    progress: {
        [theme.breakpoints.down('xs')]: {
            width: '40%',
        },
    },
}));

const Mobile = (props) => {
    
    const classes = useStyles();
    const theme = useTheme();
    const holder = useContext(AppContext);

    return (
        <div className={classes.stepperContainer}>

            <Paper className={classes.paper}>

                <Typography style={{ marginBottom: holder.xs ? 0 : 10, width: '100%' }} variant={holder.xs ? 'h4' : 'h3'} align="center">
                    {props.steps[props.activeStep].title}
                </Typography>

                <Divider style={{ width: '70%', marginBottom: holder.xs ? 10 : 20 }} />

                <Typography className={classes.instructions} align="center" variant={holder.xs ? 'body2' : 'h6'}>
                    {props.getContent(props.activeStep)}
                </Typography>
            
            </Paper>  

            <MobileStepper
                variant="progress"
                steps={props.steps.length}
                position="static"
                activeStep={props.activeStep}
                className={classes.stepper}
                classes={{ progress: classes.progress }}
                nextButton={
                    <Button className={classes.buttons} onClick={props.handleNext} disabled={props.activeStep === props.steps.length - 1}>
                        
                        <Typography variant={holder.xs ? 'caption' : 'h6'}>
                            Next
                        </Typography>

                        {
                            theme.direction === 'rtl'
                                ?
                            <Icon fontSize={holder.xs ? 'small' : 'large'}>keyboard_arrow_left</Icon>
                                :
                            <Icon fontSize={holder.xs ? 'small' : 'large'}>keyboard_arrow_right</Icon>
                        }

                    </Button>
                }
                backButton={
                    <Button className={classes.buttons} onClick={props.handleBack} disabled={props.activeStep === 0}>
                        
                        {
                            theme.direction === 'rtl'
                                ?
                            <Icon fontSize={holder.xs ? 'small' : 'large'}>keyboard_arrow_right</Icon>
                                :
                            <Icon fontSize={holder.xs ? 'small' : 'large'}>keyboard_arrow_left</Icon>
                        }
                        
                        <Typography variant={holder.xs ? 'caption' : 'h6'}>
                            Back
                        </Typography>

                    </Button>
                }
            />

        </div>

    );
};

export default Mobile;