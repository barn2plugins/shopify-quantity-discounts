-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" DATETIME,
    "accessToken" TEXT NOT NULL,
    "userId" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "accountOwner" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT,
    "collaborator" BOOLEAN DEFAULT false,
    "emailVerified" BOOLEAN DEFAULT false
);

-- CreateTable
CREATE TABLE "Store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sessionId" TEXT NOT NULL,
    "storeName" TEXT,
    "url" TEXT,
    "shopOwnerName" TEXT,
    "currency" TEXT,
    "ianaTimezone" TEXT,
    "planDisplayName" TEXT,
    "isPartnerDevelopment" BOOLEAN DEFAULT false,
    "isShopifyPlus" BOOLEAN DEFAULT false,
    "activeThemeGid" TEXT,
    "appEmbedDisabled" BOOLEAN DEFAULT true,
    "volumeDiscountFunctionId" TEXT,
    "storeDiscountMetaFieldId" TEXT,
    "moneyFormat" TEXT,
    "moneyInEmailsFormat" TEXT,
    "moneyWithCurrencyFormat" TEXT,
    "moneyWithCurrencyInEmailsFormat" TEXT,
    "checkoutApiSupported" BOOLEAN DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Store_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DiscountBundle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "storeId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT '',
    "previewEnabled" BOOLEAN NOT NULL DEFAULT false,
    "whichProducts" TEXT NOT NULL DEFAULT '',
    "layout" TEXT NOT NULL DEFAULT '',
    "priority" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "shopifyDiscountId" TEXT,
    "selectedProducts" TEXT,
    "selectedCollections" TEXT,
    "excludedProducts" TEXT,
    "excludedCollections" TEXT,
    "volumeBundles" TEXT,
    "pricingTiers" TEXT,
    "discountCalculation" TEXT,
    "activeDates" TEXT,
    "specificDates" TEXT,
    "storeDisplay" TEXT,
    "designOptions" TEXT,
    "customDesigns" TEXT,
    "previewOptions" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DiscountBundle_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "storeId" INTEGER NOT NULL,
    "chargeId" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "test" BOOLEAN NOT NULL DEFAULT false,
    "trialDays" INTEGER,
    "billingOn" DATETIME,
    "billingPeriodEnd" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Subscription_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_sessionId_key" ON "Store"("sessionId");
