/*
  Warnings:

  - You are about to drop the column `getActiveThemeGid` on the `Session` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "storeName" TEXT,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" DATETIME,
    "accessToken" TEXT NOT NULL,
    "volumeDiscountFunctionId" TEXT,
    "storeDiscountMetaFieldId" TEXT,
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
    "activeThemeGid" TEXT,
    "isPartnerDevelopment" BOOLEAN DEFAULT false,
    "isShopifyPlus" BOOLEAN DEFAULT false,
    "moneyFormat" TEXT,
    "moneyInEmailsFormat" TEXT,
    "moneyWithCurrencyFormat" TEXT,
    "moneyWithCurrencyInEmailsFormat" TEXT,
    "checkoutApiSupported" BOOLEAN DEFAULT false
);
INSERT INTO "new_Session" ("accessToken", "accountOwner", "checkoutApiSupported", "collaborator", "currency", "email", "emailVerified", "expires", "firstName", "id", "isOnline", "isPartnerDevelopment", "isShopifyPlus", "lastName", "locale", "moneyFormat", "moneyInEmailsFormat", "moneyWithCurrencyFormat", "moneyWithCurrencyInEmailsFormat", "planDisplayName", "scope", "shop", "shopOwnerName", "state", "storeDiscountMetaFieldId", "storeName", "timezone", "url", "userId", "volumeDiscountFunctionId") SELECT "accessToken", "accountOwner", "checkoutApiSupported", "collaborator", "currency", "email", "emailVerified", "expires", "firstName", "id", "isOnline", "isPartnerDevelopment", "isShopifyPlus", "lastName", "locale", "moneyFormat", "moneyInEmailsFormat", "moneyWithCurrencyFormat", "moneyWithCurrencyInEmailsFormat", "planDisplayName", "scope", "shop", "shopOwnerName", "state", "storeDiscountMetaFieldId", "storeName", "timezone", "url", "userId", "volumeDiscountFunctionId" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
