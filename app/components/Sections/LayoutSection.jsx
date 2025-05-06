import { BlockStack, Text, ChoiceList } from "@shopify/polaris";

export default function LayoutSection({ formState, setFormState }) {
  return (
    <BlockStack gap={200}>
      <Text as="p" variant="bodyLg" fontWeight="medium">Layout</Text>
      <ChoiceList
        choices={[
          {label: 'Horizontal', value: 'horizontal'},
          {label: 'Vertical', value: 'vertical'},
        ]}
        selected={[formState?.layout || 'vertical']}
        onChange={(value) => setFormState({...formState, layout: value[0]})}
      />
    </BlockStack>
  );
}