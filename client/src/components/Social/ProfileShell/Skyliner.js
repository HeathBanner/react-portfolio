import React, { Fragment, useContext, useEffect, useState } from 'react';

import AuthContext from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, Fab, Icon } from '@material-ui/core';


import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
    skyliner: {
        width: '100%',
        height: '40vh',
        // overflow: 'visible'
    },
    skylinerRow: {
        [theme.breakpoints.down('xs')]: {
            height: '40vh',
            display: 'flex',
            alignItems: 'flex-end',    
            justifyContent: 'center',
        },
        height: '40vh',
        display: 'flex',
        alignItems: 'flex-end',
    },
    skylinerContent: {
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'row',
        flexWrap: 'none',
    },
    profileAvatar: {
        [theme.breakpoints.down('md')]: {
            width: 120,
            height: 120,
            margin: '0px 20px 0px 10px',    
        },
        [theme.breakpoints.down('sm')]: {
            width: 120,
            height: 120,
            margin: '0px 20px 0px 10px',
        },
        [theme.breakpoints.down('xs')]: {
            width: 90,
            height: 90,
            margin: '0px 10px 0px 10px',
        },
        width: 120,
        height: 120,
        margin: '0px 20px 0px 10px',
        zIndex: 1800,
    },
    username: {
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.7rem'
        },
        color: 'white',
    },
    skylinerDivLeft: {
        [theme.breakpoints.down('xs')]: {
            bottom:  -7,
        },
        display: 'flex',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom:  -10,
        left: 20,
        overflow: 'visible',
    },
    skylinerDivRight: {
        padding: '0px 20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    Fab: {
        margin: '10px 20px',
    },
}))

function Skyliner(props) {

    const classes = useStyles();
    const auth = useContext(AuthContext);
    
    const [loaded, setLoaded] = useState(false);
    const [friend, setFriend] = useState(false);


    useEffect(() => {
        if((!loaded)&&(auth.user)&&(props.user)){
            setLoaded(true)
            var result = auth.user.info.friendList.filter(friend => props.user.username === friend.username)
            if(result.length === 1){setFriend(true)};
        }
    });

    function addFriend() {

        const data = {
            friendId: props.user._id,
            personalId: auth.user._id,
        };

        fetch('/api/social/addFriend', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then((result) => {
            setFriend(true);
        });
    };

    function renderSkyliner() {
        if(props.user) {
            return (
                <Fragment>
                    <Parallax
                    bgImage={props.user.info.skyline}
                    bgImageAlt="Skyliner"
                    strength={200}
                    className={classes.skyliner}
                    >
                        <div className={`row ${classes.skylinerRow}`}>
                            <div className={`col-6 ${classes.skylinerContent}`}>
                                <div className={classes.skylinerDivLeft}>
                                <Avatar src={`https://media.licdn.com/dms/image/C5603AQHqTyUqMrqJZA/profile-displayphoto-shrink_200_200/0?e=1569456000&v=beta&t=YtZoiTHVJEXn3syxgpM5VVg7zTMFjD6SXZLVKHh9JB8`} className={classes.profileAvatar}/>
                                    <Typography
                                        display="inline"
                                        variant="h2"
                                        color="textPrimary"
                                        className={classes.username}
                                    >
                                        {props.username}
                                    </Typography>
                                </div>
                            </div>
                            <div className={`col-6 ${classes.skylinerContent}`}>
                                <div className={classes.skylinerDivRight}>
                                    {renderButtons()}                            
                                </div>
                            </div>
                        </div>
                    </Parallax>
                
                </Fragment>
            );
        } else{return ''}
    }

    function renderButtons() {
        if(props.auth) {
            if(props.auth.username !== props.username) {
                return (
                    <Fragment>
                        {friend ? 
                            <Fab className={classes.Fab}>
                                <Icon>person_outline</Icon> 
                            </Fab>
                        : 
                            <Fab onClick={addFriend} className={classes.Fab}>
                                <Icon>person_add</Icon>
                            </Fab>
                        }
                    </Fragment>
                );
            }
        }
    }

    return (
        <Fragment>
                {renderSkyliner()}
        </Fragment>
    );
}


export default Skyliner;