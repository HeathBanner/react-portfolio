import React, {
    Fragment,
    useState,
    useContext,
} from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    Divider,
    Slide,
} from '@material-ui/core';

import DescPopper from './Popper';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        [theme.breakpoints.down('md')]: {
            paddingBottom: 0,
            alignItems: 'flex-end',
            alignContent: 'flex-end',
        },
        paddingTop: 100,
        paddingBottom: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    listContainer: {
        [theme.breakpoints.down('md')]: {
            marginTop: 60,
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            perspective: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            // height: '110vh',
        },
        [theme.breakpoints.down('xs')]: {
            // height: '200vh',
        },
        paddingTop: 100,
        paddingBottom: 200,
        perspective: 7000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    icons: {
        [theme.breakpoints.down('sm')]: {
            height: 100,
            width: 100, 
            position: 'relative', 
            left: 0,
            top: 0,
            marginBottom: 20,
        },
        [theme.breakpoints.down('xs')]: {
            height: 80,
            width: 80, 
        },
        height: 120,
        width: 120,
        position: 'absolute',
        top: 20,
        left: 20,
        background: 'linear-gradient(90deg, #FFF 0%,transparent 100%),linear-gradient(90deg, #FFF 0%,transparent 100%),linear-gradient(135deg, rgba(111, 111, 111, 0.01) 0%, rgba(111, 111, 111, 0.01) 24%,rgba(104, 104, 104, 0.01) 24%, rgba(104, 104, 104, 0.01) 100%),linear-gradient(45deg, rgba(143, 143, 143, 0.03) 0%, rgba(143, 143, 143, 0.03) 78%,rgba(8, 8, 8, 0.03) 78%, rgba(8, 8, 8, 0.03) 100%),linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 73%,rgba(254, 254, 254, 0.04) 73%, rgba(254, 254, 254, 0.04) 100%),linear-gradient(135deg, rgba(165, 165, 165, 0.06) 0%, rgba(165, 165, 165, 0.06) 64%,rgba(85, 85, 85, 0.06) 64%, rgba(85, 85, 85, 0.06) 100%),linear-gradient(0deg, rgba(219, 219, 219, 0.08) 0%, rgba(219, 219, 219, 0.08) 55%,rgba(0, 0, 0, 0.08) 55%, rgba(0, 0, 0, 0.08) 100%),linear-gradient(135deg, rgba(234, 234, 234, 0.03) 0%, rgba(234, 234, 234, 0.03) 23%,rgba(40, 40, 40, 0.03) 23%, rgba(40, 40, 40, 0.03) 100%),linear-gradient(135deg, rgba(197, 197, 197, 0.06) 0%, rgba(197, 197, 197, 0.06) 70%,rgba(168, 168, 168, 0.06) 70%, rgba(168, 168, 168, 0.06) 100%),linear-gradient(45deg, rgba(205, 205, 205, 0.07) 0%, rgba(205, 205, 205, 0.07) 72%,rgba(183, 183, 183, 0.07) 72%, rgba(183, 183, 183, 0.07) 100%),linear-gradient(135deg, rgba(124, 124, 124, 0.06) 0%, rgba(124, 124, 124, 0.06) 85%,rgba(71, 71, 71, 0.06) 85%, rgba(71, 71, 71, 0.06) 100%),linear-gradient(90deg, rgb(161, 161, 161),rgb(167, 167, 167))',
    },
    infoHolder: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
        },
    },
    li: {
        [theme.breakpoints.down('lg')]: {
            width: '90%',
            height: 250,
            justifyContent: 'center',
            padding: '50px 20px 50px 140px',
        },
        [theme.breakpoints.down('md')]: {
            width: '70%',
            flexWrap: 'wrap',
            margin: 0,
            transform: 'rotateY(0deg) rotateX(0deg)',
        },
        [theme.breakpoints.down('sm')]: {
            height: 300,
            width: '80%',
            padding: '20px 20px 20px 100px',
        },
        [theme.breakpoints.down('sm')]: {
            height: 350,
            width: '90%',
            padding: 20,
        },
        height: 200,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        margin: '0px auto 0px auto',
        cursor: 'pointer',
        overflow: 'hidden',
        padding: '50px 50px 50px 150px',
        width: '80%',
        color: 'white',
        transform: 'rotateY(-30deg) rotateX(15deg)',
        transition: 'all .4s ease-out',
        background: 'linear-gradient(46deg, rgba(18, 18, 18, 0.01) 0%, rgba(18, 18, 18, 0.01) 50%,rgba(10, 10, 10, 0.01) 50%, rgba(10, 10, 10, 0.01) 100%),linear-gradient(338deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 50%,rgba(174, 174, 174, 0.03) 50%, rgba(174, 174, 174, 0.03) 100%),linear-gradient(26deg, rgba(180, 180, 180, 0.02) 0%, rgba(180, 180, 180, 0.02) 50%,rgba(191, 191, 191, 0.02) 50%, rgba(191, 191, 191, 0.02) 100%),linear-gradient(129deg, rgba(52, 52, 52, 0.03) 0%, rgba(52, 52, 52, 0.03) 50%,rgba(188, 188, 188, 0.03) 50%, rgba(188, 188, 188, 0.03) 100%),linear-gradient(86deg, rgba(234, 234, 234, 0.03) 0%, rgba(234, 234, 234, 0.03) 50%,rgba(100, 100, 100, 0.03) 50%, rgba(100, 100, 100, 0.03) 100%),linear-gradient(73deg, rgba(203, 203, 203, 0.02) 0%, rgba(203, 203, 203, 0.02) 50%,rgba(24, 24, 24, 0.02) 50%, rgba(24, 24, 24, 0.02) 100%),linear-gradient(90deg, rgb(245, 130, 42),rgb(237, 46, 8))',
        '&:nth-child(1)': {
            [theme.breakpoints.down('md')]: {
                '&:hover': {
                    transform: 'scale(1.03)',
                    backgroundPosition: '0px 25px',
                },
            },
            [theme.breakpoints.down('sm')]: {
                marginBottom: 0,
            },
            marginBottom: 15,
        },
        '&:nth-child(2)': {
            [theme.breakpoints.down('md')]: {
                '&:hover': {
                    transform: 'scale(1.03)',
                    backgroundPosition: '0px 25px',
                },
            },
            [theme.breakpoints.down('sm')]: {
                marginBottom: 0,
            },
            marginBottom: 15,
        },
        '&:nth-child(3)': {
            [theme.breakpoints.down('md')]: {
                '&:hover': {
                    transform: 'scale(1.03)',
                    backgroundPosition: '0px 25px',
                },
            },
            [theme.breakpoints.down('sm')]: {
                marginBottom: 0,
            },
        },
        '&:hover': {
            transform: 'rotateY(-5deg) rotateX(7deg) scale(1.03)',
            backgroundPosition: '0px 25px',
        },
    },
    imgs: {
        [theme.breakpoints.down('xs')]: {
            height: 60,
            width: 60,
        },
        height: 80,
        width: 80,
    },
    description: {
        marginTop: 20,
        color: 'white',
    },
    divider: {
        width: '70%',
        backgroundColor: 'rgb(255, 255, 255, 0.3)'
    },
    actionIcons: {
        marginLeft: 20,
    },
}));

