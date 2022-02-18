import { Router } from 'express';
import UserController from '../../controllers/UserController';
import { can } from '../../middlewares/auth';

const userRoutes = new Router();

userRoutes.post('/users', UserController.create);
userRoutes.post('/session', UserController.session);
userRoutes.get('/users', can(['PERMISSION_READ']), UserController.index);

export default userRoutes;