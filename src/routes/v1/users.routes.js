import { Router } from 'express';
import UserController from '../../controllers/UserController';
import helloWorld from '../../middlewares';
import auth from '../../middlewares/auth';

const userRoutes = new Router();

userRoutes.post('/users', UserController.create);
userRoutes.post('/session', UserController.session);
userRoutes.get('/users', UserController.index);

export default userRoutes;