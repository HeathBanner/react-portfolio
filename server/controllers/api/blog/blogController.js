const blogController = require('express').Router();

const db = require('../../../models/blog/article');

blogController.post('/getArticle', (req, res) => {
    const { title } = req.body;
    db.findOne({ 'title.text': title })
        .then((result) => {
            if (!result) {
                res.status(404).json({ error: 'Article not found!' });
            }
            res.status(200).json(result);
        })
        .catch((error) => { res.status(500).json(error); });
});

blogController.get('/getList', (req, res) => {
    db.find()
        .limit(10)
        .sort({ 'date.epoch': -1 })
        .then((list) => { res.json(list); });
});

blogController.post('/newArticle', (req, res) => {
    const {
        title,
        description,
        readLength,
        jumbotron,
        body,
        date,
    } = req.body;
    title.isPublished = true;
    db.findOne({ 'title.text': title.text })
        .then((article) => {
            if (article) {
                return res.status(401).json({
                    error: 'An article is already using this title!',
                });
            }
            return db.updateOne({ 'title.text': title.text }, {
                title,
                description,
                readLength,
                jumbotron,
                body,
                date,
            }, { upsert: true })
                .then((result) => { res.status(201).json(result); })
                .catch((error) => { res.status(500).json(error); });
        })
        .catch((error) => { res.status(500).json(error); });
});

blogController.post('/saveChanges', (req, res) => {
    const {
        title,
        description,
        readLength,
        jumbotron,
        body,
    } = req.body;
    db.findOneAndUpdate({ 'title.text': title.text }, {
        title,
        description,
        readLength,
        jumbotron,
        body,
    })
        .then((result) => { res.status(201).json(result); })
        .catch((error) => { res.status(500).json(error); });
});

module.exports = blogController;
