/*
  Warnings:

  - You are about to drop the column `productSku` on the `image` table. All the data in the column will be lost.
  - Added the required column `image_url` to the `image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "image" DROP CONSTRAINT "image_productSku_fkey";

-- AlterTable
ALTER TABLE "image" DROP COLUMN "productSku",
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;
