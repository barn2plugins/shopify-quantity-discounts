export const actions = {
  loadProducts: async (admin) => {
    const { data: { products: { edges } } } = await fetchProducts(admin);
    return { success: true, products: edges };
  },
  
  loadCollections: async (admin) => {
    const { data: { collections: { edges } } } = await fetchCollections(admin);
    return { success: true, collections: edges };
  },
  
  create: async ({ prisma, fetcherData, session }) => {
    const discountBundle = await prisma.discountBundle.create({
      data: {
        name: fetcherData.discountName,
        type: fetcherData.discountType,
        whichProducts: fetcherData.whichProducts,
        previewEnabled: fetcherData.preview ? true : false,
        active: fetcherData.active ? true : false,
        session: { connect: { id: session.id } },
        selectedProducts: fetcherData.selectedProducts,
        selectedCollections: fetcherData.selectedCollections,
        excludedProducts: fetcherData.excludedProducts,
        excludedCollections: fetcherData.excludedCollections
      }
    });
    return { success: true, discountBundle };
  },

  update: async ({ prisma, fetcherData }) => {
    const discountBundle = await prisma.discountBundle.update({
      where: { id: parseInt(fetcherData.discountBundleId) },
      data: {
        type: fetcherData.discountType,
        name: fetcherData.discountName,
        whichProducts: fetcherData.whichProducts,
        previewEnabled: fetcherData.preview ? true : false,
        active: fetcherData.active ? true : false,
        selectedProducts: fetcherData.selectedProducts,
        selectedCollections: fetcherData.selectedCollections,
        excludedProducts: fetcherData.excludedProducts,
        excludedCollections: fetcherData.excludedCollections
      }
    });
    return { success: true, discountBundle };
  }
};


const fetchProducts = async (admin) => {
    const response = await admin.graphql(
        `#graphql
          query {
            products(first: 30) {
              edges {
                node {
                  id
                  title
                  handle
                  featuredMedia {
                    preview {
                      image {
                        url
                      }
                    }
                  }
                }
                cursor
              }
              pageInfo {
                hasNextPage
              }
            }
          }`
    );
    
    const responseJson = await response.json();
    return responseJson;
}

const fetchCollections = async (admin) => {
  const response = await admin.graphql(
      `#graphql
        query {
          collections(first: 30) {
            edges {
              node {
                id
                title
                handle
                productsCount {
                  count
                }
                image {
                  url
                }
              }
              cursor
            }
            pageInfo {
              hasNextPage
            }
          }
        }`
  );
  
  const responseJson = await response.json();
  return responseJson;
}