const PreviousWork = () => {

    const classes = useStyles();
    const holder = useContext(AppContext);

    const [checked, setChecked] = useState({
        futureScaper: false,
        mtnDream: false,
        rps: false,
    });

    const handleClick = (newLink) => {
        setChecked({ ...checked, [newLink]: !checked[newLink] });
    };

    return (
        <Fragment>

            <Grid className={classes.headerContainer} item lg={6} md={12}>

                <Typography style={{ width: '100%' }} variant={holder.xs ? 'h4' : 'h1'} color="primary" align="center">
                    Previous Work
                </Typography>

                <Divider style={{ width: '70%', borderBottom: '1px solid rgba(0,0,0,.1)' }} />

                <Typography style={{ marginTop: 20, width: '100%' }} variant={holder.xs ? 'body2' : 'h6'} align="center">
                    I have provided three of my favorite projects that I'm currently working on.
                </Typography>

            </Grid>
            <Grid className={classes.listContainer} item lg={6} md={12}>

                <Paper onClick={() => handleClick('futureScaper')} className={classes.li}>

                    <Slide
                        direction="left"
                        in={!checked.futureScaper}
                        mountOnEnter
                        unmountOnExit
                    >
                        <div className={classes.infoHolder}>

                            <Avatar className={classes.icons}>
                                <img className={classes.imgs} src="/imgs/logo.png" alt="Future Scaper Logo" />
                            </Avatar>
                            <Typography style={{ width: '100%' }} variant="h4" align="center">
                                Future Scaper
                            </Typography>

                            <Divider className={classes.divider} />

                            <Typography className={classes.description} variant={holder.xs ? 'body1' : 'h6'} align="center">
                                This app uses the USDA database to help our users form better and more 
                                precise landscaping projects.
                            </Typography>

                        </div>

                    </Slide>
 
                    <DescPopper check={checked} link="futureScaper" />

                </Paper>

                {holder.sm ? <Divider style={{ width: '100%', margin: '30px 0px' }} /> : ''}

                <Paper onClick={() => handleClick('mtnDream')} className={classes.li}>

                <Slide
                        direction="left"
                        in={!checked.mtnDream}
                        mountOnEnter
                        unmountOnExit
                    >                        
                        <div className={classes.infoHolder}>

                            <Avatar className={classes.icons}>
                                <img className={classes.imgs} src="/imgs/mtnDream.png" alt="Mountain Dream Logo" />
                            </Avatar>
                            <Typography style={{ width: '100%' }} variant="h4" align="center">
                                Mountain Dream
                            </Typography>

                            <Divider className={classes.divider} />

                            <Typography className={classes.description} variant={holder.xs ? 'body1' : 'h6'} align="center">
                                Mountain Dream is an application built to showcase a rental cabin and allows 
                                the client to maintain their blog by 
                                replicating the basic functions of Google Docs so they can create, edit and 
                                delete blog articles.
                            </Typography>

                        </div>

                    </Slide>

                    <DescPopper check={checked} link="mtnDream" />

                </Paper>

                {holder.sm ? <Divider style={{ width: '100%', margin: '30px 0px' }} /> : ''}

                <Paper onClick={() => handleClick('rps')} className={classes.li}>

                    <Slide
                        direction="left"
                        in={!checked.rps}
                        mountOnEnter
                        unmountOnExit
                    >
                        <div className={classes.infoHolder}>

                            <Avatar className={classes.icons}>
                                <img className={classes.imgs} src="/imgs/rps.png" alt="RPS Logo" />
                            </Avatar>
                            <Typography style={{ width: '100%' }} variant="h4" align="center">
                                Rock Paper Scissor
                            </Typography>

                            <Divider className={classes.divider} />

                            <Typography className={classes.description} variant={holder.xs ? 'body1' : 'h6'} align="center">
                                RPS is a Rock Paper Scissor real-time game. It uses Firestore and Firebase 
                                for messaging, authentication and in-game experience.
                            </Typography>

                        </div>

                    </Slide>

                    <DescPopper check={checked} link="rps" />

                </Paper>

            </Grid>

        </Fragment>
    );
};

export default PreviousWork;
