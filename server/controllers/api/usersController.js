const usersController = require('express').Router();
const db = require('../../models/users');
const infoDB = require('../../models/userInfo');
const { ObjectID } = require('mongodb');

const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');


usersController.get('/me', JWTVerifier, (req, res) => {
    res.json(req.user);
});

usersController.get('/portfolio', (req, res) => {
    db.findOne({ _id: ObjectID('5d12638abb93d2a54d7c37a0') })
        .populate({
            path: 'info',
            populate: {
                path: 'authored_stories',
                populate: [{
                    path: 'authored_by',
                },
                {
                    path: 'comments.authored_by',
                    model: 'Users',
                }],
            },
        })
        .populate({
            path: 'info',
            populate:
                {
                    path: 'friendList',
                },
        })
        .exec((err, user) => {
            if (err) throw err;
            res.json(user);
        });
});

usersController.post('/login', (req, res) => {
    const { email, password } = req.body;
    infoDB.findOne({ email }, null, {})
        .then((user) => {
            if (!user || !user.comparePassword(password)) {
                return res.status(401).send('Unauthorized!');
            }
            return res.json({
                token: jwt.sign({ sub: user.userId }, process.env.JWT_SECRET),
                user,
            });
        });
});

usersController.post('/register', (req, res) => {
    const { email, password, username } = req.body;
    db.findOne({ email })
        .then((user) => {
            if (!user) {
                db.create({ username, email, password })
                    .then((result) => res.json(result))
                    .catch((err) => res.json(err));
            }
            if (user.email === email) { res.json('Email already exists'); }
        });
});

usersController.post('/passwordCheck', (req, res) => {
    const { email, password } = req.body;
    db.findOne({ email })
        .then((user) => {
            if (user.password === password) {
                return res.json('Match');
            }
            return res.json('Not Authorized');
        });
});

usersController.post('/emailChange', (req, res) => {
    const { username, email } = req.body;
    db.findOneAndUpdate({ username },
        { $set: { email } },
        { useFindAndModify: false, new: true }, (err, user) => {
            res.json(user);
        });
});

usersController.post('/passwordChange', (req, res) => {
    const { username, password } = req.body;
    db.findOneAndUpdate({ username },
        { $set: { password } },
        { useFindAndModify: false, new: true }, (err, user) => {
            res.json(user);
        });
});

module.exports = usersController;
