// External libraries and components
import {
  Button,
  Text,
  BlockStack,
  Box
} from "@shopify/polaris";
import { useState, useEffect } from "react";
import {Modal, TitleBar, useAppBridge} from '@shopify/app-bridge-react';

export default function AppBlockEmbedPopup({fetcher, bundlesDiscountsExtensionId}) {
  const [editorOpened, setEditorOpened] = useState(false);
  const shopify = useAppBridge();

  const activateWidgetUrl = () => {
    const handle = 'barn2-bundles-app-embed';
    return `shopify:admin/themes/current/editor?context=apps&template=product&activateAppId=${bundlesDiscountsExtensionId}/${handle}&target=mainSection`;
  }

  const handleClose = () => {
    setEditorOpened(false);
    fetcher.submit(
      {
        intent: 'closeAppEmbedPopup'
      },
      { 
        method: "POST"
      }
    );
  }

  const handleAction = () => {
    setEditorOpened(true);
    window.open(activateWidgetUrl(), '_blank');
  }

  useEffect(() => {
    setTimeout(() => {
      shopify.modal.show('app-embed-popup-modal');
    }, 0);
  }, [])
  return (
    <Modal id="app-embed-popup-modal" variant="small" onHide={() => handleClose()} >
      <TitleBar title="Discount Created!"/>
      <Box style={{ padding: '20px' }}>
        <BlockStack gap={500}>
          <Text variant="bodyMd" as="p">You've successfully created your first discount.</Text>
          <Text variant="bodyMd" as="p">To show it on your store, just activate the 'Barn2 Bundles & Discounts' widget in your theme.</Text>
          <Text variant="headingSm" as="h4">👉 Click below to open your theme editor, then hit Save. That's it!</Text>
          <BlockStack gap={200}>
            <Button variant="primary" onClick={() => handleAction()}>Open theme editor</Button>
            {editorOpened && <Button onClick={() => handleClose()}>I have done it</Button>}
          </BlockStack>
        </BlockStack>
      </Box>
    </Modal>
  )
}