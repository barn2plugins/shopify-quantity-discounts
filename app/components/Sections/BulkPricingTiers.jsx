// External libraries and components
import { 
  BlockStack, 
  Text, 
  Button, 
  TextField, 
  Icon, 
  ChoiceList, 
  InlineStack,
  Tooltip,
  Grid,
  Card,
  Box
} from '@shopify/polaris';
import { PlusIcon, DeleteIcon, QuestionCircleIcon } from '@shopify/polaris-icons';
import { useEffect } from 'react';

// Internal components
import { currencyCodeToSymbol, getDefaultPricingTiers } from '../../utils/utils';
import IndexTable from '../Fields/IndexTable';

export default function BulkPricingTiers({ 
  formState,
  setFormState,
  pricingTiers,
  setPricingTiers,
  store,
  formErrors
}) {
  const currencySymbol = currencyCodeToSymbol(store.currencyCode);

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

  /**
   * Effect to set the initial state of the form
   */
  useEffect(() => {
    if (typeof formState?.pricingTiers === 'string' && formState.pricingTiers === '[]') {
      setPricingTiers(getDefaultPricingTiers());
    }
  }, []);

  if (pricingTiers.length <= 0) {
    return null;
  }

  return (
    <>
      <Card>
        <BlockStack gap={600}>
          <BlockStack gap={300}>
            <Text as="p" variant="bodyLg" fontWeight="medium">Bulk pricing tiers</Text>
            <BlockStack>
              <Box className="app-bundles-table app-pricing-tiers-table">
                <IndexTable
                  itemCount={pricingTiers.length}
                  headings={[
                    {title: 'Minimum quantity'},
                    {title: 'Maximum quantity'},
                    {title: 'Discount'},
                    {title: ''},
                  ]}
                  selectable={false}
                >
                  {pricingTiers.map((bundle, index) => (
                    <tr id={index} key={index} position={index} className="volumn_bundle_table_row">
                      <td className="cell_quantity">
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
                      <td className="cell_quantity">
                          <TextField
                            type="number"
                            min={index === pricingTiers.length - 1 ? "0" : "1"}
                            value={bundle.max_quantity === 0 ? '' : bundle.max_quantity.toString()}
                            placeholder={index === pricingTiers.length - 1 ? "" : ""}
                            onChange={(value) => {
                              if (index === pricingTiers.length - 1) {
                                // For last tier, allow blank/0 for "no limit"
                                if (value === '' || value === '0') {
                                  handleVolumeChange(index, 'max_quantity', 0);
                                } else {
                                  const numericValue = Math.max(1, parseInt(value) || 1);
                                  handleVolumeChange(index, 'max_quantity', numericValue);
                                }
                              } else {
                                // For other tiers, enforce minimum of 1
                                const numericValue = Math.max(1, parseInt(value) || 1);
                                handleVolumeChange(index, 'max_quantity', numericValue);
                              }
                            }}
                            autoComplete="off"
                          />
                      </td>
                      <td className="cell_discount">
                          <div className="combined_text_select_field">
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
                            >
                              { volumeBundleDiscountTypes.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                              ))}
                            </select>
                          </div>
                      </td>
                      <td className="cell_action">
                        {index !== 0 && (
                          <Button 
                            icon={DeleteIcon} 
                            plain 
                            accessibilityLabel={`Delete pricing tier ${bundle.id}`} 
                            onClick={() => handleDeletePricingTier(index)}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </IndexTable> 
              </Box>

              { formErrors?.bulkPricing && (
                <Box paddingBlockEnd={300}>
                  <Text as="p" tone='critical'>{formErrors?.bulkPricing}</Text>
                </Box>
              )}

              <InlineStack>
                <Button icon={PlusIcon} variant="primary" onClick={addNewPricingTier}>Add tier</Button>
              </InlineStack>
            </BlockStack>
          </BlockStack>

          <BlockStack gap={400}>
            <Grid>
              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 4, xl: 4}}>
                <InlineStack>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Discount calculation</Text>
                    <Tooltip
                      content={
                        <InlineStack gap="200">
                          Choose whether to calculate the discount based on the combined cart total of all products selected above, or separately for each individual product.
                        </InlineStack>
                      }
                    >
                    <Icon source={QuestionCircleIcon}></Icon>
                  </Tooltip>
                </InlineStack>
              </Grid.Cell>

              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 8, xl: 8}}>
                <ChoiceList
                  choices={[
                    {label: 'Individual products', value: 'individual_products'},
                    {label: 'Entire cart', value: 'entire_cart'},
                  ]}
                  selected={formState?.discountCalculation}
                  onChange={(value) => {
                    setFormState({...formState, discountCalculation: value[0]})
                  }}
                />
              </Grid.Cell>
            </Grid>
          </BlockStack>
        </BlockStack>
      </Card>
    </>
  )
}