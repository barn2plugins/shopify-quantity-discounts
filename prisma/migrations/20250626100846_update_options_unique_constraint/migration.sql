/*
  Warnings:

  - A unique constraint covering the columns `[storeId,key]` on the table `Options` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Options_key_key";

-- CreateIndex
CREATE UNIQUE INDEX "Options_storeId_key_key" ON "Options"("storeId", "key");
