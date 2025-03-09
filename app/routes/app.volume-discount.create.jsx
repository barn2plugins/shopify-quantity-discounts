import {
  Card,
  Page,
  Text,
  Layout,
  Button
} from "@shopify/polaris"; 
import { useLoaderData, useFetcher } from "@remix-run/react";
import { authenticate } from "../shopify.server"

export const action = async ({ params, request }) => {
  const { admin } = await authenticate.admin(request);

  
  // Check if it's a DELETE request
  if (request.method === 'DELETE') {
    const response = await admin.graphql(
      `#graphql
        mutation discountAutomaticDelete($id: ID!) {
          discountAutomaticDelete(id: $id) {
            deletedAutomaticDiscountId
            userErrors {
              field
              code
              message
            }
          }
        }`,
      {
        variables: {
          id: "gid://shopify/DiscountAutomaticNode/1663018369395",
        },
      },
    );

    const responseJson = await response.json();
    console.log('delete response');
    console.log(responseJson);
    const errors = responseJson.data.discountDelete?.userErrors;
    return null;
  }

  const metafields = [
    {
      namespace: "$app:barn2-volume-discount",
      key: "function-configuration",
      type: "json",
      value: JSON.stringify({
        quantity: 5,
        percentage: 50,
      }),
    },
  ];

  const combinesWith = {
    orderDiscounts: true,
    productDiscounts: false,
    shippingDiscounts: false
  }

  const baseDiscount = {
    functionId: '06f8ae23-dd5d-48d8-bdb3-5cf261496126',
    title: 'Good discount 3',
    combinesWith,
    startsAt: new Date(),
    endsAt: new Date('2025-12-25T04:00:00.000Z'),
  };


  const response = await admin.graphql(
    `#graphql
        mutation CreateAutomaticDiscount($discount: DiscountAutomaticAppInput!) {
          discountCreate: discountAutomaticAppCreate(automaticAppDiscount: $discount) {
            automaticAppDiscount {
              discountId
            }
            userErrors {
              code
              message
              field
            }
          }
        }`,
    {
      variables: {
        discount: {
          ...baseDiscount,
          metafields,
        },
      },
    },
  );

  const responseJson = await response.json();
  console.log('responseJson');
  console.log(responseJson.data.discountCreate.automaticAppDiscount);

  const errors = responseJson.data.discountCreate?.userErrors;
  console.log('errors are');
  console.log(errors);

  return null;
};


export default function VolumeDiscountNew() {
  const fetcher = useFetcher();
  const isLoading = false;

  const buttonAction = () => {
    console.log('button action');

    fetcher.submit({}, { method: 'post' })
  }

  const buttonActionDelete = () => {
    console.log('button action delete');

    fetcher.submit({}, { method: 'delete' })
  }

  return (
    <Page title="New volume discount">
      <Layout>
        <Layout.Section>
          <Card>
            <Text as="h1" variant="heading1">
                New volume discount
            </Text>
            <Button loading={isLoading} onClick={buttonAction} >
              Create
            </Button>
            <Button loading={isLoading} onClick={buttonActionDelete} >
              Delete discount
            </Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}