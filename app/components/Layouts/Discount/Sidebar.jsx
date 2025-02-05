import {
  Card,
  InlineStack,
  Text
} from '@shopify/polaris';

export default function Sidebar({
  formState,
  setFormState,
}) {
  return (
    <Card>
      <InlineStack gap={150} blockAlign="center">
        <Text as="p" variant="bodyLg" fontWeight="medium">Preview</Text>
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
      </InlineStack>
    </Card>
  )
}