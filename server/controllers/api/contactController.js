const contactController = require('express').Router();
const db = require('../../models/contact');
const mongoose = require('mongoose');

const MONGOD_URI = 'mongodb://HeathBanner:testing123@ds137631.mlab.com:37631/heroku_g0b41nhx'
mongoose.connect(MONGOD_URI);

contactController.post('/newContact', (req, res) => {
    const { name, email, phone, message } = req.body;
    db.findOneAndUpdate({email}, {
        name: name,
        email: email,
        phone: phone,
        message: message
    }, {useFindAndModify: false, new: true, upsert: true}, (err, result) => {
        console.log(result)
        res.json(result)
    })
})

module.exports = contactController;