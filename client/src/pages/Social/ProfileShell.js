import React, {
    useEffect,
    useState,
    useContext,
} from 'react';

import { AppContext } from '../../context/AuthContext';

import {  Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DescPopover from '../../components/Showcase/Social/DescPopover';
import SocialDrawer from '../../components/Showcase/Social/SocialDrawer';
import Skyliner from '../../components/Showcase/Social/Skyliner';
import ProfileNav from '../../components/Showcase/Social/ProfileNav';
import TimelineTab from '../../components/Showcase/Social/TimelineTab';
import AboutTab from '../../components/Showcase/Social/About';
import FriendsTab from '../../components/Showcase/Social/Friends';
import PhotosTab from '../../components/Showcase/Social/Photos';

const initTabs = {
    ProfileTimeline: false,
    About: true,
    Friends: false,
    Photos: false,
};

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
    socialHeader: {
        [theme.breakpoints.down('xs')]: {
            flexWrap: 'wrap',
        },
        marginTop: 50,
        padding: '20px 0px 60px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    conceptContainer: {},
    socialMedia: {
        [theme.breakpoints.down('md')]: {
            width: '70%',
            margin: '10px auto',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            margin: '10px auto',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
            margin: '10px auto 10px auto',
        },
        width: 600,
        margin: '10px auto 30px auto',
        padding: 40
    },
    background: {
        [theme.breakpoints.down('sm')]: {
            borderWidth: '0 100vw 90px 0',
        },
        [theme.breakpoints.down('xs')]: {
            borderWidth: '0 100vw 40px 0', 
        },
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 100vw 100px 0',
        borderColor: 'transparent #0000a2 transparent transparent',
        transform: 'scale(1.0001)',
    },
    intro: {
        [theme.breakpoints.down('xs')]: {
            height: '100vh',
        },
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    whiteOut: {
        backgroundColor: 'white',
        position: 'relative',
    },
}));

const Profile = () => {

    const classes = useStyles();
    const holder = useContext(AppContext);

    const [user, setUser] = useState();
    const [tabs, setTabs] = useState({ ...initTabs });
    const [open, setOpen] = useState(true);

    const handleClick = () => { setOpen(!open); };

    const handleTabChange = (tab) => {
        switch (tab) {
            case 'Timeline':
                setTabs({ ...initTabs, profileTimeline: true });
                break;
            case 'About':
                setTabs({ ...initTabs, about: true });
                break;
            case 'Friends':
                setTabs({ ...initTabs, friends: true });
                break;
            case 'Photos': 
                setTabs({ ...initTabs, photos: true });
                break;
            default:
                break;
        }
    };

    const renderTabs = () => {
        if (!user) { return; }
        switch (true) {
            case tabs.profileTimeline:
                return <TimelineTab page={{handle: 'HeathBanner'}} />;
            case tabs.about:
                return <AboutTab handle={{handle: 'HeathBanner'}} auth={holder.auth} info={user.info} />;
            case tabs.friends:
                return <FriendsTab user={user} />;
            case tabs.photos:
                return <PhotosTab info={user.info} />;
            default:
                return <TimelineTab page={{handle: 'HeathBanner'}} />;
        }
    };

    useEffect(() => {
        const username = 'HeathBanner';
        fetch('/api/social/getProfile', {
            method: 'POST',
            body: JSON.stringify({ username }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then((result) => { setUser(result); })
            .catch(() => { return; });
    }, []);

    return (
        <Grid container>

            <Grid className={classes.background} item xs={12}></Grid>

            <Grid className={classes.socialHeader} item xs={12}>

                <Typography
                    className={classes.wip}
                    variant={holder.xs ? 'h5' : 'h4'}
                    align="center"
                    color="primary"
                >
                    Social Media Concept
                </Typography>
                
                <DescPopover />

            </Grid>
            <Grid style={{ zIndex: 1301 }} className={classes.whiteOut} item xs={12}>

                <SocialDrawer />

            </Grid>
            <Grid style={{ zIndex: 1300 }} className={classes.whiteOut} item xs={12}>

                <Skyliner user={user} handleClick={handleClick} auth={holder.auth} username={'HeathBanner'} />
            
            </Grid>
            <Grid style={{ zIndex: 1300 }} item xs={12}>

                <ProfileNav  tabChange={handleTabChange} />

            </Grid>
            <Grid style={{ backgroundColor: 'white' }} item xs={12}>

                {renderTabs()}

            </Grid>

        </Grid>
    );
};

export default Profile;
