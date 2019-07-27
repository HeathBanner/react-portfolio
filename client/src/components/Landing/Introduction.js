import React, { Fragment, useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Avatar, Typography } from '@material-ui/core';

import Desktop from './Steppers/Desktop';
import Mobile from './Steppers/Mobile';

const Photo = 'https://media.licdn.com/dms/image/C5603AQHqTyUqMrqJZA/profile-displayphoto-shrink_200_200/0?e=1569456000&v=beta&t=YtZoiTHVJEXn3syxgpM5VVg7zTMFjD6SXZLVKHh9JB8';

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        // height: 200,
        marginTop: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    aboutContainer: {
        marginBottom: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
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
    avatar: {
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            top: 0,
            left: 0,    
            transform: 'translate(0%, 0%)',
        },
        height: 200,
        width: 200,
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: 'translate(0%, -50%)',
    },
    skillsHeader: {
        color: 'white',
        width: '100%',
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
    spacer: {
        height: '80vh',
    },
}));

const getSteps = () => {
    return ['High School', 'Photography', 'Construction', `Hawai'i`, 'Boot Camp'];
};
  
const getStepContent = (step) => {
    switch (step) {

        case 0:
            return `I was born and raised in Charlotte, NC. Growing up, I 
            eventually picked up on technology in highschool. The Xbox360 
            really ignited the flame within me. Going from a regular gamer 
            to becoming a moderator on a very famous game modding website
            (The Tech Game). A friend and I had released the first modded 
            file for Call of Duty BlackOps Zombies, a week before the game 
            was even released.`;

        case 1:
            return `After highschool, my friend who was a photographer for a modeling 
            agency invited me and a couple of friends to a trip to New York 
            City. The modeling agency wanted take their models to the city and 
            help them get signed with even greater agencies in Time Square as 
            well as doing a bunch of photoshoots to establish connections with 
            the local artists. This trip inspired me to pick up photography. 
            I had a lot of experience in photo-manipulation throughout 
            highschool. Working with the models of Charlotte for a couple years
            made me realize that there's not much money in this industry and it 
            lost its spark when I was having to really watch my money. This was 
            then moved to a hobby instead of a career path.`;

        case 2:
            return `A couple weeks had gone by before a friend of mine had offerd me a 
            job to help him with general construction. We then began to work 
            with a general contractor who primarily worked in the Peninsula(Concord, NC). 
            Learning everything from painting and drywall to installing tile 
            bathrooms. The person who had taught us to tile gave us a job offer 
            in Hawai'i. Any sane person without any committments would 
            graciously accept... so we accepted.`;

        case 3:
            return `Rennovating resorts on the islands of Hawai'i helped me grow as an 
            individual. Rising through the ranks of the company and becoming 
            the project manager's go to person. Having the hotel paid for and 
            company vehicles to drive for leisure. Meeting all kinds of 
            fascinating people from around the world. Going body surfing for 
            lunch...it all didn't fill the now hole that has opened. I left my 
            family in NC and I didn't receive any benefits or retirement 
            program. At this point, it was quite obvious. I need something more 
            stable and closer to home.`;
        case 4:
            return `After dabbling in programming by reading some books, A Crash Course 
            to Python/Beginning Django, watching a bunch of youtube videos. I 
            found UNC Programming Bootcamp. My Father, who has made a career out 
            of programming, decided it was would be a good direction to take. 
            So here I am. Making this website for Homework at the Bootcamp...`;

        default:
            return 'Unknown step';
    }
};

const Introduction = () => {

    const classes = useStyles();
    const theme = useTheme();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    const getVariant = () => {
        if(xs) { return 'h2'}
        else { return 'h1' }
    };

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
    
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (

        <Fragment>

            <Grid className={classes.container} item xs={12}>
                
                <Avatar className={classes.avatar} src={Photo} alt="Heath Banner"  />   

                <Typography className={classes.skillsHeader} variant={getVariant()} align="center">
                    About Me
                </Typography>         

            </Grid>
            <Grid className={classes.aboutContainer} item xs={12}>

                {
                    sm 
                        ?
                    <Mobile 
                        activeStep={activeStep} 
                        getContent={getStepContent} 
                        steps={steps}
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleReset={handleReset}
                    />    
                        :
                    <Desktop 
                        activeStep={activeStep} 
                        getContent={getStepContent} 
                        steps={steps}
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleReset={handleReset}
                    />
                }


            </Grid>

        </Fragment>
    );
};

export default Introduction;