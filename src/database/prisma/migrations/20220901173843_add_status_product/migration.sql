/*
  Warnings:

  - Added the required column `status` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "image" ADD COLUMN     "cloudinary_id" TEXT;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "status" TEXT NOT NULL;
