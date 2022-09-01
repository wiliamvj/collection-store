import { prisma } from '../../../database/prisma/PrismaClient';
import { CreateUserDto } from '../dto/create-user.dto';

class CreateUserRepository {
  async execute(createUserDto: CreateUserDto) {
    const userExists = await prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (userExists) {
      throw new Error('User alredy exists!');
    }

    const saveUser = await prisma.user.create({
      data: createUserDto,
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
