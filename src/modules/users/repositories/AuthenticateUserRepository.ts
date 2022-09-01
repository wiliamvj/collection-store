import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prisma/PrismaClient';
import { AuthUserDto } from '../dto/auth-user.dto';
import { CreateUserEntity } from '../entities/create-user.entity';

class AuthenticateUserRepository {
  async execute(authUserDto: AuthUserDto): Promise<CreateUserEntity> {
    const userExists = await prisma.user.findUnique({
      where: {
        email: authUserDto.email,
      },
    });

    if (!userExists) {
      throw new Error('User does not exists!');
    }

    const comparePassword = await compare(
      authUserDto.password,
      userExists.password,
    );

    if (!comparePassword) {
      throw new Error('Email or password invalid!');
    }

    const { email } = userExists;

    const token = sign({ email }, process.env.SECRET_TOKEN as string, {
      subject: email,
      expiresIn: '10d',
    });

    const result = {
      id: userExists.id,
      name: userExists.name,
      email: userExists.email,
      access_token: token,
    };

    return result;
  }
}

export { AuthenticateUserRepository };
