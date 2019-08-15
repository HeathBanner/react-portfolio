import React, { useContext } from 'react';

import { AppContext } from '../../context/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, GridList, GridListTile, GridListTileBar, IconButton, Icon } from '@material-ui/core';

import Background from './imgs/1x/skills.png';

import ReactLogo from './imgs/React.png';
import Material from './imgs/MaterialUI.png';
import Mongo from './imgs/mongodb.png';
import MySQL from './imgs/mysql.svg';
import HandleBars from './imgs/handlebars.png';
import Passport from './imgs/passport.png';
import Node from './imgs/nodejs.png';
import JQuery from './imgs/jquery.png';
import HTML from './imgs/html.png';
import CSS from './imgs/css.png';
import GitHub from './imgs/github.svg';
import Bash from './imgs/bash.png';

const tileData = [
    {
        img: ReactLogo,
        title: 'React JS',
        link: `https://reactjs.org/`
    },
    {
        img: Material,
        title: 'Material UI',
        link: `https://material-ui.com`
    },
    {
        img: Mongo,
        title: 'Mongo DB',
        link: `https://www.mongodb.com/`
    },
    {
        img: MySQL,
        title: 'MySQL',
        link: `https://www.mysql.com/`
    },
    {
        img: HandleBars,
        title: 'HandleBars JS',
        link: `https://handlebarsjs.com/`
    },
    {
        img: Passport,
        title: 'Passport',
        link: `http://www.passportjs.org/`
    },
    {
        img: Node,
        title: 'Node JS',
        link: `https://nodejs.org/en/`
    },
    {
        img: JQuery,
        title: 'JQuery',
        link: `https://jquery.com/`
    },
    {
        img: HTML,
        title: 'HTML 5',
        link: `https://www.w3schools.com/html/html5_intro.asp`
    },
    {
        img: CSS,
        title: 'CSS 3',
        link: `https://www.w3schools.com/css/`
    },
    {
        img: GitHub,
        title: 'Git Hub',
        link: `https://github.com/`
    },
    {
        img: Bash,
        title: 'Bash',
        link: `https://en.wikipedia.org/wiki/Bash_(Unix_shell)`
    }
];

const useStyles = makeStyles(theme => ({
    container: {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        paddingBottom: 60,
    },
    header: {
        [theme.breakpoints.up('lg')]: {
            marginTop: 240,
        },
        marginTop: 120,
        color: 'white',
    },
    root: {
        marginTop: 80,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflowY: 'none',
    },
    gridList: {
        [theme.breakpoints.up('lg')]: {
            width: '75%',
        },
        [theme.breakpoints.down('md')]: {
            width: '80%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
        width: 700,
    },
    tile: {

    },
    imgs: {
        width: 'auto',
        height: '100%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)'
    },
}));

const Skills = () => {

    const classes = useStyles();
    const holder = useContext(AppContext);

    const getCols = () => {
        switch (true) {
            case holder.xs:
                return 2;
            case holder.sm:
                return 3;
            default:
                return 4;
        }
    };

    const getHeight = () => {
        switch (true) {
            case holder.sm:
                return 180;
            case holder.md:
                return 180;
            case holder.lg:
                return 240;
            default:
                return 320;
        }
    };

    return (

        <Grid item xs={12} className={classes.container}>

                <Typography className={classes.header} variant={holder.sm ? 'h2' : 'h1'} align="center">
                    What Do I Know?
                </Typography>

                <div className={classes.root}>

                    <GridList cellHeight={getHeight()} cols={getCols()} spacing={12} className={classes.gridList}>
                        
                        {
                            tileData.map(tile => (

                                <GridListTile
                                    className={classes.tile}
                                    classes={{ imgFullWidth: classes.imgs }}
                                    key={tile.img}
                                >

                                    <img className={classes.imgs} src={tile.img} alt={tile.title} />

                                    <GridListTileBar
                                        title={tile.title}
                                        actionIcon={
                                            <a 
                                                href={tile.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <IconButton 
                                                    aria-label={`info about ${tile.title}`} 
                                                    className={classes.icon}
                                                    
                                                >
                                                    <Icon>info</Icon>
                                                </IconButton>
                                            </a>

                                        }
                                    />

                                </GridListTile>
                            ))
                        }

                    </GridList>

                </div>

        </Grid>
    );
};

export default Skills;