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
  
  export default function CollectionSelectorModal({ 
    fetcher, 
    selectedCollections, 
    setSelectedCollections, 
  }) {
  
    const [ productSearchQuery, setProductSearchQuery ] = useState('');
    const [ productsLoading, setProductsLoading ] = useState(false);
    const [ storeCollections, setStoreCollections ] = useState([]);
  
    const fetchedProducts = fetcher.data?.collections;
  
    const resourceName = {
      singular: 'collection',
      plural: 'collections',
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
  
    const loadCollections = () => {
      // Set the loader
      setProductsLoading(true);
  
      // Submit the form to load products
      fetcher.submit({
        intent: 'loadCollections',
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
          imageUrl: node.image?.url,
          productsCount: node.productsCount.count,
          cursor,
        }))
  
        setStoreCollections(formattedProducts);
      }
    }, [fetchedProducts])
  
    return (
      <Modal id="select-collections-modal" variant="base" onShow={loadCollections}>
        <TitleBar title="Select collections"></TitleBar>
        <div style={{ maxHeight: '600px' }}>
          <ResourceList
            resourceName={resourceName}
            items={storeCollections}
            renderItem={renderItem}
            selectedItems={selectedCollections.map(item => item.id)}
            onSelectionChange={(selectedIds) => {
              const selectedItems = storeCollections.filter(item => 
                selectedIds.includes(item.id)
              );
              setSelectedCollections(selectedItems);
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
      const {id, title, imageUrl, productsCount } = item;
      const productId = id.match(/\d+$/)[0];
      
      return (
        <ResourceItem
          id={productId}
          media={<Thumbnail size="small" alt={title} source={imageUrl ?? ImageIcon} />}
          accessibilityLabel={`View details for ${title}`}
          verticalAlignment="center"
          onClick={id => {
            const selectedItem = storeCollections.find(item => item.id === id);
            if ( selectedItem ) {
              setSelectedCollections([selectedItem]);
            }
          }}
        >
          <Text variant="bodyMd" as="h3">
            {title}
          </Text>
          <Text variant="bodyMd" as="p" tone="subdued">
            { productsCount === 1 ? productsCount + " product" : productsCount + " products"}
          </Text>
        </ResourceItem>
      );
    }
  }