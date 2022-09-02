import { prisma } from '../../../database/prisma/PrismaClient';
import { ProductEntity } from '../entities/product.entity';
import { DeleteImageCloudinary } from '../utils/UploudImageCloudinary.util';

export class DeleteProductRepository {
  async execute(id: string): Promise<ProductEntity> {
    const productExists = await prisma.product.findUnique({
      where: {
        id,
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

    if (!productExists) {
      throw new Error(`This product id ${id} does not exists!`);
    }

    productExists.images.forEach(async img => {
      await prisma.image.delete({ where: { id: img.id } });
      await DeleteImageCloudinary(img.cloudinary_id as string);
    });

    const saveProduct = await prisma.product.delete({ where: { id } });

    return saveProduct;
  }
}
