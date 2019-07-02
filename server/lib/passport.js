const passport = require('passport');
const { Strategy: JwtStategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');

const db = require('../models/users');
const MONGOD_URI = 'mongodb://localhost/portfolio';
mongoose.connect(MONGOD_URI);

var JWT_STRATEGY_OPTS = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(
    new JwtStategy(JWT_STRATEGY_OPTS, function(jwtPayLoad, done) {
        db.findOne({_id: jwtPayLoad.sub})
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
        .sort({'info.authored_stories.time': -1})
        .exec((err, user) => {
            if(err) throw err;
            done(null, user || false)
        })
    })
);

const JWTVerifier = passport.authenticate('jwt', {session: false});

module.exports = {
    passport,
    JWTVerifier
};