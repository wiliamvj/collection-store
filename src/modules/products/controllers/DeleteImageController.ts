import { Request, Response } from 'express';

import { DeleteImageRepository } from '../repositories/DeleteImageRepository';

class DeleteImageController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteImageRepository = new DeleteImageRepository();
    const deleteProduct = await deleteImageRepository.execute(id);

    res.json(deleteProduct);
  }
}

export { DeleteImageController };
