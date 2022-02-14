import { Router } from 'express';
import UserController from '../../controllers/UserController';
import auth from '../../middlewares/auth';

const userRoutes = new Router();

userRoutes.post('/users', UserController.create);
userRoutes.get('/users', auth, UserController.index);

export default userRoutes;