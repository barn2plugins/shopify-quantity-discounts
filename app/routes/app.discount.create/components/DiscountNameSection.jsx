import { BlockStack, Text, TextField } from "@shopify/polaris";

export default function DiscountNameSection({ formState, setFormState }) {
  return (
    <BlockStack gap={200}>
      <Text as="p" variant="bodyLg" fontWeight="medium">Discount name</Text>
      <TextField
        label="Discount name"
        labelHidden
        name="discountName"
        value={formState?.discountName}
        onChange={(value) => setFormState({...formState, discountName: value})}
        autoComplete="off"
      />
    </BlockStack>
  );
}