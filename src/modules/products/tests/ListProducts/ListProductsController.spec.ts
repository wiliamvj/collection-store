import { ListProductEntity } from '../../entities/list-product.entity';

import { ListProductsRepositoryInMemo } from './ListProductsRepositoryInMemo';

describe('List all product', () => {
  it('Should be able list all products', async () => {
    const listProductsRepositoryInMemo = new ListProductsRepositoryInMemo();

    const listProducts: ListProductEntity =
      await listProductsRepositoryInMemo.execute();

    expect(listProducts).toHaveProperty('products');
  });
});
