import { prisma } from '../../../database/prisma/PrismaClient';
import { ProductEntity } from '../entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';

export class CreateProductRepository {
  async execute(createUserDto: CreateProductDto): Promise<ProductEntity> {
    const productExists = await prisma.product.findUnique({
      where: {
        sku: createUserDto.sku,
      },
    });

    if (productExists) {
      throw new Error(`This sku ${createUserDto.sku} already exists!`);
    }

    const slug = createUserDto.title.replace(/\W+/g, '-').toLowerCase();
    const skuToUp = createUserDto.sku.toUpperCase();

    const saveProduct = await prisma.product.create({
      data: { ...createUserDto, slug, sku: skuToUp },
    });

    return saveProduct;
  }
}
