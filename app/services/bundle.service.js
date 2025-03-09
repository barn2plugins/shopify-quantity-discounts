import { StoreService } from './store.service';

/**
 * Service class for handling bundle-related operations
 */
export class BundleService {
  /**
   * Gets default bundle configuration with store-specific settings
   *
   * @param {string} sessionId - Session ID for the current user
   * @returns {Promise<Object>} Default bundle configuration object
   */
  static async getDefaultBundle(sessionId) {
    const storeDetails = await StoreService.getStoreDetails(sessionId, {
      currency: true,
      timezone: true
    });
    const { currency, timezone } = storeDetails || {};
    
    return {
      discountBundleId: null,
      name: 'Bundle',
      type: 'volume_bundle',
      whichProducts: 'all_products',
      previewEnabled: true,
      active: false,
      currencyCode: currency || '$',
      discountCalculation: 'individual_products',
      activeDates: 'always_available',
      timezone: timezone || 'UTC',
      designOptions: 'theme_default',
      customDesigns: {
        backgroundColor: '#cf8383',
        selectedBackgroundColor: '#2cc473',
        badgeColor: '#60a3d9',
        labelColor: '#c2c050',
        textColor: '#a3115f',
        cartNoticeBackground: '#60a3d9',
        cartNoticeText: '#59178b',
        cornerRadius: 'square'
      },
      previewOptions: {
        title: '',
        description: '',
        showOriginalPrice: true,
        amountSaved: true
      }
    }
  }

  /**
   * Retrieves all bundles from the database
   * 
   * @param {string} sessionId - Session ID for the current user
   * @returns {Promise<Array>} Array of bundle objects
   */
  static async getAllBundles(sessionId) {
    try {
      // Query database to get all bundles for the shop
      const bundles = await prisma.DiscountBundle.findMany({
        where: {
          sessionId
        },
        orderBy: {
          priority: 'desc'
        }
      });

      return bundles;
    } catch (error) {
      console.error('Error fetching bundles:', error);
      throw error;
    }
  }

  static async getEligibleProductBundle({storefront, discountBundles, productId}) {
    // Check if product is in excluded collections
    const productCollections = await BundleService.getProductCollections({
      storefront,
      productId
    });

    // Iterate through the discount bundles
    for (const bundle of discountBundles) {
      const { 
        whichProducts, 
        selectedProducts, 
        selectedCollections, 
        excludedProducts, 
        excludedCollections,
        active
      } = bundle;

      if (!active) {
        continue;
      }

      if (whichProducts === 'all_products') {
        return bundle;
      }

      if (whichProducts === 'all_products_except_selected') {
        // Parse the JSON string if excludedProducts is a string
        const excludedProductsList = typeof excludedProducts === 'string' 
          ? JSON.parse(excludedProducts) 
          : excludedProducts;

        // Check if the current productId is in the excluded list
        if (excludedProductsList?.some(product => product.id === productId)) {
          return false;
        }

        // Parse the JSON string if excludedCollections is a string
        const excludedCollectionsList = typeof excludedCollections === 'string'
          ? JSON.parse(excludedCollections)
          : excludedCollections;

        if (excludedCollectionsList.length > 0) {
          // Check if any of the product's collections are in the excluded list
          const isInExcludedCollection = productCollections.some(collection => {
            const { title } = collection.node;
            return excludedCollectionsList.some(excludedCollection => excludedCollection.title === title);
          });

          if (isInExcludedCollection) {
            return false;
          }
        }

        return bundle;
      }

      if (whichProducts === 'selected_products') {
        // Parse the JSON string if selectedProducts is a string
        const selectedProductsList = typeof selectedProducts === 'string'
          ? JSON.parse(selectedProducts)
          : selectedProducts;
        // Check if the current productId is in the selected list
        if (selectedProductsList?.some(product => product.id === productId)) {
          return bundle;
        }
      }

      if (whichProducts === 'selected_collections') {
        // Parse the JSON string if selectedCollections is a string
        const selectedCollectionsList = typeof selectedCollections === 'string'
          ? JSON.parse(selectedCollections)
          : selectedCollections;

        // Check if any of the product's collections are in the selected collections list
        const isInSelectedCollection = productCollections.some(collection => {
          const { title } = collection.node;
          return selectedCollectionsList.some(selectedCollection => selectedCollection.title === title);
        });
        
        if (!isInSelectedCollection) {
          continue;
        }

        // Parse the JSON string if excludedProducts is a string
        const excludedProductsList = typeof excludedProducts === 'string' 
          ? JSON.parse(excludedProducts) 
          : excludedProducts;

        // Check if the current productId is in the excluded product list
        if (excludedProductsList?.some(product => product.id === productId)) {
          return false;
        }

        return bundle;
      }
    };
    
    return;
  }

  static async getProductCollections({storefront, productId}) {
    const productCollections = await storefront.graphql(
      `#graphql
        query getProductCollections($productId: ID!) {
          product(id: $productId) {
            collections(first: 10) {
              edges {
                node {
                  id
                  title
                  handle
                }
              }
            }
          }
        }
      `,
      {
        variables: {
          productId: `gid://shopify/Product/${productId}`
        },
      },
    )

    const response = await productCollections.json();
    const collections = response?.data?.product?.collections?.edges;
    
    return collections ? collections : [];
  }
}