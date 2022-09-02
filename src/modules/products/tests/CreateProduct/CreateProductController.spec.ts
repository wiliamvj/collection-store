import { transformAndValidate } from 'class-transformer-validator';
import { CreateProductDto } from '../../dto/create-product.dto';
import { ProductEntity } from '../../entities/product.entity';

import { CreateProductRepositoryInMemo } from './CreateProductRepositoryInMemo';

describe('Create new product', () => {
  it('Should be able create a new peoduct', async () => {
    const productMock = {
      userId: 10,
      title: 'Bicama Solteiro com Nicho Lateral Helena Cimol Branco',
      status: 'active',
      sku: 'CAMA-01',
      price: 899.9,
      brand: 'Stock',
      description:
        'Esta Bicama de Solteiro é um produto 100% MDF, com pintura u.v nas superfícies e acabamentos de bordas em fita FF e P.U/Laca.',
      category: 'Camas',
    } as CreateProductDto;

    const userJson = JSON.stringify(productMock);

    await transformAndValidate(CreateProductDto, userJson).catch(err => {
      return err[0].constraints;
    });

    const createProductRepositoryInMemo = new CreateProductRepositoryInMemo();

    const productCreated: ProductEntity =
      await createProductRepositoryInMemo.execute(productMock);

    expect(productCreated).toHaveProperty('id');
    expect(productCreated).toHaveProperty('slug');
  });
});
