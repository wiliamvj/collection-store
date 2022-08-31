import { prisma } from '../../../database/prisma/PrismaClient';
import { ProductEntity } from '../entities/product.entity';
import { UpdateProductDto } from '../dto/update-product.dto';

export class UpdateProductRepository {
  async execute(updateUserDto: UpdateProductDto): Promise<ProductEntity> {
    const productExists = await prisma.product.findUnique({
      where: {
        id: updateUserDto.id,
      },
    });

    if (!productExists) {
      throw new Error(`This sku ${updateUserDto.sku} does not exists!`);
    }

    const slug = updateUserDto.title?.replace(/\W+/g, '-').toLowerCase();
    const skuToUp = updateUserDto.sku?.toUpperCase();

    const updateProduct = await prisma.product.update({
      where: { id: updateUserDto.id },
      data: { ...updateUserDto, slug, sku: skuToUp },
    });

    return updateProduct;
  }
}
