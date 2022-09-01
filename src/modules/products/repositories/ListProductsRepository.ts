import { prisma } from '../../../database/prisma/PrismaClient';
import { ListProductEntity } from '../entities/list-product.entity';
import { ProductEntity } from '../entities/product.entity';

export class ListProductRepository {
  async execute(page: number) {
    const totalProduct = await prisma.product.count();

    const offset = 10;
    const newPage = page <= 1 ? 0 : page * offset - offset;

    const products: ProductEntity[] = await prisma.product.findMany({
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
        images: true || null,
      },
      skip: newPage,
      take: offset,
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (products.length <= 0) {
      throw new Error(`No results!`);
    }

    const result = {
      totalProduct,
      totalProductInPage: products.length,
      products,
    } as ListProductEntity;

    return result;
  }
}
