import { 
  BlockStack, 
  InlineStack, 
  Tooltip, 
  Icon, 
  Text, 
  TextField
} from "@shopify/polaris";
import { QuestionCircleIcon } from '@shopify/polaris-icons';

export default function DiscountNameSection({ formState, setFormState, formErrors }) {
  return (
    <BlockStack gap={200}>
      <InlineStack blockAlign="center" gap={100}>
        <Text as="p" variant="bodyLg" fontWeight="medium">Discount name</Text>
        <Tooltip
          content={
            <InlineStack gap="200">
              Enter a name for the discount. This will appear when the discount is in the cart.
            </InlineStack>
          }
        >
          <Icon source={QuestionCircleIcon}></Icon>
        </Tooltip>
      </InlineStack>
      <TextField
        label="Discount name"
        labelHidden
        name="name"
        value={formState?.name}
        onChange={(value) => setFormState({...formState, name: value})}
        autoComplete="off"
        error={formErrors?.name}
      />
    </BlockStack>
  );
}