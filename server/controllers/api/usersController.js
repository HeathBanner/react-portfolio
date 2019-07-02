const usersController = require('express').Router();
const db = require('../../models/users');
const infoDB = require('../../models/userInfo');
const mongoose = require('mongoose');

const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

const MONGOD_URI = 'mongodb://HeathBanner:testing123@ds137631.mlab.com:37631/heroku_g0b41nhx'
mongoose.connect(MONGOD_URI);

usersController.get('/me', JWTVerifier, (req, res) => {
    res.json(req.user);
});

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