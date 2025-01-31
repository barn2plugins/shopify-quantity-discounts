// External libraries and components
import { 
  BlockStack, 
  IndexTable, 
  Text, 
  Button, 
  TextField, 
  Icon, 
  Checkbox, 
  InlineStack
} from '@shopify/polaris';
import { PlusIcon, DeleteIcon } from '@shopify/polaris-icons';
import { useEffect } from 'react';

// Internal components
import styles from '../../styles.module.scss';
import { currencyCodeToSymbol, getDefaultPricingTiers } from '../../../../utils/utils';

export default function BulkPricingTiers({ 
  currencyCode, 
  pricingTiers,
  setPricingTiers,
}) {

  const currencySymbol = currencyCodeToSymbol(currencyCode);

  const volumeBundleDiscountTypes = [
    {
      label: '%',
      value: 'percentage',
    },
    {
      label: currencySymbol,
      value: 'amount',
    }
  ];
  
  /**
   * Updates a specific field of a pricing tier at the given index
   * @param {number} index - The index of the pricing tier to update
   * @param {string} field - The field name to update (min_quantity, max_quantity, discount, or discount_type)
   * @param {number|string} value - The new value for the field
   * @returns {void}
   */
  const handleVolumeChange = (index, field, value) => {
    setPricingTiers(prev => {
      const newTiers = [...prev];
      newTiers[index] = {
        ...newTiers[index],
        [field]: value
      };
      
      return newTiers;
    });
  };

  /**
   * Removes a pricing tier from the list at the specified index
   * @param {number} index - The index of the pricing tier to remove
   * @returns {void}
   */
  const handleDeletePricingTier = (index) => {
    const newBundles = pricingTiers.filter((_, i) => i !== index);
    setPricingTiers(newBundles);
  };

  /**
   * Creates and adds a new pricing tier with default values to the existing tiers list
   * @returns {void}
   * 
   * Default values for the new tier:
   * - min_quantity: 1 (Minimum quantity required for this tier)
   * - max_quantity: 10 (Maximum quantity for this tier)
   * - discount: '' (Empty string for no initial discount)
   * - discount_type: 'percentage' (Default discount type is percentage)
   */
  const addNewPricingTier = () => {
    const newTier = {
      min_quantity: 1,
      max_quantity: 10,
      discount: '',
      discount_type: 'percentage',
    };
    setPricingTiers([...pricingTiers, newTier]);
  };

  useEffect(() => {
    setPricingTiers(getDefaultPricingTiers())
  }, []);

  return (
    <BlockStack gap={200}>
      <Text as="p" variant="bodyLg" fontWeight="medium">Bulk Pricing</Text>
      <IndexTable
        itemCount={pricingTiers.length}
        headings={[
          {title: 'Minimum Quantity'},
          {title: 'Maximum Quantity'},
          {title: 'Discount'},
          {title: ''},
        ]}
        selectable={false}
      >
        {pricingTiers.map((bundle, index) => (
          <tr id={index} key={index} position={index} className={styles.volumn_bundle_table_row}>
            <td className={styles.cell_quantity}>
                <TextField
                  type="number"
                  min="1"
                  value={bundle.min_quantity.toString()}
                  onChange={(value) => {
                    const numericValue = Math.max(1, parseInt(value) || 1);
                    handleVolumeChange(index, 'min_quantity', numericValue);
                  }}
                  autoComplete="off"
                />
            </td>
            <td className={styles.cell_quantity}>
                <TextField
                  type="number"
                  min="1"
                  value={bundle.max_quantity.toString()}
                  onChange={(value) => {
                    const numericValue = Math.max(1, parseInt(value) || 1);
                    handleVolumeChange(index, 'max_quantity', numericValue);
                  }}
                  autoComplete="off"
                />
            </td>
            <td className={styles.cell_discount}>
                <div className={styles.combined_text_select_field}>
                  <input type="text" value={bundle.discount?.toString() || ''} onChange={(event) => {
                    const value = event.target.value;
                    if (value === '') {
                      handleVolumeChange(index, 'discount', '');
                    } else {
                      const numericValue = parseFloat(value);
                      if (!isNaN(numericValue)) {
                        handleVolumeChange(index, 'discount', numericValue);
                      }
                    }
                  }}/>
                  <select
                    value={bundle.discount_type}
                    onChange={(event) => {
                      const selectedValue = event.target.value;
                      handleVolumeChange(index, 'discount_type', selectedValue);
                    }}
                  >
                    { volumeBundleDiscountTypes.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
            </td>
            <td className={styles.cell_action}>
              {index !== 0 && (
                <span onClick={() => handleDeletePricingTier(index)}>
                  <Icon source={DeleteIcon} />
                </span>
              )}
            </td>
          </tr>
        ))}
      </IndexTable>

      <InlineStack>
        <Button icon={PlusIcon} variant="primary" onClick={addNewPricingTier}>Add tier</Button>
      </InlineStack>
    </BlockStack>
  )
}