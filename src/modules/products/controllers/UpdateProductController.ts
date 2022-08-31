import 'reflect-metadata';
import { transformAndValidate } from 'class-transformer-validator';
import { Request, Response } from 'express';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';

import { UpdateProductRepository } from '../repositories/UpdateProductRepository';

class UpdateProductController {
  async handle(req: Request<{}, {}, UpdateProductDto>, res: Response) {
    const product = req.body;
    const userJson = JSON.stringify(product);

    transformAndValidate(UpdateProductDto, userJson).catch(err => {
      res.json(err[0].constraints);
    });

    const updateProductRepository = new UpdateProductRepository();

    const updated: ProductEntity = await updateProductRepository.execute(
      product,
    );

    res.json(updated);
  }
}

export { UpdateProductController };
