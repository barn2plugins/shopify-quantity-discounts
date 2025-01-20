import {
  Layout,
  Text,
  BlockStack,
  Button,
  InlineStack,
  IndexTable,
  Badge,
  Icon,
  LegacyCard
} from "@shopify/polaris";
import {EditIcon, DuplicateIcon, DeleteIcon, SortIcon} from '@shopify/polaris-icons';

export default function DiscountBundles( {bundles} ) {
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
              itemCount={bundles.length}
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
              {bundles.map((row, index) => (
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
                    <Text as="p">{row.applyTo}</Text>
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
  )
}