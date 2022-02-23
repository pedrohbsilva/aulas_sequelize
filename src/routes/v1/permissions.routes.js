import { Router } from 'express';
import PermissionController from '../../controllers/PermissionController';
import { can } from '../../middlewares/auth';

const permissionRoutes = new Router();

permissionRoutes.post('/permissions', PermissionController.create);
permissionRoutes.get('/permissions', PermissionController.index);

export default permissionRoutes;