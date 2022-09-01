import { prisma } from '../../../database/prisma/PrismaClient';
import { ListProductEntity } from '../entities/list-product.entity';
import { ProductEntity } from '../entities/product.entity';

export class ListProductRepository {
  async execute() {
    const totalProduct = await prisma.product.count();
    const products: ProductEntity[] = await prisma.product.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        price: true,
        sku: true,
        gtin: true,
        brand: true,
        description: true,
        category: true,
        createdAt: true,
        updatedAt: true,
        images: true || null,
      },
    });

    if (products.length <= 0) {
      throw new Error(`No results!`);
    }

    const result = {
      totalProduct,
      products,
    } as ListProductEntity;

    return result;
  }
}
