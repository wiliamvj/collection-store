import { prisma } from '../../../database/prisma/PrismaClient';
import { ListProductEntity } from '../entities/list-product.entity';
import { ProductEntity } from '../entities/product.entity';

export class SearchProductRepository {
  async execute(query: string, page: number) {
    const offset = 10;
    const newPage = page <= 1 ? 0 : page * offset - offset;

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
      skip: newPage,
      take: offset,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        status: true,
        slug: true,
        price: true,
        sku: true,
        gtin: true,
        brand: true,
        description: true,
        category: true,
        createdAt: true,
        updatedAt: true,
        userId: true,
        images: true || null,
      },
    });

    const totalSearch: ProductEntity[] = await prisma.product.findMany({
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
        status: true,
        slug: true,
        price: true,
        sku: true,
        gtin: true,
        brand: true,
        description: true,
        category: true,
        createdAt: true,
        updatedAt: true,
        userId: true,
        images: true || null,
      },
    });

    if (products.length <= 0) {
      throw new Error(`No product contracted based on ${query}`);
    }

    const result = {
      totalProduct: totalSearch.length,
      totalProductInPage: products.length,
      products,
    } as ListProductEntity;

    return result;
  }
}
