import { Router } from 'express';
import PermissionController from '../../controllers/PermissionController';

const permissionRoutes = new Router();

permissionRoutes.post('/permissions', PermissionController.create);

export default permissionRoutes;