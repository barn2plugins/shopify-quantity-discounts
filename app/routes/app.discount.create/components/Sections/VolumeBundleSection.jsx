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
import { currencyCodeToSymbol, getDefaultBundleDiscountTypes } from '../../../../utils/utils';

export default function VolumeBundleSection({ 
  currencyCode, 
  volumeBundles,
  setVolumeBundles,
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
   * Updates a specific field of a volume bundle at the given index
   * @param {number} index - The index of the volume bundle to update
   * @param {string} field - The field name to update (quantity, discount, discount_type, description, label, or highlighted)
   * @param {number|string|boolean} value - The new value for the field
   */
  const handleVolumeChange = (index, field, value) => {
    setVolumeBundles(prev => {
      const newBundles = [...prev];
      newBundles[index] = {
        ...newBundles[index],
        [field]: value
      };
      
      return newBundles;
    });
  };

  /**
   * Removes a volume bundle from the list at the specified index
   * @param {number} index - The index of the volume bundle to remove
   * @returns {void}
   */
  const handleDeleteVolume = (index) => {
    const newBundles = volumeBundles.filter((_, i) => i !== index);
    setVolumeBundles(newBundles);
  };

  /**
   * Creates and adds a new volume bundle with default values to the existing bundles list
   * @returns {void}
   * 
   * Default values:
   * - quantity: 1
   * - discount: 10
   * - discount_type: 'percentage'
   * - description: '10 or more'
   * - label: '10 or more'
   * - highlighted: false
   */
  const addNewBundle = () => {
    const newBundle = {
      quantity: 1,
      discount: 10,
      discount_type: 'percentage',
      description: '10 or more',
      label: '10 or more',
      highlighted: false,
    };
    setVolumeBundles([...volumeBundles, newBundle]);
  };

  useEffect(() => {
    setVolumeBundles(getDefaultBundleDiscountTypes())
  }, []);

  return (
    <BlockStack gap={200}>
      <Text as="p" variant="bodyLg" fontWeight="medium">Volume bundles</Text>
      <IndexTable
        itemCount={volumeBundles.length}
        headings={[
          {title: 'Quantity'},
          {title: 'Discount'},
          {title: 'Description'},
          {title: 'Label'},
          {title: 'Highlighted', alignment: 'end'},
          {title: ''},
        ]}
        selectable={false}
      >
        {volumeBundles.map((bundle, index) => (
          <tr id={index} key={index} position={index} className={styles.volumn_bundle_table_row}>
            <td className={styles.cell_quantity}>
              <div style={{width: '70px'}}>
                <TextField
                  type="number"
                  min="1"
                  value={bundle.quantity.toString()}
                  onChange={(value) => {
                    const numericValue = Math.max(1, parseInt(value) || 1);
                    handleVolumeChange(index, 'quantity', numericValue);
                  }}
                  autoComplete="off"
                />
              </div>
            </td>
            <td className={styles.cell_discount}>
                <div className={`${styles.combined_text_select_field} ${styles.text_select_combined_width}`}>
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
            <td className={styles.cell_description}>
              <TextField
                type="text"
                value={bundle.description.toString()}
                onChange={(value) => handleVolumeChange(index, 'description', value)}
              />
            </td>
            <td className={styles.cell_label}>
              <TextField
                type="text"
                placeholder='Popular'
                value={bundle.label.toString()}
                onChange={(value) => handleVolumeChange(index, 'label', value)}
              />
            </td>
            <td className={styles.cell_highlighted}>
              <InlineStack align="center">
                <Checkbox
                  checked={bundle.highlighted}
                  onChange={(checked) => handleVolumeChange(index, 'highlighted', checked)}
                />
              </InlineStack>
            </td>
            <td className={styles.cell_action}>
              {index !== 0 && (
                <span onClick={() => handleDeleteVolume(index)}>
                  <Icon source={DeleteIcon} />
                </span>
              )}
            </td>
          </tr>
        ))}
      </IndexTable>

      <InlineStack>
        <Button icon={PlusIcon} variant="primary" onClick={addNewBundle}>Add tier</Button>
      </InlineStack>
    </BlockStack>
  )
}