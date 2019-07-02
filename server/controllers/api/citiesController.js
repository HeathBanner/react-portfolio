const citiesController = require('express').Router();
const db = require('../../models/cities');
const mongoose = require('mongoose');

const MONGOD_URI = 'mongodb://HeathBanner:testing123@ds137631.mlab.com:37631/heroku_g0b41nhx'
// const MONGOD_URI = 'mongodb://localhost/portfolio'
mongoose.connect(MONGOD_URI);

citiesController.get('/onLoad', (req, res) => {
    console.log('HIT')
    var state = new RegExp('North_Carolina', "i");
    db.find({langs: {$elemMatch: {link: state}}}, null, {skip: 0, limit: 10})
    .sort({date: -1})
    .then(response => {res.json(response)})
})

citiesController.post('/search', (req, res) => {
    console.log('HIT')
    var parsedState = req.body.state.value
    parsedState = parsedState.split(' ').join('_');
    var city = new RegExp(req.body.city, "i");
    var state = new RegExp(parsedState, "i");
    console.log(state)
    console.log(city);
    db.find({name: city, langs: {$elemMatch: {link: state}}}, null, {limit: 10})
    .sort({date: -1})
    .then(response => {console.log(response); res.json(response)})
})

citiesController.post('/submit', (req, res) => {
    console.log('submit');
    var parsedState = req.body.state.value
    parsedState = parsedState.split(' ').join('_');
    var city = new RegExp(req.body.city.value, "i");
    var state = new RegExp(parsedState, "i");
    console.log(state);
    console.log(city)
    db.find({name: city, langs: {$elemMatch: {link: state}}}, null, {limit: 1})
    .then(response => {res.json(response)});
});

module.exports = citiesController;