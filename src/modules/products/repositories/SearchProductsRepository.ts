import { prisma } from '../../../database/prisma/PrismaClient';
import { ProductEntity } from '../entities/product.entity';

export class SearchProductRepository {
  async execute(query: string): Promise<ProductEntity[]> {
    const searchProducts = await prisma.product.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            OR: {
              sku: {
                contains: query,
                mode: 'insensitive',
              },
            },
          },
        ],
      },
    });

    if (searchProducts.length <= 0) {
      throw new Error(`No product contracted based on ${query}`);
    }

    return searchProducts;
  }
}
