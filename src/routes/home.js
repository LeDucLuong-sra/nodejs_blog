const express = require('express');
const homeRouter = express.Router();

const HomeController = require('../app/controllers/Homecontroller');
homeRouter.get('/login=True', HomeController.loginTrue) 
homeRouter.get('/', HomeController.index);

module.exports = homeRouter;