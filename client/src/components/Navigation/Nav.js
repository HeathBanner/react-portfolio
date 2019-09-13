import React, { Fragment, useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppContext } from '../../context/AuthContext';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Fab,
  Zoom,
  Icon,
  Drawer,
  List,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 5000,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'none',
    position: 'fixed',
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
    color: 'white',
    alignItems: 'center',
    flexWrap: 'nowrap',
    background: 'none',
  },
  toolBarTrigger: {
    display: 'flex',
    color: '#0000a2',
    alignItems: 'center',
    flexWrap: 'nowrap',
    background: 'white',
  },
  toolbarRegular: {
    minHeight: 0,
  },
  menuButton: {
      position: 'absolute',
      left: '3%',
      marginRight: theme.spacing(2),
      color: 'white',
  },
  barTitle: {
    display: 'inline-block',
  },
  homeLink: {
    color: 'inherit',
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

const links = [
  { link: '/', text: 'Home', icon: 'face' }, 
  { link: '/showcase', text: 'Show Case', icon: 'code' }, 
  { link: '/contact', text: 'Contact', icon: 'contact_phone' },
];

const ScrollTop = (props) => {
  const { children } = props;
  const classes = useStyles();
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={props.trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const BackToTop = (props) => {

  const classes = useStyles();
  const theme = useTheme();
  const holder = useContext(AppContext);

  const [open, setOpen] = useState(false);

  const window = props.window;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>

      <CssBaseline />

      <AppBar className={classes.appBar}>
        <Toolbar
          className={trigger ? classes.toolBarTrigger : classes.toolBar}
        >

          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <Icon fontSize={holder.xs ? 'default' : 'large'}>menu</Icon>
          </IconButton>

          <Link to="/" className={classes.homeLink}>
            <Typography
              className={classes.barTitle}
              variant="h5"
              noWrap
            >
              Heath Banner
            </Typography>
          </Link>

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

      <Toolbar
        classes={{
          regular: classes.toolbarRegular,
        }}
        id="back-to-top-anchor"
      />

      <ScrollTop trigger={trigger} {...props}>
        <Fab
          style={{ zIndex: 5500 }}
          color="secondary"
          size={holder.xs ? 'small' : 'large'}
          aria-label="scroll back to top"
        >
          <Icon>keyboard_arrow_up</Icon>
        </Fab>
      </ScrollTop>

    </Fragment>
  );
}

export default BackToTop;