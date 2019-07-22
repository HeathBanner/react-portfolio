import React, { useEffect, useState, useContext, Fragment } from 'react';

import {  useMediaQuery, Typography, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AuthContext from '../../context/AuthContext';

import DescPaper from '../../components/Social/ProfileShell/DescPaper';
import DescPopover from '../../components/Social/ProfileShell/DescPopover';
import SocialDrawer from '../../components/Social/ProfileShell/SocialDrawer';
import Skyliner from '../../components/Social/ProfileShell/Skyliner';
import ProfileNav from '../../components/Social/ProfileShell/ProfileNav';
import TimelineTab from '../../components/Social/ProfileShell/TimelineTab';
import AboutTab from '../../components/Social/ProfileShell/About';
import FriendsTab from '../../components/Social/ProfileShell/Friends';
import PhotosTab from '../../components/Social/ProfileShell/Photos';

import BGImage from './imgs/1x/background.png';

const useStyles = makeStyles(theme => ({
    chatMenu: {
        position: 'fixed',
        bottom: '0',
        right: '0',
    },
    chatPaper: {        
        minHeight: 300,
        minWidth: 200,
        padding: '10px 10px',

    },
    chatInput: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        margin: '0px 10px',
    },
    chatList: {
        display: 'flex',
        justifyContent: 'flex-start',
        paddingInlineStart: '0px'
    },   
    listItem: {
        padding: '0px 0px 0px 0px'
    },
    wip: {
        marginTop: 50,
    },
    conceptContainer: {
        // height: '80vh',
        // margin: '50px 0px',
    },
    socialMedia: {
        [theme.breakpoints.down('md')]: {
            // height: '100%',
            width: '70%',
            margin: '10px auto',
        },
        [theme.breakpoints.down('sm')]: {
            // height: '100%',
            width: '80%',
            margin: '10px auto',
        },
        [theme.breakpoints.down('xs')]: {
            // height: '100%',
            width: '80%',
            margin: '10px auto 10px auto',
        },
        // height: '100%',
        width: 600,
        margin: '10px auto 30px auto',
        padding: 40
    },
    intro: {
        // position: 'relative',
        backgroundImage: `url(${BGImage})`,
        backgroundSize: 'cover',
        height: '160vh',
        width: '100%',
        margin: '100px 0px 100px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

function Profile() {

    const [user, setUser] = useState();
    const [onLoad, setOnLoad] = useState(false);
    const [profileTimeline, setProfileTimeline] = useState(true);
    const [About, setAbout] = useState(false);
    const [Friends, setFriends] = useState(false);
    const [Photos, setPhotos] = useState(false);
    const [open, setOpen] = useState(true);

    const classes = useStyles();
    const theme = useTheme();

    const auth = useContext(AuthContext);

    const lg = useMediaQuery(theme.breakpoints.up('md'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    function handleClick(event) {
        setOpen(!open);
    }

    function handleTabChange(tab) {
        switch (tab) {
            case 'Timeline':
                setProfileTimeline(true);
                setAbout(false);
                setFriends(false);
                setPhotos(false);
                break;
            case 'About':
                setAbout(true);
                setProfileTimeline(false);
                setFriends(false);
                setPhotos(false);
                break;
            case 'Friends':
                setFriends(true);
                setProfileTimeline(false);
                setAbout(false);
                setPhotos(false);
                break;
            case 'Photos': 
                setPhotos(true);
                setProfileTimeline(false);
                setAbout(false);
                setFriends(false);
                break;
            default:
                break; 
        }
    };

    const renderDescription = () => {
        if(xs) { return <DescPopover /> }
        if(sm) { return <DescPaper /> }
        if(md) { return <DescPaper /> }
        if(lg) { return <DescPaper/> }
    };

    function renderTabs() {
        if(user) {
            if(profileTimeline){return <TimelineTab page={{handle: 'HeathBanner'}} />}
            if(About){return <AboutTab handle={{handle: 'HeathBanner'}} auth={auth.user} info={user.info} />}
            if(Friends){return <FriendsTab user={user} />}
            if(Photos){return <PhotosTab info={user.info} />}
        }
    }

    useEffect(() => {
        const username = 'HeathBanner'
        if(!onLoad){
            setOnLoad(true)
            fetch('/api/social/getProfile', {
                method: 'POST',
                body: JSON.stringify({username: username}),
                headers: {'Content-Type': 'application/json'}
            }).then(res => res.json())
            .then((result) => {
                setUser(result)
            });
        }
    })

    return (
        <Fragment>

            <Grid item xs={12}>
                <Typography className={classes.wip} variant="h2" align="center" color="primary">
                    WORK IN PROGRESS
                </Typography>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>

                <div className={classes.intro}>

                    {renderDescription()}
                    
                </div>

            </Grid>
            <div style={{height: '100vh', width: '100vw', position: 'relative'}}>
                <div className="row marg">
                    <div style={{zIndex: 1500}} className="col-12 colp">
                        <SocialDrawer />
                    </div>
                </div>
                <div className="row marg">
                    <div style={{zIndex: 1400}} className="col-12 colp">
                        <Skyliner user={user} handleClick={handleClick} auth={auth.user} username={'HeathBanner'} />
                    </div>
                </div>
                <Grid container>
                    <Grid item style={{zIndex: 1500}} xs={12}>
                        <ProfileNav  tabChange={handleTabChange} />
                    </Grid>
                </Grid>
                <div className="row marg">
                        {renderTabs()}
                </div>
            </div>
        </Fragment>
    );
}

export default Profile;