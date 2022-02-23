import { Router } from 'express';
import RoleController from '../../controllers/RoleController';
import { can } from '../../middlewares/auth';

const rolesRoutes = new Router();

rolesRoutes.post('/roles', RoleController.create);
rolesRoutes.get('/roles', RoleController.index);

export default rolesRoutes;