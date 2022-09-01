import { hash } from 'bcrypt';
import { prisma } from '../../../database/prisma/PrismaClient';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserEntity } from '../entities/create-user.entity';

class CreateUserRepository {
  async execute(createUserDto: CreateUserDto): Promise<CreateUserEntity> {
    const userExists = await prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (userExists) {
      throw new Error('User alredy exists!');
    }

    const hashPassword = await hash(createUserDto.password, 10);

    const saveUser = await prisma.user.create({
      data: { ...createUserDto, password: hashPassword },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return saveUser;
  }
}

export { CreateUserRepository };
