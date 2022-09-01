import express, { NextFunction, Response, Request } from 'express';
import * as dotenv from 'dotenv';
import 'express-async-errors';
import { serve, setup } from 'swagger-ui-express';

import swaggerConfig from '../swagger.json';

import { productRoutes } from './modules/products/routes';
import { userRoutes } from './modules/users/routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(productRoutes);
app.use(userRoutes);

app.use('/api-docs', serve, setup(swaggerConfig));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({
    message: 'Interna server error',
  });
});

export { app };
