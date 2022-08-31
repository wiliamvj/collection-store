import express, { NextFunction, Response, Request } from 'express';
import * as dotenv from 'dotenv';
import 'express-async-errors';

import { routes } from './routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({
    message: 'Interna server error',
  });
});

export { app };
