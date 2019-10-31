import React, {
    useEffect,
    useState,
    useContext } from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    ListSubheader,
    Typography,
    Avatar,
    LinearProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
    },
    listContainer: {},
    gridList: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: '0px auto 40px auto !important',
    },
    subheader: {
        textAlign: 'center',
        margin: '20px 0px',
    },
    tile: {
        [theme.breakpoints.down('xs')]: {
            width: 400,
        },
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    avatar: {
        width: 60,
        height: 60,
        margin: '0px 20px 0px 10px',
    },
}));

const Friends = (props) => {

    const classes = useStyles();
    const holder = useContext(AppContext);
    
    const gridHeight = () => {
        switch (true) {
            case holder.xs:
                return 120;
            case holder.sm:
                return 160;
            default:
                return 300;
        }
    };

    const [friendList, setFriendList] = useState('');

    useEffect(() => {
        if (!props.user) { return } 
        fetch('/api/social/getFriends', {
            method: 'POST',
            body: JSON.stringify({ id: props.user._id }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then((result) => {
                setFriendList([...result])
            });
    }, [props]);

    const renderFriends = () => {
        
        if(friendList) {
            return (
                friendList.map((friend) => {
                    return (
                        <GridListTile cols={holder.sm ? 1 : 0.7}  className={classes.tile} key={friend._id} >
                            
                            <img src={friend.info.skyline} alt="skyline" />
                            
                            <GridListTileBar 
                                title={friend.username}
                                actionIcon={
                                    <Avatar src={friend.info.avatar} className={classes.avatar} />  
                                }
                                actionPosition="left"
                            />

                        </GridListTile>
                    );
                })  
            );
        } else {
            return (
                <GridListTile cols={1} className={classes.tile} >
                    <LinearProgress />
                </GridListTile>
            );
        }
    };

    return (
        <Grid item className={classes.listContainer} xs={12}>

            <GridList cellHeight={gridHeight()} spacing={18} col={2.5} className={classes.gridList}>
                
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                    
                    <ListSubheader component="div">

                        <Typography variant="h3" color="textSecondary" className={classes.subheader}>
                            Friends
                        </Typography>
                    
                    </ListSubheader>

                </GridListTile>

                {renderFriends()}

            </GridList>

        </Grid>
    );
};

export default Friends;
