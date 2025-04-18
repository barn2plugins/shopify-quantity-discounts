import {
  InlineStack,
  BlockStack,
  Text
} from '@shopify/polaris';

export default function PreviewToggle({ formState, setFormState }) {
  return (
    <BlockStack gap={150}>
      <Text as="p" variant="bodyLg" fontWeight="medium">Preview</Text>
      <InlineStack gap={200} align="space-between">
        { formState?.type === 'bulk_pricing' && (
          <>
            <Text as="p">Display discount details on product page</Text>
            <div className="toggle-switcher">
              <input 
                type="checkbox" 
                id="switch" 
                name="previewEnabled" 
                value={formState.previewEnabled}
                checked={formState.previewEnabled}
                onChange={(event) => {
                  setFormState({...formState, previewEnabled: event.target.checked})
                }}
              />
              <label htmlFor="switch">Toggle</label>
            </div>
          </>
        )}
      </InlineStack>
    </BlockStack>
  );
}