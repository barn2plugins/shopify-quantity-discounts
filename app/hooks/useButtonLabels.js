export function useButtonLabels(selectedProducts, selectedCollections, excludedProducts, excludedCollections) {
  const selectedProductsBtnLabel = () => 
    selectedProducts.length === 0 ? 'Select products' : `Select products (${selectedProducts.length} selected)`;

  const selectedCollectionsBtnLabel = () => 
    selectedCollections.length === 0 ? 'Select collections' : `Select collections (${selectedCollections.length} selected)`;

  const excludeProductsBtnLabel = () => 
    excludedProducts.length === 0 ? 'Exclude products' : `Exclude products (${excludedProducts.length} selected)`;

  const excludeCollectionsBtnLabel = () => 
    excludedCollections.length === 0 ? 'Exclude collections' : `Exclude collections (${excludedCollections.length} selected)`;

  return {
    selectedProductsBtnLabel,
    selectedCollectionsBtnLabel,
    excludeProductsBtnLabel,
    excludeCollectionsBtnLabel
  };
}