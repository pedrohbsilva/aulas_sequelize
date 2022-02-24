const express = require('express')
const routes = express.Router()

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
const permissionRoutes = require('./v1/permissions.routes');
const rolesRoutes = require('./v1/roles.routes');
const userRoutes = require('./v1/users.routes');

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
routes.use('/api', [userRoutes, rolesRoutes,permissionRoutes])

module.exports = routes