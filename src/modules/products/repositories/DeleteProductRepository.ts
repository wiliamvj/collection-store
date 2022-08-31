import { prisma } from '../../../database/prisma/PrismaClient';
import { ProductEntity } from '../entities/product.entity';

export class DeleteProductRepository {
  async execute(id: string): Promise<ProductEntity> {
    const productExists = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!productExists) {
      throw new Error(`This product id ${id} does not exists!`);
    }

    const saveProduct = await prisma.product.delete({ where: { id } });

    return saveProduct;
  }
}
