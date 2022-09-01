import { Request, Response } from 'express';

import { UploadImageRepository } from '../repositories/UploadImageRepository';

class UploadImageController {
  async handle(req: Request, res: Response) {
    const image = req.file?.filename;
    const { sku } = req.params;

    const uploadImageRepository = new UploadImageRepository();
    const verifyProductExists = await uploadImageRepository.execute(
      sku,
      image as string,
    );

    res.json(verifyProductExists);
  }
}

export { UploadImageController };
