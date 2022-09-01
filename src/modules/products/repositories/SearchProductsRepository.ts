import { prisma } from '../../../database/prisma/PrismaClient';
import { ListProductEntity } from '../entities/list-product.entity';
import { ProductEntity } from '../entities/product.entity';

export class SearchProductRepository {
  async execute(query: string) {
    const products: ProductEntity[] = await prisma.product.findMany({
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
      throw new Error(`No product contracted based on ${query}`);
    }

    const result = {
      totalProduct: products.length,
      products,
    } as ListProductEntity;

    return result;
  }
}
