const contactController = require('express').Router();
const db = require('../../models/contact');

contactController.post('/newContact', (req, res) => {
    const {
        name,
        email,
        phone,
        message,
    } = req.body;
    db.findOneAndUpdate({ email }, {
        name,
        email,
        phone,
        message,
    }, { useFindAndModify: false, new: true, upsert: true }, (err, result) => {
        res.json(result);
    });
});

module.exports = contactController;
