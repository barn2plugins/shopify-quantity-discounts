-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" TIMESTAMP(3),
    "accessToken" TEXT NOT NULL,
    "userId" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "accountOwner" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT,
    "collaborator" BOOLEAN DEFAULT false,
    "emailVerified" BOOLEAN DEFAULT false,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" SERIAL NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscountBundle" (
    "id" SERIAL NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiscountBundle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "storeId" INTEGER NOT NULL,
    "chargeId" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "test" BOOLEAN NOT NULL DEFAULT false,
    "trialDays" INTEGER,
    "billingOn" TIMESTAMP(3),
    "billingPeriodEnd" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderAnalytics" (
    "id" SERIAL NOT NULL,
    "storeId" INTEGER NOT NULL,
    "orderId" BIGINT NOT NULL,
    "lineItems" TEXT NOT NULL,
    "discountedOrderValue" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderAnalytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Options" (
    "id" SERIAL NOT NULL,
    "storeId" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_sessionId_key" ON "Store"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Options_key_key" ON "Options"("key");

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountBundle" ADD CONSTRAINT "DiscountBundle_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderAnalytics" ADD CONSTRAINT "OrderAnalytics_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;
