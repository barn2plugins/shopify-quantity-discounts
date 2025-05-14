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

  // Group eligible cart lines by product ID
  const productGroups = {};
  cart.lines.forEach(line => {
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

  const hasEntireCartDiscount = cart.lines.some(line => 
    line?._barn2_discount_applies_to?.value === 'entire_cart'
  )

  if (hasEntireCartDiscount) {
    const totalCartQuantity = cart.lines.reduce((sum, line) => sum + line.quantity, 0);
    const discountCampaignName = cart.lines[0]?._barn2_discount_campaign_name?.value;
    const bulkPricingTiers = JSON.parse(cart.lines[0]?._barn2_discount_pricing_tiers?.value) || [];

    // Find the applicable pricing tier based on total quantity
    const applicableTier = bulkPricingTiers.find(tier => 
      totalCartQuantity >= tier.min_quantity && 
      totalCartQuantity <= tier.max_quantity
    );

    if (!applicableTier) {
      return;
    }

    // Create targets for each line of this product (all variants)
    const targets = cart.lines.map(line => ({
      cartLine: { id: line.id }
    }));

    const discountAmount = {
      value: applicableTier.discount_type === "amount" 
        ? { fixedAmount: { amount: parseFloat(applicableTier.discount) } }
        : { percentage: { value: parseFloat(applicableTier.discount) } }
    };

    // Apply discount based on the tier's discount type
    discounts.push({
      targets,
      value: discountAmount.value,
      message: discountCampaignName
    });

    return {
      discounts,
      discountApplicationStrategy: DiscountApplicationStrategy.Maximum,
    };
  }


  // Process each product group separately
  for (const [productId, group] of Object.entries(productGroups)) {
    const firstItem = group.lines[0];

    const bundleType = firstItem?._barn2_discount_bundle_type?.value;

    if (bundleType === "volume_discount") {
      // Get discount attributes
      const discountCampaignName = firstItem?._barn2_discount_campaign_name?.value;
      const discountQuantity = parseInt(firstItem?._barn2_discount_quantity?.value) || 0;
      const discountValue = firstItem?._barn2_discount_value?.value || 0;
      const discountType = firstItem?._barn2_discount_type?.value || "percentage";

      // Check if the line quantity matches the discount quantity
      if (group.totalQuantity === discountQuantity && discountValue && discountType) {
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

        break;
      }
    }

    if (bundleType === "bulk_pricing") {
      const discountCampaignName = firstItem?._barn2_discount_campaign_name?.value;
      const bulkPricingTiers = JSON.parse(firstItem?._barn2_discount_pricing_tiers?.value) || [];

      // Find the applicable pricing tier based on total quantity
      const applicableTier = bulkPricingTiers.find(tier => 
        group.totalQuantity >= tier.min_quantity && 
        group.totalQuantity <= tier.max_quantity
      );

      if (!applicableTier) {
        return;
      }

      // Create targets for each line of this product (all variants)
      const targets = group.lines.map(line => ({
        cartLine: { id: line.id }
      }));

      // Create the discount based on discount type
      const discountAmount = {
        value: applicableTier.discount_type === "amount" 
          ? { fixedAmount: { amount: parseFloat(applicableTier.discount) } }
          : { percentage: { value: parseFloat(applicableTier.discount) } }
      };

      discounts.push({
        targets: targets,
        value: discountAmount.value,
        message: discountCampaignName
      });
    }
  }

  // Return the correctly formatted result object
  return {
    discounts: discounts,
    discountApplicationStrategy: DiscountApplicationStrategy.First,
  };
}