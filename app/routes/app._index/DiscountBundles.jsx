import {
  Layout,
  Text,
  BlockStack,
  Button,
  InlineStack,
  IndexTable,
  Badge,
  Icon,
  LegacyCard,
} from "@shopify/polaris";
import {EditIcon, DuplicateIcon, DeleteIcon, SortIcon} from '@shopify/polaris-icons';
import { useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useFetcher } from "@remix-run/react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default function DiscountBundles({ bundles }) {
  const shopify = useAppBridge();
  const fetcher = useFetcher();
  const [ bundleToDelete, setBundleToDelete ] = useState({});

  const handleDelete = (bundle) => {
    setBundleToDelete(bundle);
    shopify.modal.show('delete-confirmation-modal');
  };

  const renderRowActions = (bundle) => (
    <InlineStack gap="200">
      <Button icon={EditIcon} plain accessibilityLabel={`Edit discount ${bundle.id}`} />
      <Button icon={DuplicateIcon} plain accessibilityLabel={`Duplicate discount ${bundle.id}`} />
      <Button 
        icon={DeleteIcon} 
        plain 
        accessibilityLabel={`Delete discount ${bundle.id}`} 
        onClick={() => handleDelete(bundle)}
      />
    </InlineStack>
  );

  const resourceName = {
    singular: 'discount',
    plural: 'discounts',
  };

  return (
    <>
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
                {bundles.map((bundle, index) => (
                  <IndexTable.Row id={bundle.id} key={bundle.id} position={index}>
                    <IndexTable.Cell>
                      <Icon source={SortIcon} color="subdued" />
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      <Text variation="strong">{bundle.priority}</Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      <Text>{bundle.name}</Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      { bundle.type === 'volume_bundle' ? 'Volume bundle' : 'Bulk pricing' }
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      <Text as="p">{bundle.applyTo}</Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      <Badge status={bundle.active ? 'success' : 'attention'} tone={bundle.active ? 'success': 'critical'}>
                        {bundle.active ? 'Enabled' : 'Disabled'}
                      </Badge>
                    </IndexTable.Cell>
                    <IndexTable.Cell alignment="right">
                      {renderRowActions(bundle)}
                    </IndexTable.Cell>
                  </IndexTable.Row>
                ))}
              </IndexTable>
            </LegacyCard>
          </BlockStack>
        </Layout.Section>
      </Layout>

      <DeleteConfirmationModal bundleToDelete={bundleToDelete} fetcher={fetcher} />
    </>
  )
}