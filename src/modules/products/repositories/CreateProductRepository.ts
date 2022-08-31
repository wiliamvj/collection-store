import { prisma } from '../../../database/prisma/PrismaClient';
import { ProductEntity } from '../entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';

export class CreateProductRepository {
  async execute(createUserDto: CreateProductDto): Promise<ProductEntity> {
    return prisma.product.create({
      data: createUserDto,
    });
  }
}
