// External libraries and components
import { 
  BlockStack, 
  IndexTable, 
  Text, 
  Button, 
  TextField, 
  Icon, 
  ChoiceList, 
  InlineStack,
  Tooltip,
  Grid,
  Card,
  Checkbox
} from '@shopify/polaris';
import { PlusIcon, DeleteIcon, QuestionCircleIcon } from '@shopify/polaris-icons';
import { useEffect, useState } from 'react';

// Internal components
import { currencyCodeToSymbol } from '../../utils/utils';
import DateRangePicker from '../Fields/DateRangePicker';

export default function BulkPricingTiers({ 
  formState,
  setFormState,
  pricingTiers,
  setPricingTiers,
  timezone = 'EST',
}) {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState(() => {
    const now = new Date();
    const userDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const endDate = new Date(userDate);
    endDate.setDate(userDate.getDate() + 6);
    
    return {
      start: userDate,
      end: endDate
    };
  });

  useEffect(() => {
    setFormState({
      ...formState,
      specificDates: JSON.stringify(selectedDates)
    })    
  }, [selectedDates])

  const currencySymbol = currencyCodeToSymbol(formState.currencyCode);

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
    if (formState.activeDates === 'specific_dates') {
      setDatePickerVisible(true);
    }
  }, [])

  if (pricingTiers.length <= 0) {
    return null;
  }

  return (
    <>
      <Card>
        <BlockStack gap={1000}>
          <BlockStack gap={300}>
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
                        min="1"
                        value={bundle.max_quantity.toString()}
                        onChange={(value) => {
                          const numericValue = Math.max(1, parseInt(value) || 1);
                          handleVolumeChange(index, 'max_quantity', numericValue);
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
                  <td className="cell_action">
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

          <BlockStack gap={300}>
            <Grid>
              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 4, xl: 4}}>
                <InlineStack>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Discount calculation</Text>
                    <Tooltip
                      content={
                        <InlineStack gap="200">
                          Choose whether to calculate the discount based on the combined cart total of all products selected above, or separately for each individual product?
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
            <Grid>
              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 4, xl: 4}}>
                <Text as="p" variant="bodyLg" fontWeight="medium">Active dates</Text>
              </Grid.Cell>

              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 8, xl: 8}}>
                <BlockStack gap="200">
                  <ChoiceList
                    choices={[
                      {label: 'Always available', value: 'always_available'},
                      {label: 'Specific dates', value: 'specific_dates'},
                    ]}
                    selected={formState?.activeDates}
                    onChange={(value) => {
                      setFormState({...formState, activeDates: value[0]})
                      setDatePickerVisible(value[0] === 'specific_dates');
                    }}
                  />
                  {datePickerVisible && (
                    <DateRangePicker
                      selectedDates={selectedDates}
                      setSelectedDates={setSelectedDates}
                      visible={visible}
                      setVisible={setVisible}
                    />
                  )}
                </BlockStack>
              </Grid.Cell>
            </Grid>
            <Grid>
              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 4, xl: 4}}>
                <InlineStack>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Store display</Text>
                </InlineStack>
              </Grid.Cell>

              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 8, xl: 8}}>
                <BlockStack>
                  <Checkbox
                    label={<InlineStack>
                      <Text as="p" variant="bodyLg">Display badges on catalog pages</Text>
                      <Tooltip content={<InlineStack gap="200">Optionally add a short text label which will appear over the images of products that have discounts available.</InlineStack>}>
                        <Icon source={QuestionCircleIcon}></Icon>
                      </Tooltip>
                    </InlineStack>}
                    name="displayBadges"
                    checked={formState.storeDisplay?.displayBadges || false}
                    onChange={(checked) => {
                      setFormState({
                        ...formState,
                        storeDisplay: {
                          ...formState.storeDisplay,
                          displayBadges: checked
                        }
                      });
                    }}
                  />
                  <Checkbox
                    label={<InlineStack>
                      <Text as="p" variant="bodyLg">Cart notice</Text>
                      <Tooltip content={<InlineStack gap="200">Optionally add a notice which will be displayed above the cart when the discount is applied</InlineStack>}>
                        <Icon source={QuestionCircleIcon}></Icon>
                      </Tooltip>
                    </InlineStack>}
                    name="cartNotice"
                    checked={formState.storeDisplay?.cartNotice || false}
                    onChange={(checked) => {
                      setFormState({
                        ...formState,
                        storeDisplay: {
                          ...formState.storeDisplay,
                          cartNotice: checked
                        }
                      });
                    }}
                  />
                </BlockStack>
              </Grid.Cell>
            </Grid>
          </BlockStack>
        </BlockStack>
      </Card>
    </>
  )
}