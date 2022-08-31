import 'reflect-metadata';
import { Request, Response } from 'express';

import { ProductEntity } from '../entities/product.entity';
import { SearchProductRepository } from '../repositories/SearchProductsRepository';

class SearchProductController {
  async handle(req: Request, res: Response) {
    const search = req.query.q as string;

    const searchProductRepository = new SearchProductRepository();

    const searchResult: ProductEntity[] = await searchProductRepository.execute(
      search,
    );

    res.json(searchResult);
  }
}

export { SearchProductController };
