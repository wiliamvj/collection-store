import path from 'path';
import fs from 'fs';
import { prisma } from '../../../database/prisma/PrismaClient';
import { UploadImageCloudinary } from '../utils/UploudImageCloudinary.util';

export class UploadImageRepository {
  async execute(sku: string, filename: string) {
    const skuToUp = sku.toUpperCase();

    console.log({ sku, filename });

    const productExists = await prisma.product.findUnique({
      where: {
        sku: skuToUp,
      },
    });

    if (!productExists) {
      throw new Error(`This sku ${skuToUp} does not exists!`);
    }

    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
    );

    const uploadImage = await UploadImageCloudinary(`${filePath}/${filename}`);

    fs.unlinkSync(`${filePath}/${filename}`);

    const saveImage = await prisma.image.create({
      data: {
        filename: filename,
        image_url: uploadImage.url,
        cloudinary_id: uploadImage.public_id,
        type: uploadImage.format,
        size: uploadImage.bytes,
        productId: skuToUp,
      },
    });

    return saveImage;
  }
}
