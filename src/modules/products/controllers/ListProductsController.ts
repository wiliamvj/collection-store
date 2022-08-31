import 'reflect-metadata';
import { Request, Response } from 'express';

import { ListProductRepository } from '../repositories/ListProductsRepository';
import { ProductEntity } from '../entities/product.entity';

class ListProductController {
  async handle(req: Request, res: Response) {
    const listProductRepository = new ListProductRepository();

    const listProducts: ProductEntity[] = await listProductRepository.execute();

    res.json(listProducts);
  }
}

export { ListProductController };
