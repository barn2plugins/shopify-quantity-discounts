/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `OrderAnalytics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OrderAnalytics_orderId_key" ON "OrderAnalytics"("orderId");
