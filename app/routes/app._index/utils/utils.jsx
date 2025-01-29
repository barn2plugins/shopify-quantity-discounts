import { Text, BlockStack } from "@shopify/polaris";

export const getApplyToText = (bundle) => {
  const {
    whichProducts,
    selectedProducts,
    selectedCollections,
    excludedProducts,
    excludedCollections
  } = bundle;

  // Parse JSON strings into arrays
  const selectedProductsArray = JSON.parse(selectedProducts || '[]');
  const selectedCollectionsArray = JSON.parse(selectedCollections || '[]');
  const excludedProductsArray = JSON.parse(excludedProducts || '[]');
  const excludedCollectionsArray = JSON.parse(excludedCollections || '[]');

  switch (whichProducts) {
    case 'all_products':
      return 'All products';

    case 'all_products_except_selected':
      if (excludedProductsArray.length > 0 || excludedCollectionsArray.length > 0 ) {
        const excludedProductsName = excludedProductsArray.map(p => p.title);
        const excludedCollectionsName = excludedCollectionsArray.map(p => p.title);

        return (
          <BlockStack>
            <Text fontWeight="bold" as="span">All products except:</Text>
            { excludedProductsArray.length > 0 && <span>
              <Text fontWeight="bold" as="span">Products: </Text>
              {excludedProductsName.join(', ')}
            </span> }
            { excludedCollectionsArray.length > 0 && <span>
              <Text fontWeight="bold" as="span">Collections: </Text>
              {excludedCollectionsName.join(', ')}
            </span> }
          </BlockStack>
        );
      }
      return 'No products selected';
    case 'selected_products':
      if (selectedProductsArray.length > 0) {
        const productNames = selectedProductsArray.map(p => p.title);

        return (
          <span><Text fontWeight="bold" as="span">Products: </Text> {productNames.join(', ')}</span>
        );
      }
      return 'No products selected';
    case 'selected_collections':
      if (selectedCollectionsArray.length > 0 || excludedProductsArray.length > 0 ) {
        const selectedProductsName = selectedCollectionsArray.map(p => p.title);
        const excludedProductsName = excludedProductsArray.map(p => p.title);

        return (
          <BlockStack>
            <span>
              <Text fontWeight="bold" as="span">Selected collections: </Text>
              {selectedProductsName.join(', ')}
            </span>
            { excludedProductsArray.length > 0 && <span>
              <Text fontWeight="bold" as="span">Except products: </Text>
              {excludedProductsName.join(', ')}
            </span>}
          </BlockStack>
        );
      }
    default:
      return 'All products';
  }
};