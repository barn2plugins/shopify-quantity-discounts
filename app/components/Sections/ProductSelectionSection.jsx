import { Text, BlockStack, InlineStack, ButtonGroup, Button, RadioButton } from "@shopify/polaris";

export default function ProductSelectionSection({ 
  formState, 
  setFormState, 
  shopify,
  buttonLabels,
  selectedProducts,
  setSelectedProducts,
  selectedCollections, 
  setSelectedCollections,
  excludedProducts,
  setExcludedProducts,
  excludedCollections,
  setExcludedCollections,
}) {

  /**
   * Opens Shopify's resource picker modal for product selection
   * Allows users to search and select multiple products and stores their IDs
   * Selected products will be stored in format: [{id: 'gid://shopify/Product/123'}]
   */
  const openProductSelectorPicker = async () => {
    const resourceSelection = await shopify.resourcePicker({
      type: 'product',
      multiple: true,
      filter: {
        variants: false
      },
      selectionIds: selectedProducts
    });

    if (resourceSelection && resourceSelection.length > 0) {
      // Update your stored selected IDs
      const formattedSelection = resourceSelection.map(product => ({
        id: product.id,
        title: product.title
      }));
      setSelectedProducts(formattedSelection);
    }
    
    if (resourceSelection && resourceSelection.length === 0)  {
      setSelectedProducts([]);
    }
  }

  /**
   * Opens Shopify's resource picker modal for product exclusion
   * Allows users to search and select multiple products and stores their IDs
   * Excluded products will be stored in format: [{id: 'gid://shopify/Product/123'}]
   */
  const openProductExcluderPicker = async () => {
    const resourceSelection = await shopify.resourcePicker({
      type: 'product',
      multiple: true,
      filter: {
        variants: false
      },
      selectionIds: excludedProducts
    });

    if (resourceSelection && resourceSelection.length > 0) {
      // Update your stored selected IDs
      const formattedSelection = resourceSelection.map(product => ({
        id: product.id,
        title: product.title
      }));
      setExcludedProducts(formattedSelection);
    } 
    
    if (resourceSelection && resourceSelection.length === 0) {
      setExcludedProducts([]);
    }
  }

  /**
   * Opens Shopify's resource picker modal for collection selection
   * Allows users to search and select multiple collections and stores their IDs
   * Selected collections will be stored in format: [{id: 'gid://shopify/Collection/123'}]
   */
  const openCollectionSelectorPicker = async () => {
    const resourceSelection = await shopify.resourcePicker({
      type: 'collection',
      multiple: true,
      selectionIds: selectedCollections
    });

    if (resourceSelection && resourceSelection.length > 0) {
      // Update your stored selected IDs
      const formattedSelection = resourceSelection.map(product => ({
        id: product.id,
        title: product.title
      }));
      setSelectedCollections(formattedSelection);
    } 
    
    if (resourceSelection && resourceSelection.length > 0) {
      setSelectedCollections([]);
    }
  }

  /**
   * Opens Shopify's resource picker modal for collection exclusion
   * Allows users to search and select multiple collections and stores their IDs
   * Excluded collections will be stored in format: [{id: 'gid://shopify/Collection/123'}]
   */
  const openCollectionExcluderPicker = async () => {
    const resourceSelection = await shopify.resourcePicker({
      type: 'collection',
      multiple: true,
      selectionIds: excludedCollections
    });

    if (resourceSelection && resourceSelection.length > 0) {
      // Update your stored selected IDs
      const formattedSelection = resourceSelection.map(product => ({
        id: product.id,
        title: product.title
      }));
      setExcludedCollections(formattedSelection);
    }
    
    if (resourceSelection && resourceSelection.length === 0) {
      setExcludedCollections([]);
    }
  }

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
              <Button variant="primary" onClick={() => openProductExcluderPicker()}>{buttonLabels.excludeProductsBtnLabel()}</Button>
              <Button variant="primary" onClick={() => openCollectionExcluderPicker()}>{buttonLabels.excludeCollectionsBtnLabel()}</Button>
            </ButtonGroup>
          </BlockStack>
      ) }
      { formState.whichProducts === 'selected_products' && (
          <InlineStack>
            <Button variant="primary" onClick={() => openProductSelectorPicker() }>{buttonLabels.selectedProductsBtnLabel()}</Button>
          </InlineStack>
      ) }
      { formState.whichProducts === 'selected_collections' && (
          <InlineStack>
            <ButtonGroup>
              <Button variant="primary" onClick={() => openCollectionSelectorPicker()}>{buttonLabels.selectedCollectionsBtnLabel()}</Button>
              { selectedCollections.length > 0 && (
                <Button variant="primary" onClick={() => openProductExcluderPicker()}>{buttonLabels.excludeProductsBtnLabel()}</Button>
              )}
            </ButtonGroup>
          </InlineStack>
      ) }
    </BlockStack>
  );
}