import { Product, User } from '@prisma/client';

export class CreateUserEntity implements User {
  id: number;
  name: string;
  email: string;
  password: string;
}
