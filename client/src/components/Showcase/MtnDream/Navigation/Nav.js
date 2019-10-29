import React, {
  useEffect,
  useState,
  useContext,
} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
} from '@material-ui/core';

import { AppContext } from '../../../../context/AuthContext';

import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 5,
  },
  appBar: {
    background: 'linear-gradient(45deg, #986243 30%, #984843 90%)',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  weatherContainer: {
      position: 'absolute',
      top: '50%',
      right: 10,
      transform: 'translate(0%, -50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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

          <AppBar
            className={classes.appBar}
            style={{ position: 'relative' }}
          >

            <Toolbar>

              <Drawer query={media.xs} />

                <Typography variant={media.xs ? 'body1' : 'h5'} align="center" className={classes.title}>
                  A Mountain Dream
                </Typography>

              {
                media.xs ? '' :

                <div className={classes.weatherContainer}>

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

                </div>
              }

            </Toolbar>

          </AppBar>

        </div>
    );
};

export default Nav;
