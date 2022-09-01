import 'reflect-metadata';
import { Request, Response } from 'express';

import { ListUserProductRepository } from '../repositories/ListUserProductsRepository';
import { ListProductEntity } from '../entities/list-product.entity';

class ListUserProductsController {
  async handle(req: Request, res: Response) {
    const { page } = req.query;
    const { id } = req.params;

    const listUserProductRepository = new ListUserProductRepository();

    const userProducts: ListProductEntity =
      await listUserProductRepository.execute(
        page === undefined ? 0 : Number(page),
        Number(id),
      );

    res.json(userProducts);
  }
}

export { ListUserProductsController };
