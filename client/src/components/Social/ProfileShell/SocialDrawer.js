import React, { useContext, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Drawer, Avatar, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import Moment from 'react-moment';
import FormatDate from 'moment';

import AuthContext from '../../../context/AuthContext';



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
      [theme.breakpoints.down('md')]: {
        width: `calc(100% - 240px)`,
        marginLeft: '240px',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      [theme.breakpoints.down('sm')]: {
        width: `calc(100% - 180px)`,
        marginLeft: '180px',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      [theme.breakpoints.down('xs')]: {
        width: `calc(100% - 140px)`,
        marginLeft: '140px',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }
    },
    toolBar: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'nowrap',
      // justifyContent: 'center',
      // display: 'block',
      // textAlign: 'center',
      background: 'rgb(255, 145, 71)',
    },
    menuButton: {
        position: 'absolute',
        left: '3%',
        marginRight: theme.spacing(2),
        color: props.mood ? `${props.mood.menuButton}` : 'white',
    },
    barTitle: {
      [theme.breakpoints.down('md')]: {

      },
      [theme.breakpoints.down('sm')]: {

      },
      [theme.breakpoints.down('xs')]: {
        top: '50%',
        right: '0%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(255, 145, 71)',
        zIndex: '10',
        padding: '0px 5px',
      },
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      alignItems: 'center',
      color: props.mood ? `${props.mood.barTitle}` : 'white',
      width: 'auto',
    },
    typo: {
      width: 'auto',
      display: 'inline',
      marginLeft: '10px',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: '0px',
      // width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      [theme.breakpoints.down('md')]:{
        width: 240,
      },
      [theme.breakpoints.down('sm')]:{
        width: 180,
      },
      [theme.breakpoints.down('xs')]:{
        width: 140,
      },
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
      [theme.breakpoints.down('md')]:{
        marginLeft: -240,
      },
      [theme.breakpoints.down('sm')]:{
        marginLeft: -180,
      },
      [theme.breakpoints.down('xs')]:{
        marginLeft: -140
      },
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    moment: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      position: 'absolute',
      right: '3%',
      marginRight: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
    },
    clock: {
      marginRight: '5px'
    },
    link: {
      color: 'black',
      textDecoration: 'none',
      '&:hover': {
        color: 'black',
      }
    },
    listItemIcon: {
      minWidth: '0px !important',
      marginRight: '10px',
    },
  }));

  
  const links = ['/', '/', '/'];
  
  const classes = useStyles();
  const theme = useTheme();
  
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  
  var drawerWidth = 240;
  const drawerWidthDynam = () => {
      if(xs) {return drawerWidth = 120}
      if(sm) {return drawerWidth = 180}
      if(md) {return drawerWidth = 240}
  }

  drawerWidthDynam()

  const value = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [inbox, setInbox] = useState(false); 
  const [settings, setSettings] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleMenuItem() {
    // value.onLogout();
  }

  function renderRedirect() {
    if(inbox){return <Redirect to={'/inbox'} />}
    if(settings){return <Redirect to={'/settings'} />}
  }

  function getTime() {
    date = FormatDate()
  }
  var date = ''
  setInterval(getTime, 30000);

  return (
      <Fragment>
        {renderRedirect()}
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="relative"
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

                <Link className={classes.barTitle} to='/'>
                  <Avatar alt={value.user ? value.user.username : ''} src='/imgs/avatar.jpg' />
                  <Typography className={classes.typo} variant="h6">
                    {value.user ? value.user.username : 'Anon'}
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
              {['Inbox', 'Settings', 'Find Friends'].map((text, index) => (
                <Link key={index} style={{color: 'black', textDecoration: 'none'}} to={links[index]}>
                  <ListItem button key={text}>
                    <ListItemIcon className={classes.listItemIcon} >{index % 2 === 0 ? <Icon>inbox</Icon> : <Icon>mail</Icon>}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
                <ListItem onClick={handleMenuItem} button key='Logout'>
                  <ListItemIcon className={classes.listItemIcon}><Icon>mail</Icon></ListItemIcon>
                  <ListItemText primary='Logout' />
                </ListItem>
            </List>
            <Divider />
            </Drawer>
        </div>
      </Fragment>
  );
}