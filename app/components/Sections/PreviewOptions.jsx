import { 
  BlockStack,
  Checkbox,
  ChoiceList,
  Text,
  TextField,
} from "@shopify/polaris";
import { useState, useEffect } from "react";

export default function PreviewOptions({
  formState, 
  setFormState, 
  volumeBundles
}) {

  const [ hasDiscount, setHasDiscount ] = useState(false);

  useEffect(() => {
    const foundDiscount = volumeBundles.some(bundle => bundle.discount !== '');
    setHasDiscount(foundDiscount);
  }, [volumeBundles]);
  
  if ( formState.type === 'bulk_pricing' && formState.previewEnabled === false ) {
    return null;
  }

  // Backward compatibility: convert old boolean format to new string format
  const getDisplaySavingValue = () => {
    const currentValue = formState.previewOptions?.displaySaving;
    const legacyAmountSaved = formState.previewOptions?.amountSaved;
    
    // If new format exists, use it
    if (currentValue && typeof currentValue === 'string') {
      return [currentValue];
    }
    
    // Backward compatibility for legacy boolean format
    if (typeof legacyAmountSaved === 'boolean') {
      return [legacyAmountSaved ? 'percentage_saving' : 'none'];
    }
    
    // Default to percentage_saving
    return ['percentage_saving'];
  }

  const handleDisplaySavingChange = (value) => {
    const selectedValue = value[0];
    setFormState({
      ...formState, 
      previewOptions: {
        ...formState.previewOptions, 
        displaySaving: selectedValue,
        // Keep legacy field for backward compatibility during transition
        amountSaved: selectedValue === 'percentage_saving' || selectedValue === 'exact_saving'
      }
    });
  }

  return (
    <BlockStack gap={300}>
      <BlockStack gap={200}>
        <TextField
          label={<Text variant="bodyMd" fontWeight="medium">Heading</Text>}
          value={formState.previewOptions?.title}
          onChange={(value) => setFormState({...formState, previewOptions: {...formState.previewOptions, title: value}})}
          placeholder="Buy More, Save More"
        />
        
        <TextField
          label={<Text variant="bodyMd" fontWeight="medium">Description</Text>}
          value={formState.previewOptions?.description}
          onChange={(value) => setFormState({...formState, previewOptions: {...formState.previewOptions, description: value}})}
          placeholder="Time-limited offer!"
        />

        { formState.type === 'volume_bundle' && (
          <BlockStack>
            <Checkbox
              label="Show original price"
              checked={formState.previewOptions?.showOriginalPrice}
              onChange={(value) => setFormState({...formState, previewOptions: {...formState.previewOptions, showOriginalPrice: value}})}
            />

            { hasDiscount && 
              <ChoiceList
                title="Display saving"
                choices={[
                  {label: 'Percentage saving', value: 'percentage_saving'},
                  {label: 'Exact saving', value: 'exact_saving'},
                  {label: 'None', value: 'none'},
                ]}
                selected={getDisplaySavingValue()}
                onChange={handleDisplaySavingChange}
              />
            }
          </BlockStack>
        )}
      </BlockStack>
    </BlockStack>
  )
}