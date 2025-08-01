// External libraries and components
import { 
  BlockStack,
  Text, 
  Button, 
  TextField, 
  InlineStack,
  Box,
  RadioButton
} from '@shopify/polaris';
import { PlusIcon, DeleteIcon } from '@shopify/polaris-icons';
import { useEffect, useCallback } from 'react';
import { getDefaultBundleDiscountTypes } from '../../utils/utils';

// Internal components
import { currencyCodeToSymbol } from '../../utils/utils';
import IndexTable from '../Fields/IndexTable';

export default function VolumeBundleSection({
  formState,
  currencyCode, 
  volumeBundles,
  setVolumeBundles,
  formErrors
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

  const handleHighlightedVolume = useCallback((index, field, value) => {
    setVolumeBundles(prev => {
      // Create a new array with all bundles
      const newBundles = [...prev];
      
      // First, set all bundles' highlighted property to false
      newBundles.forEach(bundle => {
        bundle.highlighted = false;
      });
      
      // Then set the selected bundle's highlighted property to the new value
      newBundles[index] = {
        ...newBundles[index],
        [field]: value
      };
      
      return newBundles;
    });
  }, []);

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
   * - description: 'Buy 1 & save'
   * - label: ''
   * - highlighted: false
   */
  const addNewBundle = () => {
    const newBundle = {
      id: volumeBundles.length + 1,
      quantity: volumeBundles.length + 1,
      discount: '',
      discount_type: 'percentage',
      description: `Buy ${volumeBundles.length + 1} & save`,
      label: '',
      highlighted: false,
    };
    setVolumeBundles([...volumeBundles, newBundle]);
  };

  /**
   * Effect to set the initial state of the form
   */
  useEffect(() => {
    if (typeof formState?.volumeBundles === 'string' && formState.volumeBundles === '[]') {
      setVolumeBundles(getDefaultBundleDiscountTypes());
    } else if (formState.volumeBundles) {
      setVolumeBundles(JSON.parse(formState.volumeBundles));
    }
  }, []);

  return (
    <BlockStack gap={300}>
      <Text as="p" variant="bodyLg" fontWeight="medium">Volume bundles</Text>
      { volumeBundles.length > 0 && 
        <Box className="app-bundles-table">
          <IndexTable
            itemCount={volumeBundles.length}
            headings={[
              {title: 'Quantity'},
              {title: 'Discount'},
              {title: 'Description'},
              {title: 'Label'},
              {title: 'Highlighted'},
              {title: ''},
            ]}
            selectable={false}
          >
            {volumeBundles.map((bundle, index) => (
              <tr id={index} key={index} position={index} className="volumn_bundle_table_row">
                <td className="cell_quantity">
                  <div style={{width: '70px'}}>
                    <TextField
                      type="number"
                      min="1"
                      value={bundle.quantity?.toString() || ''}
                      onChange={(value) => {
                        if (value === '') {
                          handleVolumeChange(index, 'quantity', '');
                        } else {
                          const numericValue = parseInt(value) || 0;
                          handleVolumeChange(index, 'quantity', numericValue);
                        }
                      }}
                      autoComplete="off"
                    />
                  </div>
                </td>
                <td className="cell_discount">
                  <div className="combined_text_select_field text_select_combined_width">
                    <input type="text" value={bundle.discount?.toString() || ''} onChange={(event) => {
                      const value = event.target.value;
                      if (value === '') {
                        handleVolumeChange(index, 'discount', '');
                      } else {
                        // Only allow numbers and a single decimal point
                        if (/^\d*\.?\d*$/.test(value)) {
                          handleVolumeChange(index, 'discount', value);
                        }
                      }
                    }}/>
                    <select
                      value={bundle.discount_type}
                      onChange={(event) => {
                        const selectedValue = event.target.value;
                        handleVolumeChange(index, 'discount_type', selectedValue);
                      }}
                      className="select-with-custom-arrow"
                    >
                      { volumeBundleDiscountTypes.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </td>
                <td className="cell_description">
                  <TextField
                    type="text"
                    value={bundle.description.toString()}
                    onChange={(value) => handleVolumeChange(index, 'description', value)}
                    placeholder="Buy one"
                  />
                </td>
                <td className="cell_label">
                  <TextField
                    type="text"
                    placeholder='Popular'
                    value={bundle.label.toString()}
                    onChange={(value) => handleVolumeChange(index, 'label', value)}
                  />
                </td>
                <td className="cell_highlighted">
                  <InlineStack align="center">
                    <RadioButton
                      name="highlight_bundle"
                      checked={bundle.highlighted}
                      onChange={(checked) => handleHighlightedVolume(index, 'highlighted', checked)}
                    />
                  </InlineStack>
                </td>
                <td className="cell_action">
                  {index !== 0 && (
                    <Button 
                      icon={DeleteIcon} 
                      plain 
                      accessibilityLabel={`Delete volume bundle ${bundle.id}`} 
                      onClick={() => handleDeleteVolume(index)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </IndexTable> 

          { formErrors?.volumeBundle && (
            <Box paddingBlockEnd={300}>
              <Text as="p" tone='critical'>{formErrors?.volumeBundle}</Text>
            </Box>
          )}

          <InlineStack>
            <Button icon={PlusIcon} variant="primary" onClick={addNewBundle}>Add tier</Button>
          </InlineStack>
        </Box>
      }
    </BlockStack>
  )
}