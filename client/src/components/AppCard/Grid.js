import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';

import Card from './Card';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  tile: {
    overflow: 'visible !important'
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

  return (
    <div className={classes.root}>
      <GridList cellHeight={'auto'} className={classes.gridList} cols={2}>

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