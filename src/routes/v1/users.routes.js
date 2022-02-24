const UserController = require('../../controllers/UserController');
const { can } = require('../../middlewares/auth');
const express = require('express')

const userRoutes = express.Router();

userRoutes.post('/users', UserController.create);
userRoutes.post('/session', UserController.session);
userRoutes.get('/users', can(['PERMISSION_READ']),  UserController.index);

module.exports = userRoutes;