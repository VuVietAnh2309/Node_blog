const express = require('express');
const route = express.Router();

const newController = require('../app/controllers/NewController');

// newController.index

route.use('/:slug', newController.show);

route.use('/', newController.index);

module.exports = route;