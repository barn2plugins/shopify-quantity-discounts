import { BlockStack, Text, TextField } from "@shopify/polaris";

export default function DiscountNameSection({ formState, setFormState }) {
  return (
    <BlockStack gap={200}>
      <Text as="p" variant="bodyLg" fontWeight="medium">Discount name</Text>
      <TextField
        label="Discount name"
        labelHidden
        name="name"
        value={formState?.name}
        onChange={(value) => setFormState({...formState, name: value})}
        autoComplete="off"
      />
    </BlockStack>
  );
}