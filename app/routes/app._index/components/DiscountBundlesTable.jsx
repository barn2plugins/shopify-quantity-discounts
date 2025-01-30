import {
  Layout,
  Text,
  BlockStack,
  Button,
  InlineStack,
  IndexTable,
  Icon,
  LegacyCard,
} from "@shopify/polaris";
import {EditIcon, DuplicateIcon, DeleteIcon, SortIcon} from '@shopify/polaris-icons';
import { useState, useEffect } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useFetcher } from "@remix-run/react";

import DeleteConfirmationModal from "./Modals/DeleteConfirmationModal";
import styles from '../styles.module.scss'
import { getApplyToText } from "../../../utils/utils";

export default function DiscountBundlesTable({ discountBundles }) {
  const shopify = useAppBridge();
  const fetcher = useFetcher();
  const [bundleToDelete, setBundleToDelete] = useState({});
  const [bundles, setBundles] = useState([]);
  const [duplicatingId, setDuplicatingId] = useState(null);

  const handleDuplicate = (bundle) => {
    setDuplicatingId(bundle.id);
    
    fetcher.submit(
      { bundleId: bundle.id },
      {
        method: "POST",
        action: "/app/discount/duplicate",
      }
    );
  };
  
  const handleDelete = (bundle) => {
    setBundleToDelete(bundle);
    shopify.modal.show('delete-confirmation-modal');
  };

  const handleBundleToggle = (event, bundle) => {
    // Update the state of the bundle
    const updatedBundles = bundles.map(b => 
      b.id === bundle.id ? { ...b, active: event.target.checked } : b
    );
    setBundles(updatedBundles);
    
    fetcher.submit(
      { bundleId: bundle.id, active: event.target.checked },
      {
        method: "PUT",
        action: "/app/discount/update",
      }
    );
  };

  useEffect(() => {
    setBundles(discountBundles);
  }, [discountBundles])

  useEffect(() => {
    if (fetcher.state === 'idle' && duplicatingId) {
      setDuplicatingId(null);
    }
  }, [duplicatingId, fetcher.state]);

  const renderRowActions = (bundle) => (
    <InlineStack gap="200">
      <Button icon={EditIcon} plain accessibilityLabel={`Edit discount ${bundle.id}`} />
      <Button 
        icon={DuplicateIcon} 
        plain 
        accessibilityLabel={`Duplicate discount ${bundle.id}`} 
        loading={duplicatingId === bundle.id}
        onClick={() => handleDuplicate(bundle)}
      />
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
                  <tr id={bundle.id} key={bundle.id} position={index} className={styles.discounts_table_row}>
                    <td className={styles.colSorticon}>
                      <Icon source={SortIcon} color="subdued" />
                    </td>
                    <td className={styles.colPriority}>
                      <Text variation="strong">{bundle.priority}</Text>
                    </td>
                    <td className={styles.colBundleName}>
                      <Text>{bundle.name}</Text>
                    </td>
                    <td className={styles.colBundleTyoe}>
                      { bundle.type === 'volume_bundle' ? 'Volume bundle' : 'Bulk pricing' }
                    </td>
                    <td className={styles.colAppliedTo}>
                      {getApplyToText(bundle)}
                    </td>
                    <td className={styles.colStatus}>
                      <div className={styles.toggle}>
                        <input 
                          type="checkbox" 
                          id={`switch-${bundle.id}`}
                          name={`preview-${bundle.id}`}
                          value={bundle.active}
                          checked={bundle.active}
                          onChange={(event) => handleBundleToggle(event, bundle)}
                        />
                        <label htmlFor={`switch-${bundle.id}`}>Toggle</label>
                      </div>
                    </td>
                    <td className={styles.colActions} alignment="right">
                      {renderRowActions(bundle)}
                    </td>
                  </tr>
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