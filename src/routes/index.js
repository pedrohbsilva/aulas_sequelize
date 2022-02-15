import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerFile from '../swagger_output.json';

import usersRoutes from './v1/users.routes';
import permissionRoutes from './v1/permissions.routes';
import rolesRoutes from './v1/roles.routes';

const routes = new Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
routes.use('/api', [usersRoutes, permissionRoutes, rolesRoutes])

export default routes;