import { prisma } from '../../../database/prisma/PrismaClient';
import { ListProductEntity } from '../entities/list-product.entity';
import { ProductEntity } from '../entities/product.entity';

export class ListUserProductRepository {
  async execute(page: number, id: number) {
    const usrExits = await prisma.user.findUnique({
      where: { id },
    });

    if (!usrExits) {
      throw new Error(`User ID: ${id} does not exits!`);
    }

    const totalProduct = await prisma.product.count();

    const offset = 10;
    const newPage = page <= 1 ? 0 : page * offset - offset;

    const products: ProductEntity[] = await prisma.product.findMany({
      where: {
        userId: id,
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
        images: true || null,
        userId: true,
      },
      skip: newPage,
      take: offset,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const totalProducts: ProductEntity[] = await prisma.product.findMany({
      where: {
        userId: id,
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
        images: true || null,
        userId: true,
      },
    });

    if (products.length <= 0) {
      throw new Error(`No results!`);
    }

    const result = {
      totalProduct: totalProducts.length,
      totalProductInPage: products.length,
      products,
    } as ListProductEntity;

    return result;
  }
}
