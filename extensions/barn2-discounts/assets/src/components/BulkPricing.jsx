export default function BulkPricing({pricingTiers, isInEditor, currentVariant, storeDetails}) {

  /**
   * Generates formatted discount text based on the pricing tier's discount type and value
   * 
   * @param {Object} pricingTier - The pricing tier object
   * @param {string} pricingTier.discount_type - Type of discount ('percentage' or 'amount')
   * @param {number|string} pricingTier.discount - The discount value
   * @returns {JSX.Element} A span element containing the formatted discount text
   */
  const getTierDiscountText = ( pricingTier ) => {
    let text;

    if ( pricingTier.discount_type === 'percentage' ) {
      text = pricingTier.discount + '% off';
    } else {
      text = displayFormattedPrice(pricingTier.discount) + ' off';
    }

    return <span className="b2-pricing-tier-discount">{text}</span>
  }

  const getPrice = () => {
    const price = isInEditor ? window.b2ProductData.product.price : currentVariant.price;

    return price / 100;
  }

  /**
   * Calculates the discounted price for a product based on the pricing tier
   * 
   * @param {Object} pricingTier - The pricing tier object
   * @param {string} pricingTier.discount_type - Type of discount ('percentage' or 'amount')
   * @param {number|string} pricingTier.discount - The discount value
   * @returns {string} The discounted price, guaranteed to be non-negative and formatted to 2 decimal places
   */
  const getDiscountedPrice = (pricingTier) => {
    let finalPrice = getPrice();

    if (pricingTier.discount_type === 'percentage' && pricingTier.discount) {
      const discount = (getPrice() * pricingTier.discount) / 100;
      finalPrice = getPrice() - discount;
    } else if (pricingTier.discount_type === 'amount' && pricingTier.discount) {
      finalPrice = getPrice() - pricingTier.discount;
    }

    return Math.max(0, finalPrice.toFixed(2));
  }

  const displayFormattedPrice = (price) => {
    return storeDetails.moneyFormat.replace('{{amount}}', price);
  } 

  return (
    <div className="barn2-bulk-table-wrapper">
      <div className="barn2-db-main-title"><span>Buy</span></div>
      <div className="barn2-db-main-description">
        <span>Time-limited offer text! Customize this text to highlight your special deal, promotion, or exclusive discount.</span>
      </div>
      <div className="barn2-bulk-table-container">
        <table className="barn2-bulk-table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Price per item</th>
            </tr>
          </thead>
          <tbody>
            { pricingTiers.length > 0 && pricingTiers.map( (pricingTier, index) => {
              return (
                <tr key={index}>
                  <td>{pricingTier.min_quantity}-{pricingTier.max_quantity}</td>
                  <td><span className="discount-pill">{getTierDiscountText(pricingTier)}</span></td>
                  <td>{displayFormattedPrice(getDiscountedPrice(pricingTier))}</td>
                </tr>
              )
            } ) }
          </tbody>
        </table>
      </div>
    </div>
  )
}