import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../../modules/products/config/multer';
import { validateAuthenticate } from '../../middlewares/validateAuthenticate';

import { CreateProductController } from '../../modules/products/controllers/CreateProductController';
import { ListProductController } from '../../modules/products/controllers/ListProductsController';
import { DeleteProductController } from '../../modules/products/controllers/DeleteProductController';
import { UpdateProductController } from '../../modules/products/controllers/UpdateProductController';
import { SearchProductController } from '../../modules/products/controllers/SearchProductsController';
import { UploadImageController } from '../../modules/products/controllers/UploadImageController';
import { DeleteImageController } from '../../modules/products/controllers/DeleteImageController';
import { ListUserProductsController } from './controllers/ListUserProductsController';

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();
const searchProductController = new SearchProductController();
const uploadImageController = new UploadImageController();
const deleteImageController = new DeleteImageController();
const listUserProductsController = new ListUserProductsController();

const productRoutes = Router();
const upload = multer(multerConfig);

productRoutes.post(
  '/product/new',
  validateAuthenticate,
  createProductController.handle,
);
productRoutes.post(
  '/product/image-upload/:sku',
  validateAuthenticate,
  upload.single('image'),
  uploadImageController.handle,
);

productRoutes.get('/products/all', listProductController.handle);
productRoutes.get('/products', searchProductController.handle);
productRoutes.get('/products/user/:id', listUserProductsController.handle);

productRoutes.delete(
  '/product/delete/:id',
  validateAuthenticate,
  deleteProductController.handle,
);
productRoutes.delete(
  '/product/image-delete/:id',
  validateAuthenticate,
  deleteImageController.handle,
);

productRoutes.patch(
  '/product/update',
  validateAuthenticate,
  updateProductController.handle,
);

export { productRoutes };
