import { Router } from 'express';

import { CreateProductController } from './modules/products/controllers/CreateProductController';
import { ListProductController } from './modules/products/controllers/ListProductController';

const createProductController = new CreateProductController();
const listProductController = new ListProductController();

const routes = Router();

routes.post('/products/new', createProductController.handle);
routes.get('/products/all', listProductController.handle);

export { routes };
