import { Request, Response } from 'express';

import { CreateUserRepository } from '../repositories/CreateUserRepository';
import { CreateUserDto } from '../dto/create-user.dto';
import { transformAndValidate } from 'class-transformer-validator';

class CreateUserController {
  async handle(req: Request<{}, {}, CreateUserDto>, res: Response) {
    const user = req.body;

    const userJson = JSON.stringify(user);

    transformAndValidate(CreateUserDto, userJson).catch(err => {
      res.json(err[0].constraints);
    });

    const createUserRepository = new CreateUserRepository();

    const saveUser = await createUserRepository.execute(user);

    res.json(saveUser);
  }
}

export { CreateUserController };
