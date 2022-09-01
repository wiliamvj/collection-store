import { Product, User } from '@prisma/client';

export class CreateUserEntity {
  id: number;
  name: string;
  email: string;
}
