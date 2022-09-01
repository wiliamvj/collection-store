import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const userRoutes = Router();

userRoutes.post('/register', createUserController.handle);
userRoutes.post('/login', authenticateUserController.handle);

export { userRoutes };
