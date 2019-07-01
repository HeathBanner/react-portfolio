import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tilt from 'react-tilt';
import Moment from 'react-moment';
import 'moment-timezone';
import FormatDate from 'moment';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            height: 450,
            width: '70%',
            margin: '50px auto',  
        },
        [theme.breakpoints.down('md')]: {
            height: 450,
            width: '70%',
            margin: '50px auto',  
        },
        [theme.breakpoints.down('sm')]: {
            height: 225,
            width: '80%',
            margin: '50px auto',  
        },
        [theme.breakpoints.down('xs')]: {
            height: 275,
            width:  '95%',
            margin: '20px 10px',  
        },
        width: '70%',
        margin: '50px auto',
        padding: '10px 20px 20px 20px',
    },
    header: {
        backgroundColor: 'rgb(94, 188, 255, 0.7)',
        width: '100%',
        padding: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    weather: {
        textTransform: 'capitalize',
        marginTop: '10px'
    },
    img: {
        display: 'flex',
        justifyContent: 'center',
    },
    city: {
        display: 'flex',
        alignItems: 'center',
    },
    date: {
        display: 'flex',
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        justifyContent: 'center'
    },
    day: {
        margin: '0 10px'
    },
    monthYear: {
        margin: '0 10px'
    },
    temp: {
        backgroundColor: 'rgb(94, 188, 255. 0.7)'
    }
}));


function WeatherModule(props) {
    const classes = useStyles();
    const image =  `https://openweathermap.org/img/w/${props.image}.png`
    var date = FormatDate(props.date)


    return (
        <div>
            <Paper className={classes.root}>
                <div className="row">
                    <Paper className={classes.header}>
                        <div className="col-6">
                            <div className={classes.city}>
                                <Typography variant="h6">
                                    {props.city}
                                </Typography>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={classes.date}>
                                <Moment className={classes.day} date={date} format="dddd" />
                                <Moment className={classes.monthYear} date={date} format="MMM YY" />
                            </div>
                        </div>
                    </Paper>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Typography variant="h6" align="center" className={classes.weather}>
                            {props.weather}
                        </Typography>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Tilt className={classes.img}>
                            <img src={image} alt={props.weather} />
                        </Tilt>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Paper className={classes.temp}>
                            <Typography align="center" variant="h6">
                                High: {props.temp_max}&#8457; 
                            </Typography>
                            <Typography align="center">
                                Low: {props.temp_min}&#8457;
                            </Typography>
                        </Paper>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default WeatherModule;