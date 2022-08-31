import 'reflect-metadata';
import { transformAndValidate } from 'class-transformer-validator';
import { Request, Response } from 'express';
import { CreateProductDto } from '../dto/create-product.dto';

import { CreateProductRepository } from '../repositories/CreateProductRepository';

class CreateProductController {
  async handle(req: Request<{}, {}, CreateProductDto>, res: Response) {
    const product = req.body;
    const userJson = JSON.stringify(product);

    transformAndValidate(CreateProductDto, userJson).catch(err => {
      res.json(err[0].constraints);
    });

    const createProductRepository = new CreateProductRepository();

    const newProduct = await createProductRepository.execute(
      product as CreateProductDto,
    );

    res.json(newProduct);
  }
}

export { CreateProductController };
