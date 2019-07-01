const socialController = require('express').Router();

const db = require('../../models/users');
const infoDB = require('../../models/userInfo');
const storyDB = require('../../models/stories');

const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

const MONGOD_URI = 'mongodb://localhost/portfolio';
mongoose.connect(MONGOD_URI);

socialController.post('/newStory', (req, res) => {
    const { userId, infoId, story, time } = req.body;
    const newStory = new storyDB({
        type: 'story',
        authored_by: userId,
        comments: [],
        likes: [],
        text: story,
        time: time
    });
    newStory.save((err, result) => {
        infoDB.findOneAndUpdate({_id: infoId}, {$push:{'authored_stories': ObjectID(result._id)}}, {useFindAndModify: false, new: true}, (err, user) => {
            res.json(user);
        });
    });
        
});

socialController.post('/deleteStory', (req, res) => {
    const { id } = req.body;
    infoDB.findOneAndUpdate({'Stories._id': new ObjectID(id)}, {$pull: {'Stories': {'_id': new ObjectID(id)}}}, {useFindAndModify: false, new: true}, (err, user) => {
        res.json(user);
    });
})

socialController.post('/friendStories', (req, res) => {
    const { id } = req.body;
    infoDB.findOne({_id: id})
    .populate({
        path: 'friendList',
        populate: {
            path: 'info',
            populate: {
                path: 'authored_stories',
                populate: {
                    path: 'comments.authored_by'
                }
            }
        }
    })
    .exec((err, user) => {
        if(err)throw err;

        var storyArray = [];
        for (var i = 0; i < user.friendList.length; i++) {
            for (var j = 0; j < user.friendList[i].info.authored_stories.length; j++) {
                storyArray.push(user.friendList[i].info.authored_stories[j]);
            }
        }
        res.json(storyArray);
    });
});

socialController.post('/newComment', (req, res) => {
    const { id, userId, comment, time } = req.body.data;
    storyDB.findOneAndUpdate({'_id': new ObjectID(id)}, 
    {$push: {'comments': {
        _id: new ObjectID(),
        authored_by: userId,
        text: comment,
        type: 'comment',
        likes: [],
        time: time,
    }}}, {useFindAndModify: false, new: true}, (err, user) => {
        res.json(user);
    });
});

socialController.post('/newFriends', (req, res) => {
    const { username } = req.body;
    var query = new RegExp(username, "i");
    db.find({username: query}, null, {limit: 10})
    .populate('info')
    .exec((err, result) => {  
        if(err)throw err;  
        res.json(result);
    });
});

socialController.post('/getProfile', (req, res) => {
    const { username } = req.body;
    db.findOne({username: username})
    .populate({
        path: 'info',
        populate: {
            path: 'authored_stories'
        }
    })
    .populate({
        path: 'info',
        populate: {
            path: 'friendList',
        }
    })
    .exec((err, user) => {
        if(err)throw err;
        res.json(user);
    })
});

socialController.post('/saveInfo', (req, res) => {
    const { id, education, selfTaught, skills, email, phone, linkedIn } = req.body;
    infoDB.findOneAndUpdate({_id: id}, {
        education:{education: education, selfTaught: selfTaught, skills: skills},
        contact:{email: email, phone: phone, linkedIn: linkedIn}
    }, {useFindAndModify: false, new: true}, (err, result) => {

    });
});

socialController.post('/addFriend', (req, res) => {
    const { friendId, personalId } = req.body;
    db.findOne({_id: friendId}, (err, result) => {
        db.findOneAndUpdate({_id: personalId}, {
            $push: {friendList: {_id: ObjectID(friendId), skyline: result.skyline, avatar: result.avatar, username: result.username}}
        }, {new: true, useFindAndModify: false}, (err, final) => {
            res.json(final);
        });
    });
});

socialController.post('/getFriends', (req, res) => {
    const { id } = req.body;
    const queryId = new ObjectID(id);
    db.findOne({_id: queryId})
    .populate({
        path: 'info',
        populate: {
            path: 'friendList',
            populate: {
                path: 'info'
            }
        }
    })
    .exec((err, user) => {
        // if(err) throw err;
        res.json(user.info.friendList);
    })
})

module.exports = socialController;