import { Product } from '@prisma/client';

export class ProductEntity implements Product {
  id: string;
  title: string;
  slug: string | null;
  price: number;
  sku: string;
  gtin: number;
  brand: string;
  description: string;
  image: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
