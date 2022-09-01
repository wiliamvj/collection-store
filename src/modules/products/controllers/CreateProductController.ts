import 'reflect-metadata';
import { transformAndValidate } from 'class-transformer-validator';
import { Request, Response } from 'express';
import { CreateProductDto } from '../dto/create-product.dto';

import { CreateProductRepository } from '../repositories/CreateProductRepository';
import { ProductEntity } from '../entities/product.entity';

class CreateProductController {
  async handle(req: Request<{}, {}, CreateProductDto>, res: Response) {
    const product = req.body;
    const productJson = JSON.stringify(product);

    transformAndValidate(CreateProductDto, productJson).catch(err => {
      res.json(err[0].constraints);
    });

    const createProductRepository = new CreateProductRepository();

    const newProduct: ProductEntity = await createProductRepository.execute(
      product as CreateProductDto,
    );

    res.json(newProduct);
  }
}

export { CreateProductController };
