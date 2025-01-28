/**
 * Fetches a list of products from the Shopify GraphQL API.
 *
 * This function makes a GraphQL query to retrieve the first 30 products, including
 * their ID, title, handle, featured media (preview image URL), and pagination details.
 *
 * @param {Object} admin - An object representing the Shopify Admin API instance.
 *                          It should provide a `graphql` method for making requests.
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the API.
 *                            The response contains product details and pagination info.
 */
export const fetchProducts = async (admin) => {
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

export const fetchCollections = async (admin) => {
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

export const saveDiscounts = async () => {
    console.log('fetchProducts');
}

/**
 * Creates a new discount bundle in the database using Prisma ORM.
 *
 * This function adds a new discount bundle with the provided data, including
 * its name, type, associated products, preview status, active status, and a session
 * relationship.
 *
 * @param {Object} params - The parameters for the function.
 * @param {Object} params.prisma - The Prisma client instance used to interact with the database.
 * @param {Object} params.fetcherData - The data required to create the discount bundle.
 * @param {Object} params.session - The session object to associate with the discount bundle.
 *
 * @returns {Promise<Object>} A promise that resolves to the newly created discount bundle object.
 */
export const createDiscountBundle = async ({ prisma, fetcherData, session }) => {
  const discountBundle = await prisma.discountBundle.create({
    data: {
      name: fetcherData.discountName,
      type: fetcherData.discountType,
      whichProducts: fetcherData.whichProducts,
      previewEnabled: fetcherData.preview ? true : false,
      active: fetcherData.active ? true : false,
      session: {
        connect: {
          id: session.id
        }
      }
    }
  });

  return discountBundle;
}

/**
 * Updates a discount bundle in the database using Prisma ORM.
 *
 * This function updates an existing discount bundle with the provided data,
 * such as type, name, product details, preview status, and active status.
 * It uses Prisma ORM to interact with the database.
 *
 * @param {Object} params - The parameters for the function.
 * @param {Object} params.prisma - The Prisma client instance used to query the database.
 * @param {Object} params.fetcherData - The data required to update the discount bundle.
 * 
 * @returns {Promise<Object>} A promise that resolves to the updated discount bundle object.
 */
export const updateDiscount = async ({prisma, fetcherData}) => {
  const discountBundle = await prisma.discountBundle.update({
    where: {
      id: parseInt(fetcherData.discountBundleId)
    },
    data: {
      type: fetcherData.discountType,
      name: fetcherData.discountName,
      whichProducts: fetcherData.whichProducts,
      previewEnabled: fetcherData.preview ? true : false,
      active: fetcherData.active ? true : false,
    }
  });

  return discountBundle;
}