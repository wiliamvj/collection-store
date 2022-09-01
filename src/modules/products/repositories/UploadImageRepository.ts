import { prisma } from '../../../database/prisma/PrismaClient';

export class UploadImageRepository {
  async execute(sku: string, filename: string) {
    const skuToUp = sku.toUpperCase();

    const productExists = await prisma.product.findUnique({
      where: {
        sku: skuToUp,
      },
    });

    if (!productExists) {
      throw new Error(`This sku ${skuToUp} does not exists!`);
    }

    const saveImage = await prisma.image.create({
      data: {
        filename: filename,
        type: 'img',
        size: 1899,
        productId: skuToUp,
      },
    });

    console.log(saveImage);

    // const saveImageInPorduct = await prisma.product.update({
    //   where: { sku },
    //   data: { image: saveImage },
    // });

    return productExists;
  }
}
