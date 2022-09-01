import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const userRoutes = Router();

userRoutes.post('/user/new', createUserController.handle);
userRoutes.post('/user/login', authenticateUserController.handle);

export { userRoutes };
