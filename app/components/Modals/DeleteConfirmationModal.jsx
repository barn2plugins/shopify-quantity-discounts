import { Box, Text } from "@shopify/polaris";
import { useEffect } from "react";
import { useAppBridge, Modal, TitleBar } from "@shopify/app-bridge-react";

export default function DeleteConfirmationModal({ bundleToDelete, fetcher }) {
  const shopify = useAppBridge();
  const deleteBundleRe = fetcher.data?.deleteBundle;

  const confirmDelete = () => {
    shopify.modal.hide('delete-confirmation-modal');

    fetcher.submit(
      { id: bundleToDelete.id, shopifyDiscountId: bundleToDelete.shopifyDiscountId },
      { 
        method: "DELETE", 
        action: "/app/discount/delete",
      }
    );
  };

  useEffect(() => {
    if ( deleteBundleRe ) {
      shopify.toast.show("Discount bundle has been deleted");
    }
  }, [deleteBundleRe, shopify]);

  return (
    <Modal
      id="delete-confirmation-modal" 
      variant="small"
    >
      <TitleBar title="Delete Confirmation">
        <button variant="primary" tone="critical" onClick={confirmDelete}>Delete</button>
        <button onClick={() => shopify.modal.hide('delete-confirmation-modal')}>Cancel</button>
      </TitleBar>
      <Box style={{ padding: '30px 12px' }}>
        <Text as="p">
          Confirm to delete discount bundle "<Text as="span" tone="critical" fontWeight="bold">{bundleToDelete.name}</Text>"?
        </Text>
      </Box>
    </Modal>
  )
}