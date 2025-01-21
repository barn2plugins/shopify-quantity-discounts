-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "storeName" TEXT,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" DATETIME,
    "accessToken" TEXT NOT NULL,
    "userId" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "url" TEXT,
    "shopOwnerName" TEXT,
    "accountOwner" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT,
    "collaborator" BOOLEAN DEFAULT false,
    "emailVerified" BOOLEAN DEFAULT false,
    "currency" TEXT,
    "timezone" TEXT,
    "planDisplayName" TEXT,
    "isPartnerDevelopment" BOOLEAN DEFAULT false,
    "isShopifyPlus" BOOLEAN DEFAULT false,
    "moneyFormat" TEXT,
    "moneyInEmailsFormat" TEXT,
    "moneyWithCurrencyFormat" TEXT,
    "moneyWithCurrencyInEmailsFormat" TEXT,
    "checkoutApiSupported" BOOLEAN DEFAULT false
);

-- CreateTable
CREATE TABLE "DiscountBundle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "previewEnabled" BOOLEAN NOT NULL,
    "whichProducts" TEXT NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL,
    "sessionId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DiscountBundle_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
