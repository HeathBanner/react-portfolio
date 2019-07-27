import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, GridList, GridListTile, GridListTileBar, ListSubheader, IconButton, Icon } from '@material-ui/core';

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
    },
    headerContainer: {
        marginTop: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
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
        [theme.breakpoints.down('sm')]: {
            width: 550,
            height: 450
        },
        [theme.breakpoints.down('xs')]: {
            width: 400,
            height: 450,
        },
        width: 700,
        height: 600,
    },
    imgs: {
        with: 'auto',
        height: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)'
    },
}));

const Skills = () => {

    const classes = useStyles();
    const theme = useTheme();

    const xs = useMediaQuery(theme.breakpoints.down('xs'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.up('sm'))
    
    const getVariant = () => {
        if(xs) { return 'h2' }
        if(sm) { return 'h2' }
        if(md) { return 'h1' }
    };

    const getCols = () => {

        if(xs) { return 2 }
        if(sm) { return 3 }
        if(md) { return 4 }
    };  

    return (

        <Grid item xs={12} className={classes.container}>

                <Typography className={classes.header} variant={getVariant()} align="center">
                    What Do I Know?
                </Typography>

                <div className={classes.root}>

                    <GridList cellHeight={180} cols={getCols()} spacing={12} className={classes.gridList}>
                        
                        {
                            tileData.map(tile => (

                                <GridListTile key={tile.img}>

                                    <img className={classes.imgs} src={tile.img} alt={tile.title} />

                                    <GridListTileBar
                                        title={tile.title}
                                        actionIcon={
                                            <a href={tile.link} target="_blank">
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