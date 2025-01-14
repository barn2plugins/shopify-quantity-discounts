import { useEffect } from "react";
import { useFetcher } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  BlockStack,
  Button,
  InlineStack,
  IndexTable,
  Badge,
  Icon,
  Grid,
  Box,
  LegacyCard
} from "@shopify/polaris";
import { useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import {EditIcon, DuplicateIcon, DeleteIcon, SortIcon} from '@shopify/polaris-icons';

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export default function Index() {
  const rows = [
    {
      id: '1',
      priority: 1,
      name: 'Black Friday Discount',
      type: 'Volume bundle',
      applyTo: <Text as="p">All products</Text>,
      enabled: true,
    },
    {
      id: '2',
      priority: 2,
      name: 'Holiday Sale',
      type: 'Bulk pricing',
      applyTo: <Text as="p"><Text as="span" fontWeight="bold">Collection: </Text><Text as="span">Clothing, Accessories</Text></Text>,
      enabled: false,
    },
  ];

  const resourceName = {
    singular: 'discount',
    plural: 'discounts',
  };

  const renderRowActions = (id) => (
    <InlineStack gap="200">
      <Button icon={EditIcon} plain accessibilityLabel={`Edit discount ${id}`} />
      <Button icon={DuplicateIcon} plain accessibilityLabel={`Duplicate discount ${id}`} />
      <Button icon={DeleteIcon} plain destructive accessibilityLabel={`Delete discount ${id}`} />
    </InlineStack>
  );

  return (
    <Page fullWidth="true">
      <BlockStack gap="500">
        <div style={{marginBottom: '40px'}}>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
              <Card>
                <BlockStack gap="500">
                  <InlineStack align="space-between">
                    <BlockStack gap="200">
                      <Text as="p" variant="bodySm" tone="subdued">
                        This month's discounted orders.
                      </Text>
                      <Text variant="headingLg" as="h4" fontWeight="medium">
                        $3,902
                      </Text>
                      <Text as="p" variant="bodySm" tone="subdued" fontWeight="medium">
                        $0.00
                      </Text>
                    </BlockStack>
                    <BlockStack gap="200">
                      <Text as="p" variant="bodySm" tone="subdued">
                        All-time discounted orders.
                      </Text>
                      <Text variant="headingLg" as="h4" fontWeight="medium">
                        $49,021
                      </Text>
                      <Text as="p" variant="bodySm" tone="subdued" fontWeight="medium">
                        $0.00
                      </Text>
                    </BlockStack>
                  </InlineStack>
                </BlockStack>
              </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
              <Card>
                <InlineStack align="space-between">
                  <BlockStack gap="200">
                    <Text as="p" variant="bodySm" tone="subdued">
                      This month's discounted revenue.
                    </Text>
                    <Text variant="headingLg" as="h4" fontWeight="medium">
                      $280
                    </Text>
                    <Text as="p" variant="bodySm" tone="subdued" fontWeight="medium">
                      $0.00
                    </Text>
                  </BlockStack>
                  <BlockStack gap="200">
                    <Text as="p" variant="bodySm" tone="subdued">
                      All-time discounted revenue.
                    </Text>
                    <Text variant="headingLg" as="h4" fontWeight="medium">
                      $902
                    </Text>
                    <Text as="p" variant="bodySm" tone="subdued" fontWeight="medium">
                      $0.00
                    </Text>
                  </BlockStack>
                </InlineStack>
              </Card>
            </Grid.Cell>
          </Grid>
        </div>
        <Layout>
          <Layout.Section>
            <BlockStack gap={500}>
              <InlineStack align="space-between">
                <Text variant="headingLg" as="h4">
                  Discount bundles
                </Text>
                <Button variant="primary" url="/app/discount/create">New discount</Button>
              </InlineStack>
              <LegacyCard>
                <IndexTable
                  resourceName={resourceName}
                  itemCount={rows.length}
                  headings={[
                    {title: '', alignment: 'center'},
                    {title: 'Priority'},
                    {title: 'Discount name'},
                    {title: 'Type'},
                    {title: 'Apply to'},
                    {title: 'Enabled'},
                    {title: 'Actions', alignment: 'right'},
                  ]}
                  selectable={false}
                >
                  {rows.map((row, index) => (
                    <IndexTable.Row id={row.id} key={row.id} position={index}>
                      <IndexTable.Cell>
                        <Icon source={SortIcon} color="subdued" />
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <Text variation="strong">{row.priority}</Text>
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <Text>{row.name}</Text>
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        {row.type}
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        {row.applyTo}
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <Badge status={row.enabled ? 'success' : 'attention'} tone={row.enabled ? 'success': 'critical'}>
                          {row.enabled ? 'Enabled' : 'Disabled'}
                        </Badge>
                      </IndexTable.Cell>
                      <IndexTable.Cell alignment="right">
                        {renderRowActions(row.id)}
                      </IndexTable.Cell>
                    </IndexTable.Row>
                  ))}
                </IndexTable>
              </LegacyCard>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
