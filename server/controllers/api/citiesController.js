const citiesController = require('express').Router();
const db = require('../../models/cities');

citiesController.get('/onLoad', (req, res) => {
    const state = new RegExp('North_Carolina', 'i');
    db.find({ langs: { $elemMatch: { link: state } } },
        null, { skip: 0, limit: 10 })
        .sort({ date: -1 })
        .then((response) => { res.json(response); });
});

citiesController.post('/search', (req, res) => {
    let parsedState = req.body.state.value;
    parsedState = parsedState.split(' ').join('_');
    const city = new RegExp(req.body.city, 'i');
    const state = new RegExp(parsedState, 'i');
    db.find({ name: city, langs: { $elemMatch: { link: state } } },
        null, { limit: 10 })
        .sort({ date: -1 })
        .then((response) => { res.json(response); });
});

citiesController.post('/submit', (req, res) => {
    let parsedState = req.body.state.value;
    parsedState = parsedState.split(' ').join('_');
    const city = new RegExp(req.body.city.value, 'i');
    const state = new RegExp(parsedState, 'i');
    db.find({ name: city, langs: { $elemMatch: { link: state } } }, null, { limit: 1 })
        .then((response) => { res.json(response); });
});

module.exports = citiesController;
