import { Product } from '@prisma/client';

export class ProductEntity implements Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  sku: string;
  brand: string;
  description: string;
  image: string;
  category: string;
}
