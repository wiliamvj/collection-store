import 'reflect-metadata';
import { Request, Response } from 'express';

import { DeleteProductRepository } from '../repositories/DeleteProductRepository';

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteProductRepository = new DeleteProductRepository();

    const productDeleted = await deleteProductRepository.execute(id);

    res.json(productDeleted);
  }
}

export { DeleteProductController };
