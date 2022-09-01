import { transformAndValidate } from 'class-transformer-validator';
import { Request, Response } from 'express';
import { AuthUserDto } from '../dto/auth-user.dto';
import { CreateUserEntity } from '../entities/create-user.entity';

import { AuthenticateUserRepository } from '../repositories/AuthenticateUserRepository';

export class AuthenticateUserController {
  async handle(req: Request<{}, {}, AuthUserDto>, res: Response) {
    const userAuth = req.body;

    const userJson = JSON.stringify(userAuth);

    transformAndValidate(AuthUserDto, userJson).catch(err => {
      res.json(err[0].constraints);
    });

    const authenticateUserRepository = new AuthenticateUserRepository();

    const userLogged: CreateUserEntity =
      await authenticateUserRepository.execute(userAuth);

    return res.json(userLogged);
  }
}
