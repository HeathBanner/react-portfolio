import React, { useState, useContext } from 'react';

import { AppContext } from '../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';

import Desktop from './Steppers/Desktop';
import Mobile from './Steppers/Mobile';

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 40,
        },
        paddingTop: 120,
        paddingBottom: 120,
        position: 'relative',
        marginTop: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    skillsHeader: {
        width: '100%',
        color: 'white',        
    }
}));

const getSteps = () => {
    return [
        {
            title: 'High School',
            icon: 'school'
        },
        {
            title: 'Photography',
            icon: 'photo_camera',
        },
        {
            title: 'Construction',
            icon: 'location_city',
        },
        {
            title: `Hawai'i`,
            icon: 'pool',
        },
        {
            title: 'Boot Camp',
            icon: 'code',
        },
    ];
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
            return `After high school, my friend who was a photographer for a modeling 
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
            found Trilogy Web Development Bootcamp. My Father, who has made a career out 
            of programming, decided it was would be a good direction to take. After pulling in
            from 70 to 80 hours a week for 3 months I finally graduated.`;

        default:
            return 'Unknown step';
    }
};

const Introduction = () => {

    const classes = useStyles();
    const holder = useContext(AppContext);

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
        <Grid className={classes.container} item xs={12}>
            
            <Typography className={classes.skillsHeader} variant={holder.xs ? 'h2' : 'h1'} align="center">
                About Me
            </Typography>

            <Divider style={{ width: '50%', marginBottom: 40 }} />      

            {
                holder.sm
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
    );
};

export default Introduction;