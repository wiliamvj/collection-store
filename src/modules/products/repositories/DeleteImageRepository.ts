import { prisma } from '../../../database/prisma/PrismaClient';
import { DeleteImageCloudinary } from '../utils/UploudImageCloudinary.util';

export class DeleteImageRepository {
  async execute(imageId: string) {
    const imageExits = await prisma.image.findUnique({
      where: {
        id: imageId,
      },
    });

    if (!imageExits) {
      throw new Error(`This image ${imageId} does not exists!`);
    }

    await DeleteImageCloudinary(imageExits.cloudinary_id as string);

    await prisma.image.delete({
      where: { id: imageId },
    });

    return {
      message: `Image deleted successfully
    `,
    };
  }
}
