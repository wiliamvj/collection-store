export class ListProductEntity {
  totalProduct: number;
  totalProductInPage: number;
  products: [
    {
      id: string;
      title: string;
      status: string;
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
      images?: object;
    },
  ];
}
