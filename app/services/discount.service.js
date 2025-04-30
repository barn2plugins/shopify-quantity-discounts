/**
 * Creates a new Shopify automatic discount for volume pricing
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - Shopify admin API instance
 * @param {Object} params.fetcherData - Data for creating the discount
 * @param {string} params.fetcherData.whichProducts - Target mode for product selection
 * @param {string} params.fetcherData.name - Name of the discount
 * @param {string} params.fetcherData.selectedProducts - JSON string of selected products
 * @param {string} params.fetcherData.selectedCollections - JSON string of selected collections
 * @param {string} params.fetcherData.excludedProducts - JSON string of excluded products
 * @param {string} params.fetcherData.excludedCollections - JSON string of excluded collections
 * @param {string} params.discountFunctionId - ID of the discount function to use
 * @returns {Promise<string|boolean>} Returns discount ID if successful, false if there are errors
 * @throws {Error} When GraphQL request fails
 */
export async function createShopifyVolumeDiscount({admin, fetcherData, discountFunctionId}) {
  const metafieldsValue = {
    targetMode: fetcherData.whichProducts,
    campaignName: fetcherData.name,
    discountType: fetcherData.type,
    discountCalculation: fetcherData.discountCalculation,
    selectedProductIds: JSON.parse(fetcherData.selectedProducts).map(p => p.id),
    selectedCollectionIds: fetcherData.selectedCollections !== '[]' ? JSON.parse(fetcherData.selectedCollections).map(p => p.id) : [],
    excludedProductIds: JSON.parse(fetcherData.excludedProducts).map(p => p.id),
    excludedCollectionIds: fetcherData.excludedCollections !== '[]' ? JSON.parse(fetcherData.excludedCollections).map(p => p.id) : [],
    discounts: structureDiscountData(fetcherData),
    discountApplicationStrategy: 'MAXIMUM'
  };

  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
      discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
        userErrors {
          field
          message
        }
        automaticAppDiscount {
          discountId
          title
          startsAt
          endsAt
          status
          appDiscountType {
            appKey
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
        }
      }
    }`,
    {
      variables: {
        automaticAppDiscount: {
          title: `Barn2 Bundles & Bulk Discounts - ${fetcherData.name}`,
          functionId: discountFunctionId,
          startsAt: JSON.parse(fetcherData.specificDates).start,
          endsAt: fetcherData.activeDates === 'specific_dates' ? JSON.parse(fetcherData.specificDates).end : null,
          combinesWith: {
            orderDiscounts: false,
            productDiscounts: false,
            shippingDiscounts: false
          },
          metafields: [
            {
              namespace: "$app:barn2-bundles-bulk-discount",
              key: "function-configuration",
              type: "json",
              value: JSON.stringify(metafieldsValue)
            }
          ]
        }
      }
    }
  );
  const responseJson = await response.json();

  if (responseJson.data.discountAutomaticAppCreate.userErrors.length > 0) {
    return false;
  }

  const discountId = responseJson.data.discountAutomaticAppCreate.automaticAppDiscount.discountId;

  return discountId;
}

/**
 * Updates an existing Shopify automatic discount for volume pricing
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - Shopify admin API instance
 * @param {Object} params.fetcherData - Data for updating the discount
 * @param {string} params.fetcherData.whichProducts - Target mode for product selection
 * @param {string} params.fetcherData.name - Name of the discount
 * @param {string} params.fetcherData.selectedProducts - JSON string of selected products
 * @param {string} params.fetcherData.selectedCollections - JSON string of selected collections
 * @param {string} params.fetcherData.excludedProducts - JSON string of excluded products
 * @param {string} params.fetcherData.excludedCollections - JSON string of excluded collections
 * @param {string} params.fetcherData.shopifyDiscountId - ID of the Shopify discount to update
 * @param {string} params.metafieldId - ID of the metafield to update
 * @returns {Promise<Object|null>} Returns discount data if successful, null if there are errors
 * @throws {Error} When GraphQL request fails
 */
export async function updateShopifyVolumeDiscount({admin, fetcherData, metafieldId}) {
  const metafieldsValue = {
    targetMode: fetcherData.whichProducts,
    campaignName: fetcherData.name,
    discountType: fetcherData.type,
    discountCalculation: fetcherData.discountCalculation,
    selectedProductIds: JSON.parse(fetcherData.selectedProducts).map(p => p.id),
    selectedCollectionIds: fetcherData.selectedCollections !== '[]' ? JSON.parse(fetcherData.selectedCollections).map(p => p.id) : [],
    excludedProductIds: JSON.parse(fetcherData.excludedProducts).map(p => p.id),
    excludedCollectionIds: fetcherData.excludedCollections !== '[]' ? JSON.parse(fetcherData.excludedCollections).map(p => p.id) : [],
    discounts: structureDiscountData(fetcherData),
    discountApplicationStrategy: 'MAXIMUM'
  };

  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
      discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
        userErrors {
          field
          message
        }
        automaticAppDiscount {
          discountId
          title
          startsAt
          endsAt
          status
          appDiscountType {
            appKey
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
        }
      }
    }`,
    {
      variables: {
        id: fetcherData.shopifyDiscountId,
        automaticAppDiscount: {
          title: `Barn2 Bundles & Bulk Discounts - ${fetcherData.name}`,
          startsAt: JSON.parse(fetcherData.specificDates).start,
          endsAt: JSON.parse(fetcherData.specificDates).end,
          metafields: [
            {
              id: metafieldId,
              value: JSON.stringify(metafieldsValue)
            }
          ]
        }
      }
    }
  );

  const responseJson = await response.json();
  const discountData = responseJson.data.discountAutomaticAppUpdate.automaticAppDiscount;

  if (responseJson.data.discountAutomaticAppUpdate.userErrors.length > 0) {
    return null;
  }

  return discountData;
}

