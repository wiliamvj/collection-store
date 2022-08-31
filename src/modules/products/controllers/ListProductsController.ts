import 'reflect-metadata';
import { Request, Response } from 'express';

import { ListProductRepository } from '../repositories/ListProductsRepository';
import { ListProductEntity } from '../entities/list-product.entity';

class ListProductController {
  async handle(req: Request, res: Response) {
    const listProductRepository = new ListProductRepository();

    const listProducts: ListProductEntity =
      await listProductRepository.execute();

    res.json(listProducts);
  }
}

export { ListProductController };
