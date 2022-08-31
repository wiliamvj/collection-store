import { Request, Response } from 'express';
import { CreateProductDto } from '../dto/create-product.dto';

class CreateProductController {
  handle(req: Request<{}, {}, CreateProductDto>, res: Response) {
    const {} = req.body;
  }
}

export { CreateProductController };
