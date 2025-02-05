import { BlockStack, Text, ChoiceList } from "@shopify/polaris";

export default function LayoutSection({ formState, setFormState }) {
  return (
    <BlockStack gap={200}>
      <Text as="p" variant="bodyLg" fontWeight="medium">Layout</Text>
      <ChoiceList
        choices={[
          {label: 'Vertical', value: 'vertical'},
          {label: 'Horizontal', value: 'horizontal'},
        ]}
        selected={[formState?.layout || 'vertical']}
        onChange={(value) => setFormState({...formState, layout: value[0]})}
      />
    </BlockStack>
  );
}