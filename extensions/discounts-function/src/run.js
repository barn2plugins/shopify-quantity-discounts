import { DiscountApplicationStrategy } from "../generated/api";

/**
 * @typedef {import('@shopify/discount-functions').RunInput} RunInput
 * @typedef {import('@shopify/discount-functions').FunctionResult} FunctionResult
 * @typedef {import('@shopify/discount-functions').Target} Target
 */

/**
 * @param {RunInput} input
 * @returns {FunctionResult}
 */
export function run(input) {
  // Get cart lines from the input
  const { cart } = input;
  
  // Initialize the discounts array that will be returned
  const discounts = [];

  /**
   * Check if any line has entire_cart bulk pricing
   */
  const hasEntireCartDiscount = cart.lines.find(line => 
    line?._barn2_discount_bundle_type?.value === 'bulk_pricing' && 
    line?._barn2_discount_applies_to?.value === 'entire_cart'
  );

  // If entire_cart discount exists, apply it
  if (hasEntireCartDiscount) {
    // Find the eligible items to apply discounts
    const eligibleLines = cart.lines.filter(line => 
      line?._barn2_discount_campaign_name?.value &&
      line?._barn2_discount_bundle_type?.value === 'bulk_pricing' &&
      line?._barn2_discount_applies_to?.value === 'entire_cart'
    );

    if (eligibleLines.length === 0) {
      return;
    }

    // Get pricing tiers from the first eligible product
    const discountCampaignName = eligibleLines[0]?._barn2_discount_campaign_name?.value;
    const bulkPricingTiers = JSON.parse(eligibleLines[0]?._barn2_discount_pricing_tiers?.value) || [];

    // Calculate total quantity of eligible products only
    const totalEligibleQuantity = eligibleLines.reduce((sum, line) => sum + line.quantity, 0);

    // Find the applicable pricing tier based on total eligible quantity
    const applicableTier = bulkPricingTiers.find(tier => 
      totalEligibleQuantity >= tier.min_quantity && 
      (tier.max_quantity === 0 || !tier.max_quantity || totalEligibleQuantity <= tier.max_quantity)
    );

    if (!applicableTier) {
      return;
    }

    // For amount-based discounts, create separate discount for each line with quantity multiplied
    // For percentage discounts, apply to all lines at once
    if (applicableTier.discount_type === "amount") {
      // Apply amount discount per item quantity - create separate discount for each line
      eligibleLines.forEach(line => {
        const targets = [{ cartLine: { id: line.id } }];
        const totalDiscountForLine = parseFloat(applicableTier.discount) * line.quantity;
        
        discounts.push({
          targets,
          value: { fixedAmount: { amount: totalDiscountForLine } },
          message: discountCampaignName
        });
      });
    } else {
      // For percentage discounts, apply to all eligible lines
      const targets = eligibleLines.map(line => ({
        cartLine: { id: line.id }
      }));
      
      discounts.push({
        targets,
        value: { percentage: { value: parseFloat(applicableTier.discount) } },
        message: discountCampaignName
      });
    }

    return {
      discounts,
      discountApplicationStrategy: DiscountApplicationStrategy.All,
    };
  }

  const volumeDiscountsGroup = {};
  const bulkPricingGroups = [];

  // Setup eligible lines for volume discounts and bulk pricing
  cart.lines.forEach(line => {
    const productId = line.merchandise?.product?.id;
    const campaignName = line?._barn2_discount_campaign_name?.value;
    const bundleType = line?._barn2_discount_bundle_type?.value;
    const appliesTo = line?._barn2_discount_applies_to?.value;

    // Skip if no product ID or no campaign name (not eligible for discount)
    if (!productId || !campaignName) return;
    
    // Handle volume discounts - group by product ID
    if (bundleType === "volume_discount") {
      if (!volumeDiscountsGroup[productId]) {
        volumeDiscountsGroup[productId] = {
          totalQuantity: 0,
          lines: [],
        };
      }
      volumeDiscountsGroup[productId].totalQuantity += line.quantity;
      volumeDiscountsGroup[productId].lines.push(line);
    }

    // Handle bulk pricing for individual products
    else if (bundleType === "bulk_pricing" && appliesTo === "individual_products") {
      bulkPricingGroups.push(line);
    }
    // You can add handling for bulk_pricing with cart-wide application here
  });

  /**
   * Handle volume discounts
   * 
   * Apply discount if total quantity matches the discount quantity for any product
   */
  for (const [productId, group] of Object.entries(volumeDiscountsGroup)) {
    const firstItem = group.lines[0];

    // Get discount attributes
    const discountCampaignName = firstItem?._barn2_discount_campaign_name?.value;
    const volumeBundles = JSON.parse(firstItem?._barn2_discount_volume_bundles?.value) || [];

    // Find the applicable volume discount based on total quantity
    const applicableBundle = volumeBundles.find(bundle => 
      group.totalQuantity === parseInt(bundle.quantity)
    );

    if (!applicableBundle || !discountCampaignName || !applicableBundle.discount) break;

    const discountValue = applicableBundle.discount || 0;
    const discountType = applicableBundle.discount_type || "percentage";

    // Create a target for this specific line item
    // Create targets for each line of this product (all variants)
    const targets = group.lines.map(line => ({
      cartLine: { id: line.id }
    }));
    
    // Create the discount based on discount type
    const discountAmount = {
      value: discountType === "amount" 
        ? { fixedAmount: { amount: parseFloat(discountValue) } }
        : { percentage: { value: parseFloat(discountValue) } }
    };

    discounts.push({
      targets: targets,
      value: discountAmount.value,
      message: discountCampaignName
    });
  }

  /**
   * Handle bulk pricing for individual products
   *
   * Apply discount if total quantity matches the discount quantity for any product
   */
  for (const [productId, group] of Object.entries(bulkPricingGroups)) {
    // Get discount attributes
    const discountCampaignName = group?._barn2_discount_campaign_name?.value;
    const bulkPricingTiers = JSON.parse(group?._barn2_discount_pricing_tiers?.value) || [];
    console.log(JSON.stringify(group.quantity));
    console.log(JSON.stringify(bulkPricingTiers));
    // Find the applicable pricing tier based on total quantity
    const applicableTier = bulkPricingTiers.find(tier => 
      group.quantity >= tier.min_quantity && 
      (tier.max_quantity === 0 || !tier.max_quantity || group.quantity <= tier.max_quantity)
    );

    if (!applicableTier || !discountCampaignName) continue;

    const discountValue = applicableTier.discount || 0;
    const discountType = applicableTier.discount_type || "percentage";
    
    const targets = [
      { cartLine: { id: group.id } },
    ];

    // Create the discount based on discount type
    const discountAmount = {
      value: discountType === "amount" 
        ? { fixedAmount: { amount: parseFloat(discountValue) * group.quantity } }
        : { percentage: { value: parseFloat(discountValue) } }
    };

    discounts.push({
      targets,
      value: discountAmount.value,
      message: discountCampaignName
    });
  }

  return {
    discounts,
    discountApplicationStrategy: DiscountApplicationStrategy.All,
  };
}