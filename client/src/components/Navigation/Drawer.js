import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import Moment from 'react-moment';
import FormatDate from 'moment';

const drawerWidth = 240;

const links = ['/', '/about', '/contact'];

export default function PersistentDrawerLeft(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolBar: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'nowrap',
      background: props.contact ? 'rgb(255, 145, 71)' : props.mood ? `${props.mood.toolbar}` : 'rgb(196, 196, 196)',
    },
    menuButton: {
        position: 'absolute',
        left: '3%',
        marginRight: theme.spacing(2),
        color: props.mood ? `${props.mood.menuButton}` : 'white',
    },
    barTitle: {
      display: 'inline-block',
      color: props.mood ? `${props.mood.barTitle}` : 'white'
    },
    homeLink: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    moment: {
      position: 'absolute',
      right: '3%',
      marginRight: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
    },
    clock: {
      marginRight: '5px'
    }
  }));
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function getTime() {
    date = FormatDate()
    console.log(date)
  }
  var date = ''
  setInterval(getTime, 30000);
  console.log(date)

  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolBar}>

            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Icon>menu</Icon>
            </IconButton>

            <Link to="/" className={classes.homeLink}>
              <Typography className={classes.barTitle} variant="h6" noWrap>
                Heath Banner
              </Typography>
            </Link>

            <div className={classes.moment}>
              <Icon className={classes.clock}>access_time</Icon>
              <Moment interval={30000} date={date} format={'dddd h:mm a'} />
            </div>

          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <Icon>chevron_left</Icon> : <Icon>cheveron_right</Icon>}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Home', 'About', 'Contact'].map((text, index) => (
              <Link key={index} style={{color: 'black', textDecoration: 'none'}} to={links[index]}>
                <ListItem button>
                  <ListItemIcon>{index % 2 === 0 ? <Icon>inbox</Icon> : <Icon>mail</Icon>}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          </Drawer>
      </div>
  );
}