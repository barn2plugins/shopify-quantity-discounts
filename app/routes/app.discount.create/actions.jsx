export const fetchProducts = async (admin) => {
    const response = await admin.graphql(
        `#graphql
          query {
            products(first: 40) {
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
    console.log('after ajax request');
    console.log(responseJson);
    console.log(response.ok);
    return responseJson;
}

export const saveDiscounts = async () => {
    console.log('fetchProducts');
}

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