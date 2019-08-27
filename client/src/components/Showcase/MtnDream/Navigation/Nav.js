import React, { useEffect, useState, useContext, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, CircularProgress, Modal, Button, Paper }from '@material-ui/core';

import { AppContext } from '../../../../context/AuthContext';

import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 5,
  },
  appBar: {
    height: 70,
    background: 'linear-gradient(160deg, rgba(226, 226, 226, 0.03) 0%, rgba(226, 226, 226, 0.03) 33.3%,rgba(244, 244, 244, 0.03) 33.3%, rgba(244, 244, 244, 0.03) 66.6%,rgba(110, 110, 110, 0.03) 66.6%, rgba(110, 110, 110, 0.03) 99%),linear-gradient(59deg, rgba(136, 136, 136, 0.08) 0%, rgba(136, 136, 136, 0.08) 33.3%,rgba(150, 150, 150, 0.08) 33.3%, rgba(150, 150, 150, 0.08) 66.6%,rgba(71, 71, 71, 0.08) 66.6%, rgba(71, 71, 71, 0.08) 99%),linear-gradient(299deg, rgba(157, 157, 157, 0.09) 0%, rgba(157, 157, 157, 0.09) 33.3%,rgba(73, 73, 73, 0.09) 33.3%, rgba(73, 73, 73, 0.09) 66.6%,rgba(43, 43, 43, 0.09) 66.6%, rgba(43, 43, 43, 0.09) 99.89999999999999%),linear-gradient(226deg, rgba(81, 81, 81, 0.03) 0%, rgba(81, 81, 81, 0.03) 33.3%,rgba(35, 35, 35, 0.03) 33.3%, rgba(35, 35, 35, 0.03) 66.6%,rgba(170, 170, 170, 0.03) 66.6%, rgba(170, 170, 170, 0.03) 99%),linear-gradient(134deg, rgba(135, 135, 135, 0.05) 0%, rgba(135, 135, 135, 0.05) 33.3%,rgba(150, 150, 150, 0.05) 33.3%, rgba(150, 150, 150, 0.05) 66.6%,rgba(21, 21, 21, 0.05) 66.6%, rgba(21, 21, 21, 0.05) 99%),linear-gradient(135deg, #d9a102,#700807)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  imgLg: {
    height: 70,
    width: 70,
    marginTop: 5
  },
  imgSm: {
    height: 50,
    width: 50,
    marginTop: 5
  }
}));

const Nav = (props) => {

    const classes = useStyles();
    const media = useContext(AppContext);

    const [weather, setWeather] = useState({
      desc: '',
      image: '',
    });
    const [open, setOpen] = useState(false);

    const handleOpen = () => {setOpen(true); };
    const handleClose = () => { setOpen(false); };

    useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=36.2168&lon=81.6746&units=imperial&APPID=4216d1350fe31af9bf5100bb34fa72e2')
        .then(res => res.json())
        .then((result) => { 
          setWeather({
            desc: result.weather[0].description,
            image: `https://openweathermap.org/img/w/${result.weather[0].icon}.png`,
          });
        });
    }, []);

    return (
        <div className={classes.root}>

          <AppBar className={classes.appBar} position="fixed">

            <Toolbar>

              <Drawer query={media.xs} />

                <Typography variant={media.xs ? 'body1' : 'h5'} align="center" className={classes.title}>
                  A Mountain Dream
                </Typography>

              {
                media.xs ? '' :

                <Fragment>

                  <Typography style={{ textTransform: 'capitalize' }} variant={media.xs ? 'subtitle2' : 'h5'} color="inherit">
                    {
                      weather.desc
                        ?
                      weather.desc
                        :
                      <CircularProgress />
                    }
                  </Typography>
  
                    <img 
                      className={media.xs ? classes.imgSm : classes.imgLg}
                      src={ 
                        weather.image ? weather.image
                          :
                        ''
                      } 
                      alt={weather.desc ? weather.desc : 'Fetching...'}
                    />

                </Fragment>
              }

            </Toolbar>

          </AppBar>

        </div>
    );
};

export default Nav;
