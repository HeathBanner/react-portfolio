import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/AuthContext';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import Moment from 'react-moment';
import FormatDate from 'moment';

const links = [
  { link: '/', text: 'Home', icon: 'face' }, 
  { link: '/showcase', text: 'Show Case', icon: 'code' }, 
  { link: '/contact', text: 'Contact', icon: 'contact_phone' },
];

const PersistentDrawer = (props) => {
  
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
      [theme.breakpoints.down('lg')]:{
        width: `calc(100% - 240px)`,
        marginLeft: '240px',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
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
      background: props.contact ? 'linear-gradient(45deg, #ff6a38 30%, #ff5938 90%)' : props.mood ? `${props.mood.toolbar}` : 'linear-gradient(45deg, #539ad4 30%, #3676aa 90%)',
    },
    menuButton: {
        position: 'absolute',
        left: '3%',
        marginRight: theme.spacing(2),
        color: props.mood ? `${props.mood.menuButton}` : 'white',
    },
    barTitle: {
      display: 'inline-block',
      color: props.mood ? `${props.mood.barTitle}` : 'white',
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
      [theme.breakpoints.up('lg')]: {
        width: 300,
      },
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      [theme.breakpoints.up('lg')]:{
        width: 300,
      },
      [theme.breakpoints.down('md')]:{
        width: 240,
      },
      [theme.breakpoints.down('sm')]:{
        width: 200,
      },
      [theme.breakpoints.down('xs')]:{
        width: 150,
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
      [theme.breakpoints.down('lg')]:{
        marginLeft: -240,
      },
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
      [theme.breakpoints.down('sm')]: {
        display: 'none'
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
    listButtons: {
      transition: 'transform .4s ease',
      '&:hover': {
        transform: 'translate(20px, 0px)',
      },
    },
  }));

  const classes = useStyles();
  const theme = useTheme();
  const holder = useContext(AppContext);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getTime = () => {
    date = FormatDate()
  };

  let date = ''
  setInterval(getTime, 30000);

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
              <Icon fontSize={holder.xs ? 'default' : 'large'}>menu</Icon>
            </IconButton>

            <Link to="/" className={classes.homeLink}>

              <Typography className={classes.barTitle} variant="h5" noWrap>
                Heath Banner
              </Typography>

            </Link>

            <div className={classes.moment}>

              <Icon  className={classes.clock}>access_time</Icon>
             
              <Typography variant="body1">
                <Moment interval={30000} date={date} format={'dddd h:mm a'} />
              </Typography>
              
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
              {
                theme.direction === 'ltr'
                  ? 
                <Icon fontSize="large">chevron_left</Icon>
                  :
                <Icon fontSize="large">cheveron_right</Icon>
              }
            </IconButton>

          </div>

          <Divider />

          <List>

            {
              links.map((link, index) => (
                <Link key={index} style={{ color: 'black', textDecoration: 'none' }} to={link.link}>

                  <ListItem className={classes.listButtons} button>

                    <ListItemIcon style={{ minWidth: holder.xs ? 0 : 56, marginRight: holder.xs ? 10 : 0 }}>
                      <Icon fontSize={holder.xs ? 'default' : 'large'}>{link.icon}</Icon>
                    </ListItemIcon>

                    <ListItemText primary={link.text} primaryTypographyProps={{ variant: holder.xs ? 'body1' : 'h5' }} />

                  </ListItem>

                </Link>
              ))
            }

          </List>

          <Divider />

          </Drawer>

      </div>
  );
};

export default PersistentDrawer;