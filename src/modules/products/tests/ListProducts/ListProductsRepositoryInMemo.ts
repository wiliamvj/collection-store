import { randomUUID } from 'crypto';
import { ListProductEntity } from '../../entities/list-product.entity';
import { ProductEntity } from '../../entities/product.entity';

export class ListProductsRepositoryInMemo {
  async execute() {
    const productsMock = [
      {
        id: randomUUID(),
        userId: 10,
        title: 'Bicama Solteiro com Nicho Lateral Helena Cimol Branco',
        slug: 'bicama-solteiro-com-nicho-lateral-helena-cimol-branco',
        status: 'active',
        sku: 'CAMA-01',
        price: 899.9,
        brand: 'Stock',
        description:
          'Esta Bicama de Solteiro é um produto 100% MDF, com pintura u.v nas superfícies e acabamentos de bordas em fita FF e P.U/Laca.',
        category: 'Camas',
        gtin: 9898190280980,
      },
      {
        id: randomUUID(),
        userId: 10,
        title: 'Bicama Solteiro com Nicho Lateral Helena Cimol Branco',
        slug: 'bicama-solteiro-com-nicho-lateral-helena-cimol-branco',
        status: 'active',
        sku: 'CAMA-02',
        price: 899.9,
        brand: 'Stock',
        description:
          'Esta Bicama de Solteiro é um produto 100% MDF, com pintura u.v nas superfícies e acabamentos de bordas em fita FF e P.U/Laca.',
        category: 'Camas',
        gtin: 9898190280980,
      },
      {
        id: randomUUID(),
        userId: 10,
        title: 'Bicama Solteiro com Nicho Lateral Helena Cimol Branco',
        slug: 'bicama-solteiro-com-nicho-lateral-helena-cimol-branco',
        status: 'active',
        sku: 'CAMA-03',
        price: 899.9,
        brand: 'Stock',
        description:
          'Esta Bicama de Solteiro é um produto 100% MDF, com pintura u.v nas superfícies e acabamentos de bordas em fita FF e P.U/Laca.',
        category: 'Camas',
        gtin: 9898190280980,
      },
    ] as ProductEntity[];

    const result = {
      totalProduct: productsMock.length,
      totalProductInPage: productsMock.length,
      products: productsMock,
    } as ListProductEntity;

    return result;
  }
}
