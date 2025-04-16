// External libraries
import {
  Text,
  ResourceItem,
  ResourceList,
  Thumbnail,
  Filters
} from "@shopify/polaris";

import { Modal, TitleBar } from "@shopify/app-bridge-react";
import { ImageIcon } from '@shopify/polaris-icons';
import { useState, useEffect } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";

export default function ProductExclusionsModal({ 
  fetcher, 
  excludedProducts, 
  setExcludedProducts, 
}) {
  const shopify = useAppBridge();
  const [ productSearchQuery, setProductSearchQuery ] = useState('');
  const [ productsLoading, setProductsLoading ] = useState(false);
  const [ storeProducts, setStoreProducts ] = useState([]);

  const fetchedProducts = fetcher.data?.products;

  const resourceName = {
    singular: 'product',
    plural: 'products',
  };

  const promotedBulkActions = [
    {
      content: 'Save',
      onAction: () => {
        shopify.modal.hide('exclude-products-modal');
      },
    },
  ];

  const handleFiltersQueryChange = (value) => {
    setProductSearchQuery(value);
    console.log('handleFiltersQueryChange');
    setProductsLoading(true);
  };

  const handleQueryValueRemove = () => {
    setProductSearchQuery('');
    console.log('handleQueryValueRemove');
    setProductsLoading(false);
  };

  const handleFiltersClearAll = () => {
    setProductSearchQuery('');
    console.log('handleQueryValueRemove');
  };

  const loadProducts = () => {
    // Set the loader
    setProductsLoading(true);

    // Submit the form to load products
    fetcher.submit({
      intent: 'loadProducts'
    }, { method: "POST" })
  }

  useEffect(() => {
    if (fetchedProducts) {
      setProductsLoading(false);

      // Format the object to be used in the ResourceList
      const formattedProducts = fetchedProducts.map(({ node, cursor }) => ({
        id: node.id,
        title: node.title,
        handle: node.handle,
        imageUrl: node.featuredMedia?.preview?.image?.url,
        cursor,
      }))

      setStoreProducts(formattedProducts);
    }
  }, [fetchedProducts])

  return (
    <Modal id="exclude-products-modal" variant="base" onShow={loadProducts}>
      <TitleBar title="Exclude products"></TitleBar>
      <div style={{ maxHeight: '600px' }}>
        <ResourceList
          resourceName={resourceName}
          items={storeProducts}
          renderItem={renderItem}
          selectedItems={excludedProducts.map(item => item.id)}
          onSelectionChange={(selectedIds) => {
            const selectedItems = storeProducts.filter(item =>
              selectedIds.includes(item.id)
            );
            setExcludedProducts(selectedItems);
          }}
          promotedBulkActions={promotedBulkActions}
          filterControl={
            <Filters
              queryValue={productSearchQuery}
              queryPlaceholder={"Search " + resourceName.plural}
              filters={[]}
              onQueryChange={handleFiltersQueryChange}
              onQueryClear={handleQueryValueRemove}
              onClearAll={handleFiltersClearAll}
            />
          }
          emptySearchState={<div>This is a custom empty state</div>}
          selectable
          loading={productsLoading}
        />
      </div>
    </Modal>
  )

  function renderItem(item) {
    const {id, title, imageUrl } = item;
    const productId = id;
    
    return (
      <ResourceItem
        id={productId}
        media={<Thumbnail size="small" alt={title} source={imageUrl ?? ImageIcon} />}
        accessibilityLabel={`View details for ${title}`}
        verticalAlignment="center"
          onClick={id => {
            const selectedItem = storeProducts.find(item => item.id === id);
            if ( selectedItem ) {
              setExcludedProducts([selectedItem]);
            }
          }}
      >
        <Text variant="bodyMd" as="h3">
          {title}
        </Text>
      </ResourceItem>
    );
  }
}