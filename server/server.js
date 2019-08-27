const express = require('express');

const app = express();

const dotENV = require('dotenv');
const mongoose = require('mongoose');

const MONGOD_URI = 'mongodb://HeathBanner:testing123@ds137631.mlab.com:37631/heroku_g0b41nhx';
// const MONGOD_URI = 'mongodb://localhost/portfolio';

mongoose.connect(MONGOD_URI, { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    dotENV.config({
        path: path.resolve(__dirname, '.env'),
    });
}

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
    app.use(express.static(clientBuildPath));
}

app.use(require('./controllers'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {});
