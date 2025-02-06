import { 
  BlockStack,
  Checkbox,
  Text,
  TextField
} from "@shopify/polaris";

export default function PreviewOptions({formState, setFormState}) {
  return (
    <BlockStack gap={300}>
      <BlockStack gap={100}>
        <Text as="p" variant="bodyLg" fontWeight="medium">Display</Text>
        <Text as="p" variant="bodySm" tone="subdued">Customize the texts and elements of the preview bundle</Text>
      </BlockStack>
      <BlockStack gap={200}>
        <TextField
          label="Heading"
          value={formState.previewOptions?.title}
          onChange={(value) => setFormState({...formState, previewOptions: {...formState.previewOptions, title: value}})}
          placeholder="Buy More, Save More"
        />
        
        <TextField
          label="Description"
          value={formState.previewOptions?.description}
          onChange={(value) => setFormState({...formState, previewOptions: {...formState.previewOptions, description: value}})}
          placeholder="Time-limited offer!"
        />

        <Checkbox
          label="Show original price"
          checked={formState.previewOptions?.showOriginalPrice}
          onChange={(value) => setFormState({...formState, previewOptions: {...formState.previewOptions, showOriginalPrice: value}})}
        />

        <Checkbox
          label="Amount saved"
          checked={formState.previewOptions?.amountSaved}
          onChange={(value) => setFormState({...formState, previewOptions: {...formState.previewOptions, amountSaved: value}})}
        />

      </BlockStack>
      
    </BlockStack>
  )
}