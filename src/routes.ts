import { Router } from 'express';

import { CreateProductController } from './modules/products/controllers/CreateProductController';

const createProductController = new CreateProductController();

const routes = Router();

routes.post('/products/new', createProductController.handle);

export { routes };
