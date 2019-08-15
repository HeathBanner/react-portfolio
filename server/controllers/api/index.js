const apiControllers = require('express').Router();

apiControllers.use('/cities', require('./citiesController'));
apiControllers.use('/users', require('./usersController'));
apiControllers.use('/social', require('./socialController'));
apiControllers.use('/contact', require('./contactController'));

module.exports = apiControllers;
