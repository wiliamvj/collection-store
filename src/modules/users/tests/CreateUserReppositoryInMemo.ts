import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserEntity } from '../entities/create-user.entity';

class CreateUserRepositoryInMemo {
  async execute(createUserDto: CreateUserDto): Promise<CreateUserEntity> {
    const id = 10;

    const result = {
      id,
      name: createUserDto.name,
      email: createUserDto.email,
    };

    return result;
  }
}

export { CreateUserRepositoryInMemo };
