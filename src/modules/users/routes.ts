import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';

const createUserController = new CreateUserController();

const userRoutes = Router();

userRoutes.post('/user/new', createUserController.handle);

export { userRoutes };
