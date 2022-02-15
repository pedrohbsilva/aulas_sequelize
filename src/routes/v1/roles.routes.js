import { Router } from 'express';
import RoleController from '../../controllers/RoleController';

const rolesRoutes = new Router();

rolesRoutes.post('/roles', RoleController.create);

export default rolesRoutes;