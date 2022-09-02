import { randomUUID } from 'crypto';
import { ProductEntity } from '../../entities/product.entity';
import { CreateProductDto } from '../../dto/create-product.dto';

export class CreateProductRepositoryInMemo {
  async execute(createUserDto: CreateProductDto): Promise<ProductEntity> {
    const skuToUp = createUserDto.sku.toUpperCase();
    const slug = createUserDto.title.replace(/\W+/g, '-').toLowerCase();

    const productCreated = {
      id: randomUUID(),
      ...createUserDto,
      slug,
      sku: skuToUp,
    } as ProductEntity;

    return productCreated;
  }
}
