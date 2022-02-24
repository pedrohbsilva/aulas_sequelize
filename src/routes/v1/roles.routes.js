const RoleController = require('../../controllers/RoleController');
const { can } = require('../../middlewares/auth');
const express = require('express')

const rolesRoutes = express.Router();

rolesRoutes.post('/roles', RoleController.create);
rolesRoutes.get('/roles', RoleController.index);

module.exports = rolesRoutes;