/*
  Warnings:

  - Added the required column `productSku` to the `image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "image" DROP CONSTRAINT "image_id_fkey";

-- AlterTable
ALTER TABLE "image" ADD COLUMN     "productSku" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_productSku_fkey" FOREIGN KEY ("productSku") REFERENCES "product"("sku") ON DELETE RESTRICT ON UPDATE CASCADE;
