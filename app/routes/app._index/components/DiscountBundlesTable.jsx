import {
  Layout,
  Text,
  BlockStack,
  Button,
  InlineStack,
  LegacyCard,
  Pagination
} from "@shopify/polaris";
import {EditIcon, DuplicateIcon, DeleteIcon} from '@shopify/polaris-icons';
import {useState, useEffect} from "react";
import {useAppBridge} from "@shopify/app-bridge-react";
import {useFetcher} from "@remix-run/react";

import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import DeleteConfirmationModal from "../../../components/Modals/DeleteConfirmationModal";
import IndexTable from "../../../components/Fields/IndexTable";
import SortableRow from "./SortableRow";

export default function DiscountBundlesTable({ fetcher, discountBundles, pagination }) {
  const shopify = useAppBridge();
  const [bundleToDelete, setBundleToDelete] = useState({});
  const [bundles, setBundles] = useState([]);
  const [duplicatingId, setDuplicatingId] = useState(null);

  /**
   * Handles the duplication of a discount bundle.
   * Sets the duplicating state for loading indicator and submits the duplication request to the 'app/discount/duplicate' route
   * 
   * @param {Object} bundle - The discount bundle to duplicate
   * @param {number} bundle.id - The unique identifier of the bundle
   *
   */
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

  /**
   * Handles the toggle state of a discount bundle's active status.
   * Updates the local state immediately and submits the change to the server.
   * 
   * @param {Event} event - The change event from the toggle input
   * @param {Object} bundle - The discount bundle to update
   * @param {number} bundle.id - The unique identifier of the bundle
   * @param {boolean} bundle.active - The current active state of the bundle
   */
  const handleBundleToggle = (event, bundle) => {
    // Update the state of the bundle
    const updatedBundles = bundles.map(b => 
      b.id === bundle.id ? { ...b, active: event.target.checked } : b
    );
    setBundles(updatedBundles);
    
    fetcher.submit(
      { bundleId: bundle.id, active: event.target.checked, shopifyDiscountId: bundle.shopifyDiscountId },
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
      <Button 
        icon={EditIcon} 
        plain 
        accessibilityLabel={`Edit discount ${bundle.id}`} 
        url={`/app/discount/${bundle.shopifyDiscountId.split('/').pop()}/edit`}
      />
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

  const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	/**
	 * Sort items in the state after dragging is complete.
	 *
	 * @param {object} event - The drag end event
	 */
	const handleDragEnd = (event) => {
		const { active, over } = event;

		if (active.id !== over.id) {
			setBundles((items) => {
				const oldIndex = items.map(e => e.id).indexOf(active.id)
				const newIndex = items.map(e => e.id).indexOf(over.id);
				const reorderedItems = arrayMove(items, oldIndex, newIndex);

				// Update priorities based on new order
				const updatedBundles = reorderedItems.map((bundle, index) => ({
					...bundle,
					priority: reorderedItems.length - index // Reverse the index since higher priority should be at top
				}));

        // Send the updated priorities to the server
				fetcher.submit(
					{ 
						priorities: JSON.stringify(updatedBundles.map(b => ({ 
							id: b.id, 
							priority: b.priority 
						})))
					},
					{
						method: "PUT",
						action: "/app/discount/update-bundle-priorities",
					}
				);

        return updatedBundles;
			});
		}
	}

  /**
   * Handles pagination changes by submitting a request to fetch the next/previous page of discount bundles
   * 
   * @param {number} page - The target page number to fetch
   * @param {number} limit - Number of items per page
   * @returns {void}
   */
  const handlePageChange = (page, limit) => {
    fetcher.submit(
      { page, limit, action: 'paginateBundlesData' },
      {
        method: "POST",
      }
    );
  };

  return (
    <>
      <Layout>
        <Layout.Section>
          <BlockStack gap={500}>
            <InlineStack align="space-between">
              <Text variant="headingLg" as="h4">
                Discount
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
                  {title: 'Actions', alignment: 'left'},
                ]}
                selectable={false}
              >
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={bundles}
                    strategy={verticalListSortingStrategy}
                  >
                    {bundles.map(
                      (bundle, index) => 
                        <SortableRow
                          bundle={bundle}
                          index={index}
                          renderRowActions={renderRowActions}
                          handleBundleToggle={handleBundleToggle}
                        />
                      )
                    }
                  </SortableContext>
                </DndContext>
              </IndexTable>
            </LegacyCard>
            <InlineStack align="center" fullWidth>
              <Pagination
                onPrevious={() => handlePageChange(pagination.page - 1, pagination.limit)}
                onNext={() => handlePageChange(pagination.page + 1, pagination.limit)}
                hasPrevious={pagination.page > 1}
                hasNext={pagination.page < pagination.totalPages}
                label={`${((pagination.page - 1) * pagination.limit) + 1}-${Math.min(pagination.page * pagination.limit, pagination.total)} of ${pagination.total} discounts`}
              />
            </InlineStack>
          </BlockStack>
        </Layout.Section>
      </Layout>

      <DeleteConfirmationModal bundleToDelete={bundleToDelete} fetcher={fetcher} />
    </>
  )
}