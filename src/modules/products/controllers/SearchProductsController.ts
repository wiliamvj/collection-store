import 'reflect-metadata';
import { Request, Response } from 'express';

import { ProductEntity } from '../entities/product.entity';
import { SearchProductRepository } from '../repositories/SearchProductsRepository';
import { ListProductEntity } from '../entities/list-product.entity';

class SearchProductController {
  async handle(req: Request, res: Response) {
    const { q, page } = req.query;

    const searchProductRepository = new SearchProductRepository();

    const searchResult: ListProductEntity =
      await searchProductRepository.execute(
        q as string,
        page === undefined ? 0 : Number(page),
      );

    res.json(searchResult);
  }
}

export { SearchProductController };
