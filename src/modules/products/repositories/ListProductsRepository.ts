import { prisma } from '../../../database/prisma/PrismaClient';
import { ProductEntity } from '../entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';

export class ListProductRepository {
  async execute(): Promise<ProductEntity[]> {
    const listProducts = await prisma.product.findMany();

    return listProducts;
  }
}
