import { Router } from 'express';

import { CreateProductController } from './modules/products/controllers/CreateProductController';
import { ListProductController } from './modules/products/controllers/ListProductsController';
import { DeleteProductController } from './modules/products/controllers/DeleteProductController';
import { UpdateProductController } from './modules/products/controllers/UpdateProductController';
import { SearchProductController } from './modules/products/controllers/SearchProductsController';

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();
const searchProductController = new SearchProductController();

const routes = Router();

routes.post('/products/new', createProductController.handle);

routes.get('/products/all', listProductController.handle);
routes.get('/products', searchProductController.handle);

routes.delete('/products/delete/:id', deleteProductController.handle);
routes.patch('/products/update', updateProductController.handle);

export { routes };
