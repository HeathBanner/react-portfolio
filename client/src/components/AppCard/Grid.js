import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, GridList, GridListTile } from '@material-ui/core';

import Card from './Card';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('md')]: {
      paddingLeft: '100px',
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '100px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '80px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0px',
    }
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  tile: {
    // width: '400px !important',
  },  
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const apps = [
  {
    title: 'Future Scaper',
    description: 'This app uses the USDA database to help our users form better and more precise landscaping projects.',
    image: '/imgs/logo.png',
    website: 'https://futurescaper.herokuapp.com/',
    repo: 'https://github.com/HeathBanner/FutureScaper'
  },
  {
    title: 'Scraper Boy',
    description: "Scraper Boy currently pulls articles from CNN's US and World sections and stores it with in the database. User are then allowed to comment or favorite each article.",
    image: '/imgs/logo.png',
    website: 'https://scrapeyboi.herokuapp.com/',
    repo: 'https://github.com/HeathBanner/Scraper'
  },
  {
    title: 'Roam',
    description: 'ROAM is a travel app where the user can login and navigate around the world to different travel destinations.',
    image: '/imgs/logo.png',
    website: 'https://snappytravelapp.herokuapp.com/',
    repo: 'https://github.com/Pawhurr/Roam'
  }
]

export default function SingleLineGridList() {
  
  const classes = useStyles();
  const theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const gridHeight = () => {
      if(xs) {return 310}
      if(sm) {return 330}
      if(md) {return 350}
      if(mdUp) {return 350}
  }

  const gridCols = () => {
    if(xs) {return 1}
    if(sm) {return 2}
    if(md) {return 2}
    if(mdUp) {return 2}
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={gridHeight()} spacing={8} className={classes.gridList} cols={gridCols()}>

        {
          apps.map((app, index) => {
          return (
            <GridListTile classes={{tile: classes.tile}} key={index} >
              <Card app={app} />
            </GridListTile>
          );
        })
        }

      </GridList>
    </div>
  );
}