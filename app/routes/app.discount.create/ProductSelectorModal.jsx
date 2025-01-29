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
  
  export default function ProductSelectorModal({ 
    fetcher, 
    selectedProducts, 
    setSelectedProducts, 
  }) {
  
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
        onAction: () => console.log('Todo: implement bulk edit'),
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
          id: node.id.match(/\d+$/)[0],
          title: node.title,
          handle: node.handle,
          imageUrl: node.featuredMedia?.preview?.image?.url,
          cursor,
        }))
  
        setStoreProducts(formattedProducts);
      }
    }, [fetchedProducts])
  
    return (
      <Modal id="select-products-modal" variant="base" onShow={loadProducts}>
        <TitleBar title="Select products"></TitleBar>
        <div style={{ maxHeight: '600px' }}>
          <ResourceList
            resourceName={resourceName}
            items={storeProducts}
            renderItem={renderItem}
            selectedItems={selectedProducts.map(item => item.id)}
            onSelectionChange={(selectedIds) => {
              const selectedItems = storeProducts.filter(item => 
                selectedIds.includes(item.id)
              );
              setSelectedProducts(selectedItems);
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
      const productId = id.match(/\d+$/)[0];
      
      return (
        <ResourceItem
          id={productId}
          media={<Thumbnail size="small" alt={title} source={imageUrl ?? ImageIcon} />}
          accessibilityLabel={`View details for ${title}`}
          verticalAlignment="center"
        >
          <Text variant="bodyMd" as="h3">
            {title}
          </Text>
        </ResourceItem>
      );
    }
  }