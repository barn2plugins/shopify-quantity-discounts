-- CreateTable
CREATE TABLE "DiscountBundle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sessionId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "previewEnabled" BOOLEAN NOT NULL,
    "discountType" TEXT NOT NULL,
    "whichProducts" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DiscountBundle_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
