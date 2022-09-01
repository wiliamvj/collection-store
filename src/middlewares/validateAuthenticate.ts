import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function validateAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authInHeader = req.headers.authorization;

  if (!authInHeader) {
    return res.status(401).json({
      message: 'Token not found!',
    });
  }

  const [, token] = authInHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      process.env.SECRET_TOKEN as string,
    ) as IPayload;

    req.id = sub;

    return next();
  } catch {
    return res.status(401).json({
      message: 'Invalid Token',
    });
  }
}
