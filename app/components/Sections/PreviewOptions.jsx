import { 
  BlockStack,
  Checkbox,
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
              <Checkbox
                label="Amount saved"
                checked={formState.previewOptions?.amountSaved}
                onChange={(value) => setFormState({...formState, previewOptions: {...formState.previewOptions, amountSaved: value}})}
              />
            }
          </BlockStack>
        )}
      </BlockStack>
    </BlockStack>
  )
}