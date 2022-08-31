import 'reflect-metadata';
import { Request, Response } from 'express';

import { DeleteProductRepository } from '../repositories/DeleteProductRepository';

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteProductRepository = new DeleteProductRepository();

    await deleteProductRepository.execute(id);

    res.json({
      message: `Product id ${id} successfully deleted
    `,
    });
  }
}

export { DeleteProductController };
