import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, Paper, Button } from '@material-ui/core';

import Tilt from "react-tilt";

const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.up('md')]: {
      width: 400,
      height: 300,
      backgroundColor: 'green',
      margin: '50px auto',
    },
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 300,  
      backgroundColor: 'red',
      margin: '50px auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: 200,
      height: 300,  
      backgroundColor: 'blue',
      margin: '20px 0px 10px 0px',
    },
    // backgroundColor: 'rgb(235, 235, 235)',
    position: 'relative',
  },
  tilt: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    [theme.breakpoints.down('xs')]: {
      height: 70,
      width: 70,
    },
    height: 100,
    width: 100,
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem'
    },
    color: 'white'
  },
  paper: {
    backgroundColor: 'rgb(255, 140, 0)',
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
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>

      <CardHeader
        title={
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h5" align="center" >
              {props.app.title}
            </Typography>
          </Paper>
        }
      />

      <Tilt className={classes.tilt}>
          <img src={props.app.image} className={classes.media} />
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
          <a href={props.repo} target="_blank">
            <Button>
              Repo
            </Button>
          </a>
        </div>

      </CardContent>

    </Card>
  );
}