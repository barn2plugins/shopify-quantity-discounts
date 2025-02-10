import { currencyCodeToSymbol } from './utils'

export default function DiscountBundle({}) {

  const storeCurrency = window.Shopify.currency.active;

  const discounts = {
    layout: 'horizontal',
    bundles: [
      {
        id: 1,
        description: 'Buy one product',
        highlighted: false,
        price: 100,
        discountedPrice: 80,
        discount: 20,
        discount_type: 'percentage'
      },
      {
        id: 2,
        description: 'Buy two products',
        highlighted: true,
        price: 300,
        discountedPrice: 240,
        discount: 20,
        discount_type: 'amount'
      },
      {
        id: 3,
        description: 'Buy three products',
        highlighted: false,
        price: 500,
        discountedPrice: 240,
        discount: 20,
        discount_type: 'percentage'
      },
    ]
  }

  /**
   * Generates formatted discount text based on the bundle's discount type and value.
   * 
   * @param {Object} bundle - The bundle object containing discount information
   * @param {string} bundle.discount_type - The type of discount ('amount' or 'percentage')
   * @param {number|string} bundle.discount - The discount value
   */
  const discountText = (bundle) => {
    let outputText = ''

    if ( bundle.discount_type === 'amount' ) {
      outputText = <Text as='span' variant='bodyXs'>Save {currencyCodeToSymbol(storeCurrency)}{bundle.discount}</Text>
    } else {
      outputText = <Text as='span' variant='bodyXs'>Save {bundle.discount}%</Text>
    }

    if (!bundle.discount) {
      outputText = <Text as='span' variant='bodyXs'>Regular price</Text>
    }

    return outputText;
  }

  return (
    <div className="barn2-discount-bundles">
      <div className="barn2-db-main-title"><span>Buy</span></div>
      <div className={`barn2-discounts-list barn2-dbs-layout-${discounts.layout}`}>
        { discounts.bundles.map(bundle => {
          return (
            <div key={bundle.id} className={`${bundle.highlighted ? 'highlighted' : ''} barn2-discount-bundle`}>
              { bundle.highlighted && <span className="barn2-highlighted-text">Most popular</span>}
              <div className="barn2-dbs-top">
                <span className="barn2-input-circle"></span>
                <div className="barn2-dbs-text-block">
                  <h4 className="barn2-dbs-bundle-title">{bundle.description}</h4>
                </div>
              </div>
              <div className="barn2-dbs-bottom">
                <span className="barn2-dbs-price">$150</span>
                <span className="barn2-dbs-regular-price">$450</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}