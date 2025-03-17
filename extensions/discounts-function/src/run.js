// @ts-check
import { DiscountApplicationStrategy } from "../generated/api";

/**
 * @typedef {import("../generated/api").Input} Input
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 * @typedef {import("../generated/api").Target} Target
 * @typedef {import("../generated/api").ProductVariant} ProductVariant
 * @typedef {import("../generated/api").Discount} Discount
 */

/**
 * @type {FunctionRunResult}
 */
const EMPTY_DISCOUNT = {
  discountApplicationStrategy: DiscountApplicationStrategy.Maximum,
  discounts: [],
};

const getObjectIds = (input) => {
  if (!input || typeof input === 'string') return [];

  return input
    .map(id => {
      if (typeof id !== 'string') return null;
      const matches = id.match(/\/([^\/]+)$/);
      return matches ? matches[1] : null;
    })
    .filter(Boolean);
};

/**
 * @param {Input} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  // Parse the configuration from the metafield
  const configuration = JSON.parse(
    input?.discountNode?.metafield?.value ?? "{}"
  );
  
  if (!configuration.discounts || !Array.isArray(configuration.discounts)) {
    console.error("Invalid configuration: discounts array is missing");
    return EMPTY_DISCOUNT;
  }
  
  // Extract eligibility rules
  const targetMode = configuration.targetMode || "all_products";
  const selectedProductIds = getObjectIds(configuration.selectedProductIds || []);
  const excludedProductIds = getObjectIds(configuration.excludedProductIds || '');
  
  // Filter cart lines based on eligibility rules
  const eligibleLines = input.cart.lines.filter(line => {
    const globalProductId = line.merchandise?.product?.id;
    // Extract the ID number from the global ID
    const productId = globalProductId ? globalProductId.match(/\/([^\/]+)$/)?.[1] : null;
    
    if (!productId) return false;
    
    // Determine if the product is eligible based on the target mode
    switch (targetMode) {
      case "all_products":
        return true;
        
      case "all_products_except_selected":
        // Check if product is not in excluded collections list
        if (excludedProductIds.includes(productId) || line.merchandise?.product?.inExcludedCollection) {
          return false;
        }
        
        return true;
      case "selected_products":
        return selectedProductIds.includes(productId);
        
      case "selected_collections": {
        // Check productId against excludedProductIds
        if (excludedProductIds.includes(productId)) {
          return false;
        }
        
        return line.merchandise?.product?.inSelectedCollection;
      }
      
      default:
        return false;
    }
  });
  
  // Group eligible cart lines by product ID
  const productGroups = {};
  eligibleLines.forEach(line => {
    const productId = line.merchandise?.product?.id;
    if (productId) {
      if (!productGroups[productId]) {
        productGroups[productId] = {
          totalQuantity: 0,
          lines: []
        };
      }
      productGroups[productId].totalQuantity += line.quantity;
      productGroups[productId].lines.push(line);
    }
  });
  
  console.log(`Grouped into ${Object.keys(productGroups).length} product groups`);
  
  /** @type {Discount[]} */
  const discounts = [];
  
  // Process each product group separately
  Object.entries(productGroups).forEach(([productId, group]) => {
    console.log(`Processing product ${productId} with quantity ${group.totalQuantity}`);
    
    // Find all discount tiers that apply to this quantity
    const applicableDiscounts = configuration.discounts.filter(discountTier => {
      const quantityConfig = discountTier.targets?.[0]?.productVariant?.quantity;
      
      if (!quantityConfig) return false;
      
      const minQuantity = quantityConfig.min || 0;
      const maxQuantity = quantityConfig.max || Infinity;
      
      const isApplicable = group.totalQuantity >= minQuantity && 
                          (maxQuantity === undefined || group.totalQuantity <= maxQuantity);
      
      console.log(`Discount tier min=${minQuantity}, max=${maxQuantity}, applicable=${isApplicable}`);
      return isApplicable;
    });
    
    console.log(`Found ${applicableDiscounts.length} applicable discounts`);
    
    if (applicableDiscounts.length > 0) {
      // Get the most beneficial discount for this product group
      const appliedDiscount = applicableDiscounts.reduce((best, current) => {
        // Simple logic to determine the best discount
        if (current.value.percentage && best.value.percentage) {
          return parseFloat(current.value.percentage.value) > 
                 parseFloat(best.value.percentage.value) ? current : best;
        }
        if (current.value.fixedAmount && best.value.fixedAmount) {
          return parseFloat(current.value.fixedAmount.amount) > 
                 parseFloat(best.value.fixedAmount.amount) ? current : best;
        }
        // If different types, prefer percentage discount
        if (current.value.percentage && best.value.fixedAmount) {
          return current;
        }
        return best;
      }, applicableDiscounts[0]);
      
      // Create targets for each line of this product (all variants)
      const targets = group.lines.map(line => ({
        cartLine: { id: line.id }
      }));
      
      // Add the discount for this product group
      discounts.push({
        targets,
        value: appliedDiscount.value,
        message: configuration.campaignName || ''
      });
    }
  });
  
  if (!discounts.length) {
    console.error("No cart lines qualify for volume discount.");
    return EMPTY_DISCOUNT;
  }
  
  // Use the application strategy from configuration, defaulting to Maximum
  const strategy = configuration.discountApplicationStrategy || DiscountApplicationStrategy.Maximum;
  
  return {
    discounts,
    discountApplicationStrategy: strategy,
  };
}
