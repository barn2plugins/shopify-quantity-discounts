/*
  Warnings:

  - The primary key for the `Discount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Discount` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Discount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sessionId" TEXT NOT NULL,
    "previewEnabled" BOOLEAN NOT NULL,
    "discountType" TEXT NOT NULL,
    "whichProducts" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Discount_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Discount" ("createdAt", "discountType", "id", "previewEnabled", "sessionId", "updatedAt", "whichProducts") SELECT "createdAt", "discountType", "id", "previewEnabled", "sessionId", "updatedAt", "whichProducts" FROM "Discount";
DROP TABLE "Discount";
ALTER TABLE "new_Discount" RENAME TO "Discount";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
