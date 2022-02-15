import { Router } from 'express';
import UserController from '../../controllers/UserController';
import helloWorld from '../../middlewares';
import auth from '../../middlewares/auth';

const userRoutes = new Router();

userRoutes.post('/users', helloWorld, UserController.create);
userRoutes.post('/session', helloWorld, UserController.session);
userRoutes.get('/users', helloWorld, auth, UserController.index);

export default userRoutes;