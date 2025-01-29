import { Text, BlockStack, InlineStack, ButtonGroup, Button, RadioButton } from "@shopify/polaris";

export default function ProductSelectionSection({ 
  formState, 
  setFormState, 
  selectedCollections, 
  shopify,
  buttonLabels 
}) {
  return (
    <BlockStack gap={400}>
      <BlockStack gap={200}>
        <Text as="p" variant="bodyLg" fontWeight="medium">Which products?</Text>
        <BlockStack>
          <RadioButton
            id="all_products"
            label="All products"
            checked={formState?.whichProducts === 'all_products' ? true : false}
            name="whichProducts"
            value="all_products"
            onChange={(checked, value) => setFormState({...formState, whichProducts: value})}
          />
          <RadioButton
            id="all_products_except_selected"
            label="All products except selected"
            checked={formState?.whichProducts === 'all_products_except_selected' ? true : false}
            name="whichProducts"
            value="all_products_except_selected"
            onChange={(checked, value) => setFormState({...formState, whichProducts: value})}
          />
          <RadioButton
            id="selected_products"
            label="Selected products"
            checked={formState?.whichProducts === 'selected_products' ? true : false}
            name="whichProducts"
            value="selected_products"
            onChange={(checked, value) => setFormState({...formState, whichProducts: value})}
          />
          <RadioButton
            id="selected_collections"
            label="Selected collections"
            checked={formState?.whichProducts === 'selected_collections' ? true : false}
            name="whichProducts"
            value="selected_collections"
            onChange={(checked, value) => setFormState({...formState, whichProducts: value})}
          />
        </BlockStack>
      </BlockStack>

      { formState.whichProducts === 'all_products_except_selected' && (
          <BlockStack>
            <ButtonGroup>
              <Button variant="primary" onClick={() => shopify.modal.show('exclude-products-modal')}>{buttonLabels.excludeProductsBtnLabel()}</Button>
              <Button variant="primary" onClick={() => shopify.modal.show('exclude-collections-modal')}>{buttonLabels.excludeCollectionsBtnLabel()}</Button>
            </ButtonGroup>
          </BlockStack>
      ) }
      { formState.whichProducts === 'selected_products' && (
          <InlineStack>
            <Button variant="primary" onClick={() => shopify.modal.show('select-products-modal')}>{buttonLabels.selectedProductsBtnLabel()}</Button>
          </InlineStack>
      ) }
      { formState.whichProducts === 'selected_collections' && (
          <InlineStack>
            <ButtonGroup>
              <Button variant="primary" onClick={() => shopify.modal.show('select-collections-modal')}>{buttonLabels.selectedCollectionsBtnLabel()}</Button>
              { selectedCollections.length > 0 && (
                <Button variant="primary" onClick={() => shopify.modal.show('exclude-products-modal')}>{buttonLabels.excludeProductsBtnLabel()}</Button>
              )}
            </ButtonGroup>
          </InlineStack>
      ) }
    </BlockStack>
  );
}