import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Icon, IconButton } from '@material-ui/core';

import { AppContext } from '../../../../context/AuthContext';

const useStyles = makeStyles(theme => ({
  menuIcon: {
    color: 'white',
    transition: 'transform .4s ease',
    '&:hover': {
      transform: 'scale(1.1)'
    },
  },
  list: {
    [theme.breakpoints.up('lg')]: {
      width: 300
    },
    [theme.breakpoints.down('xs')]: {
      width: 150
    },
    width: 250,
  },
  listItems: {
    [theme.breakpoints.down('xs')]: {
      padding: '8px 16px',
    },
    '&:hover': {
      transform: 'translate(20px, 0px)'
    },
    transition: 'transform .4s ease',
    marginBottom: 20,
    padding: '12px 22px',
    color: 'white',
    background: 'rgb(0, 0, 0, 0.2)'
  },
  iconButtons: {
    [theme.breakpoints.down('xs')]: {
      minWidth: 36
    },
  },
  menuList: {
    marginTop: '30px',
  },
  fullList: {
    width: 'auto',
  },
}));

const drawerList = [
  {
    text: 'Blog',
    icon: 'vertical_split',
    link: '/blog',
  },
  {
    text: 'Editor',
    icon: 'edit',
    link: '/editor',
  },
];

const TemporaryDrawer = props => {

  const classes = useStyles();
  const media = useContext(AppContext);

  const [state, setState] = React.useState({
    left: false,
  });

  const getVariant = () => {

    switch (true) {

      case media.xs:
        return 'h6';
      case media.sm:
        return 'h5';
      case media.md:
        return 'h5';
      default:
        return 'h4';
    }
  };

  const toggleDrawer = (side, open) => event => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    else {
      setState({ ...state, left: open });
    }
  };

  const sideList = () => (

    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List className={classes.menuList}>

        {
          drawerList.map((item) => (

            <Link key={item.text} style={{textDecoration: 'none', color: 'black'}} to={item.link}>
              
              <ListItem className={classes.listItems} button key={item.text}>
              
                <ListItemIcon className={classes.iconButtons}>
                  <Icon style={{ color: 'white' }} fontSize={!media.sm ? 'large' : 'small'}>{item.icon}</Icon>
                </ListItemIcon>
                
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{
                    variant: getVariant(),
                  }}
                />
              
              </ListItem>

            </Link>
          ))
        }

      </List>

    </div>
  );

  return (

    <div>

      <IconButton onClick={toggleDrawer('left', true)}>

        <Icon className={classes.menuIcon} fontSize={props.query ? 'small' : 'large'}>
          menu
        </Icon>

      </IconButton>
      
      <Drawer 
        PaperProps={{ 
          style: {
            background: 'linear-gradient(336deg, rgba(161, 161, 161, 0.07) 0%, rgba(161, 161, 161, 0.07) 50%,rgba(36, 36, 36, 0.07) 50%, rgba(36, 36, 36, 0.07) 100%),linear-gradient(69deg, rgba(68, 68, 68, 0.04) 0%, rgba(68, 68, 68, 0.04) 50%,rgba(203, 203, 203, 0.04) 50%, rgba(203, 203, 203, 0.04) 100%),linear-gradient(291deg, rgba(193, 193, 193, 0.03) 0%, rgba(193, 193, 193, 0.03) 50%,rgba(165, 165, 165, 0.03) 50%, rgba(165, 165, 165, 0.03) 100%),linear-gradient(151deg, rgba(202, 202, 202, 0.02) 0%, rgba(202, 202, 202, 0.02) 50%,rgba(158, 158, 158, 0.02) 50%, rgba(158, 158, 158, 0.02) 100%),linear-gradient(260deg, rgba(87, 87, 87, 0.03) 0%, rgba(87, 87, 87, 0.03) 50%,rgba(45, 45, 45, 0.03) 50%, rgba(45, 45, 45, 0.03) 100%),linear-gradient(323deg, rgba(160, 160, 160, 0.01) 0%, rgba(160, 160, 160, 0.01) 50%,rgba(57, 57, 57, 0.01) 50%, rgba(57, 57, 57, 0.01) 100%),linear-gradient(253deg, rgba(122, 122, 122, 0.02) 0%, rgba(122, 122, 122, 0.02) 50%,rgba(222, 222, 222, 0.02) 50%, rgba(222, 222, 222, 0.02) 100%),linear-gradient(159deg, rgba(213, 213, 213, 0.01) 0%, rgba(213, 213, 213, 0.01) 50%,rgba(149, 149, 149, 0.01) 50%, rgba(149, 149, 149, 0.01) 100%),linear-gradient(138deg, rgba(10, 10, 10, 0.05) 0%, rgba(10, 10, 10, 0.05) 50%,rgba(111, 111, 111, 0.05) 50%, rgba(111, 111, 111, 0.05) 100%),linear-gradient(135deg, #319366,#24f04b)',
          }
        }}
        open={state.left} 
        onClose={toggleDrawer('left', false)}
      >
        
        {sideList('left')}
      
      </Drawer>

    </div>
  );
};

export default TemporaryDrawer;