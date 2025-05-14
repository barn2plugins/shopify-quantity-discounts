/*
  Warnings:

  - You are about to drop the column `storeDiscountMetaFieldId` on the `Store` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Store" DROP COLUMN "storeDiscountMetaFieldId",
ADD COLUMN     "shopifyAutomaticDiscountId" TEXT;
