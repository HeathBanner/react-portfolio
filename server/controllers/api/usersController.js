const usersController = require('express').Router();
const db = require('../../models/users');
const infoDB = require('../../models/userInfo');
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

const MONGOD_URI = 'mongodb://HeathBanner:testing123@ds137631.mlab.com:37631/heroku_g0b41nhx'
// const MONGOD_URI = 'mongodb://localhost/portfolio'
mongoose.connect(MONGOD_URI);

usersController.get('/me', JWTVerifier, (req, res) => {
    res.json(req.user);
});

usersController.get('/portfolio', (req, res) => {
    db.findOne({_id: ObjectID('5d12638abb93d2a54d7c37a0')})
    .populate({
        path: 'info',
        populate: {
            path: 'authored_stories',
            populate: [{
                path: 'authored_by',
            }, 
            {
                path: 'comments.authored_by',
                model:'Users'
            }]
        }
    })
    .populate({
        path: 'info',
        populate:
            {
                path: 'friendList',
            }
    })
    .exec((err, user) => {
        if(err) throw err;
        res.json(user);
    })
})

usersController.post('/login', (req, res) => {
    const { email, password} = req.body;
    infoDB.findOne({ email }, null, {})
    .then(user => {
        console.log(!user || !user.comparePassword(password));
        if(!user || !user.comparePassword(password)){return res.status(401).send('Unauthorized!')}
        res.json({token: jwt.sign({sub: user.userId }, process.env.JWT_SECRET), user})
    });
});

usersController.post('/register', (req, res) => {
    const { email, password, username } = req.body;
    db.findOne({ email: email })
    .then(user => {
        if (!user){db.create({ username, email, password })
            .then(user => res.json(user))
            .catch(err => res.json(err));
        }
        if(user.email === email){res.json('Email already exists')};
    });
});

usersController.post('/passwordCheck', (req, res) => {
    const { email, password } = req.body;
    db.findOne({email: email})
    .then(user => {
        if(user.password === password){return res.json('Match')}
        else{return res.json('Not Authorized')}
    })
})

usersController.post('/emailChange', (req, res) => {
    const { username, email } = req.body;
    db.findOneAndUpdate({username: username}, {$set: {email: email}}, {useFindAndModify: false, new: true}, (err, user) => {
        res.json(user);
    })
})

usersController.post('/passwordChange', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    db.findOneAndUpdate({username: username}, {$set: {password: password}}, {useFindAndModify: false, new: true}, (err, user) => {
        res.json(user);
    });
})



module.exports = usersController;