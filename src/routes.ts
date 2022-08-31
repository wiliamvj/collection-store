import { Router } from 'express';

import { CreateProductController } from './modules/products/controllers/CreateProductController';
import { ListProductController } from './modules/products/controllers/ListProductsController';
import { DeleteProductController } from './modules/products/controllers/DeleteProductController';

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const deleteProductController = new DeleteProductController();

const routes = Router();

routes.post('/products/new', createProductController.handle);
routes.get('/products/all', listProductController.handle);
routes.delete('/products/delete/:id', deleteProductController.handle);

export { routes };