/**
 * Deletes a Shopify automatic discount
 * @param {Object} admin - Shopify Admin API client instance
 * @param {string} shopifyDiscountId - ID of the Shopify automatic discount to delete
 * @returns {Promise<boolean>} Returns true if deletion was successful, false if there were errors
 */
export async function deleteShopifyVolumeDiscount(admin, shopifyDiscountId) {
  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticDelete($id: ID!) {
      discountAutomaticDelete(id: $id) {
        deletedAutomaticDiscountId
        userErrors {
          field
          code
          message
        }
      }
    }`,
    {
      variables: {
        id: shopifyDiscountId
      }
    }
  );

  const responseJson = await response.json();
  const userErrors = responseJson.data.discountAutomaticDelete.userErrors;
  if (userErrors.length > 0) {
    return false;
  }

  return true;
}

/**
 * Activates a Shopify automatic discount
 * @param {Object} admin - Shopify Admin API client instance
 * @param {string} shopifyDiscountId - ID of the Shopify automatic discount to delete
 * @returns {Promise<boolean>} Returns true if deletion was successful, false if there were errors
 */
export async function activateShopifyVolumeDiscount ({admin, shopifyDiscountId}) {
  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticActivate($id: ID!) {
      discountAutomaticActivate(id: $id) {
        automaticDiscountNode {
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              status
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
        id: shopifyDiscountId
      }
    }
  );

  const responseJson = await response.json();
  const userErrors = responseJson.data.discountAutomaticActivate.userErrors;
  if (userErrors.length > 0) {
    return false;
  }

  return true;
}

/**
 * Deactivates a Shopify automatic discount
 * @param {Object} admin - Shopify Admin API client instance
 * @param {string} shopifyDiscountId - ID of the Shopify automatic discount to deactivate
 * @returns {Promise<boolean>} Returns true if deletion was successful, false if there were errors
 */
export async function deactivateShopifyVolumeDiscount({admin, shopifyDiscountId}) {
  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticDeactivate($id: ID!) {
      discountAutomaticDeactivate(id: $id) {
        automaticDiscountNode {
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              status
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
        id: shopifyDiscountId
      }
    }
  );

  const responseJson = await response.json();
  const userErrors = responseJson.data.discountAutomaticDeactivate.userErrors;
  if (userErrors.length > 0) {
    return false;
  }

  return true;
}

/**
 * Structures discount data for Shopify's automatic discount configuration
 * 
 * @param {Object} fetcherData - The data object containing discount configuration
 * @param {string} fetcherData.type - Type of discount ('volume_bundle' or 'bulk_pricing')
 * @param {string} fetcherData.volumeBundles - JSON string of volume bundle configurations
 * @param {string} fetcherData.pricingTiers - JSON string of bulk pricing configurations
 * @returns {Array<Object>} Array of structured discount objects with:
 */
function structureDiscountData(fetcherData) {
  let discountData = [];

  if (fetcherData.type === "volume_bundle") {
    const volumeBundles = JSON.parse(fetcherData.volumeBundles);
    
    discountData = volumeBundles
    .filter(d => d.discount !== "")
    .map(d => {
        let discountValue;
        
        if (d.discount_type === "percentage") {
            discountValue = { percentage: { value: Number(d.discount) } };
        } else if (d.discount_type === "amount") {
            discountValue = { fixedAmount: { amount: Number(d.discount) } };
        }

        return {
            value: discountValue,
            targets: [
                {
                  productVariant: {
                    quantity: { min: d.quantity, max: d.quantity }
                  }
                }
            ]
        };
    })
  }

  if (fetcherData.type === "bulk_pricing") {
    const bulkPricing = JSON.parse(fetcherData.pricingTiers);

    discountData = bulkPricing
    .filter(d => d.discount !== "")
    .map(d => {
        let discountValue;
        
        if (d.discount_type === "percentage") {
            discountValue = { percentage: { value: Number(d.discount) } };
        } else if (d.discount_type === "amount") {
            discountValue = { fixedAmount: { amount: Number(d.discount) } };
        }

        return {
            value: discountValue,
            targets: [
                {
                  productVariant: {
                    quantity: { min: d.min_quantity, max: d.max_quantity }
                  }
                }
            ]
        };
    })
  }

  return discountData;
}

/**
 * Retrieves the metafield ID for a given Shopify automatic discount node
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - Shopify Admin API client instance
 * @param {string} params.shopifyDiscountId - ID of the Shopify automatic discount
 * @returns {Promise<string>} The metafield ID for the discount's function configuration
 */
export async function getDiscountMetafieldId({admin, shopifyDiscountId}) {
  const response = await admin.graphql(
    `#graphql
    query {
      automaticDiscountNode(id: "${shopifyDiscountId}") {
        metafield(namespace: "$app:barn2-bundles-bulk-discount", key: "function-configuration") {
          id
        }
      }
    }`
  );

  const responseJson = await response.json();
  return responseJson.data.automaticDiscountNode.metafield.id;
}