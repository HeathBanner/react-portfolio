import React, {
    Fragment,
    useContext,
} from 'react';

import { AppContext } from '../../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    Icon,
    CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper, 
    },
    header: {
        margin: '20px 0px',
        textAlign: 'center',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '80%',
        margin: '0 auto !important',
    },
    tile: {
        width: 800
    },
    titleBar: {
        background: 
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
    progress: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const Photos = (props) => {

    const classes = useStyles();
    const holder = useContext(AppContext);
    
    const gridHeight = () => {
        switch (true) {
            case holder.xs:
                return 120;
            case holder.sm:
                return 240;
            default:
                return 300;
        }
    };

    return (
        <Fragment>

            <Grid item xs={12}>

                <Typography variant="h3" color="textSecondary" className={classes.header}>
                    Gallery
                </Typography>

            </Grid>

            <Grid className={!props.info.gallery.length >= 1 ? classes.progress : classes.none} item xs={12}>

                {   
                    props.info.gallery.length >= 1

                        ?

                    <GridList cols={2} cellHeight={gridHeight()} spacing={12} className={classes.gridList}>
                    
                        { 
                            props.info.gallery.map((photo, index) => {
                                return (
                                    <GridListTile cols={1} key={index} className={classes.tile}>
                                        
                                        <img src={photo.img} alt={photo.title} />
                                        
                                        <GridListTileBar 
                                            title={photo.title}
                                            titlePosition="top"
                                            actionIcon={
                                                <IconButton className={classes.icon}>
                                                    <Icon>star_border</Icon>
                                                </IconButton>
                                            }
                                            actionPosition="left"
                                            className={classes.titleBar}
                                        />
                                    </GridListTile>
                                );
                            })
                        }

                    </GridList>

                        :

                    <CircularProgress size={80} />
                }


            </Grid>

        </Fragment>
    );
};

export default Photos;
