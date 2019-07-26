import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, Paper, Button } from '@material-ui/core';

import Tilt from "react-tilt";

const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.up('md')]: {
      width: 300,
      height: 320,
    },
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 300,  
    },
    [theme.breakpoints.down('xs')]: {
      height: 280,  
      margin: '20px auto 0px auto',
    },
    margin: '20px 0px 0px 0px',
    backgroundColor: 'rgb(235, 235, 235)',
    position: 'relative',
  },
  cardHeader: {
    padding: '0px 0px',
    marginBottom: '10px',
  },
  tilt: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    [theme.breakpoints.down('xs')]: {
      height: 70,
      width: 'auto',
    },
    height: 100,
    width: 'auto',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem'
    },
    color: 'white'
  },
  paper: {
    background: 'linear-gradient(45deg, #ffa333 30%, #ff8c00 90%)',
    borderRadius: '4px 4px 0px 0px',
    padding: '10px'
  },
  button: {
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: '50%',
    right: '50%',    
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>

      <CardHeader
        className={classes.cardHeader}
        title={
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h5" align="center" >
              {props.app.title}
            </Typography>
          </Paper>
        }
      />

      <Tilt className={classes.tilt}>
          <img src={props.app.image} alt={props.app.title} className={classes.media} />
      </Tilt>

      <CardContent style={{padding: '0px 10px'}}>

        <Typography variant="body2" color="textSecondary" align="center" component="p">
          {props.app.description}
        </Typography>

        <div className={classes.link}>
          <a href={props.app.website} target="_blank">
            <Button className={classes.button}>
              Website
            </Button>
          </a>
          <a href={props.app.repo} target="_blank">
            <Button>
              Repo
            </Button>
          </a>
        </div>

      </CardContent>

    </Card>
  );
}