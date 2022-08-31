import 'reflect-metadata';
import { validate, ValidationError } from 'class-validator';
import { transformAndValidate } from 'class-transformer-validator';
import { Request, Response } from 'express';
import { CreateProductDto } from '../dto/create-product.dto';

class CreateProductController {
  async handle(req: Request<{}, {}, CreateProductDto>, res: Response) {
    const product = req.body;
    const userJson = JSON.stringify(product);

    transformAndValidate(CreateProductDto, userJson)
      .then(product => {
        res.json(product);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}

export { CreateProductController };
