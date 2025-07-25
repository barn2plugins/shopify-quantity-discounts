import { 
  BlockStack,
  Text,
  ChoiceList,
  Card,
  Grid
} from "@shopify/polaris";
import { useState, useEffect } from "react";

// Internal components and libraries
import ColorField from "../Fields/ColorField";

export default function DesignOptions({ formState, setFormState }) {
  const [ showCustomDesignOptions, setShowCustomDesignOptions ] = useState(false);

  useEffect(() => {
    if (formState.designOptions === 'custom_design') {
      setShowCustomDesignOptions(true);
    }
  }, []);


  const updateDesignColorField = (value) => {
    setFormState(prev => ({
      ...prev,
      customDesigns: {
        ...prev.customDesigns,
        [value.field]: value.color
      }
    }));
  };

  return (
    <BlockStack gap={500}>
      <BlockStack gap={300}>
        <Text as="p" variant="bodyLg" fontWeight="medium">Design</Text>
        <ChoiceList
          choices={[
            {label: 'Theme default', value: 'theme_default'},
            {label: 'Custom', value: 'custom_design'},
          ]}
          selected={[formState.designOptions]}
          onChange={(value) => {
            setFormState({...formState, designOptions: value[0]});
            setShowCustomDesignOptions(value[0] === 'custom_design');
          }}
        />
      </BlockStack>

      { showCustomDesignOptions && formState?.type === 'volume_bundle' &&
        <>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Text color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.bundleTextColor} 
                    field="bundleTextColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Highlighted text color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.highlightedTextColor} 
                    field="highlightedTextColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Border color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.bundleBorderColor} 
                    field="bundleBorderColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Highlighted border color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.highlightedBorderColor} 
                    field="highlightedBorderColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Highlighted background color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.highlightedColor} 
                    field="highlightedColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
 
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Selected border color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.selectedBorderColor} 
                    field="selectedBorderColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Selected background color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.selectedColor} 
                    field="selectedColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Badge background color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.badgeBackgroundColor || '#1a1a1a'} 
                    field="badgeBackgroundColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Badge text color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.badgeTextColor || '#ffffff'} 
                    field="badgeTextColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
          </Grid>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Corner radius</Text>
                  <ChoiceList
                    choices={[
                      {label: 'Slightly rounded', value: 'slightlyRounded'},
                      {label: 'Fully rounded', value: 'fullyRounded'},
                      {label: 'Square', value: 'square'},
                    ]}
                    selected={[formState?.customDesigns?.cornerRadius || 'fullyRounded']}
                    onChange={(value) => {
                      setFormState({...formState, customDesigns: {...formState.customDesigns, cornerRadius: value[0]}});
                    }}
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
          </Grid>
        </>
      }

      {showCustomDesignOptions && formState?.type === 'bulk_pricing' && (
        <>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Table color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.tableColor} 
                    field="tableColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Header text color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.headerTextColor} 
                    field="headerTextColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>

            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Background color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.backgroundColor} 
                    field="backgroundColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Text color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.textColor} 
                    field="textColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Label color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.labelColor} 
                    field="labelColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Label text color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.lebelTextColor} 
                    field="lebelTextColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
          </Grid>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Border color</Text>
                  <ColorField 
                    onChange={updateDesignColorField} 
                    value={formState?.customDesigns?.borderColor} 
                    field="borderColor" 
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
          </Grid>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6}}>
              <BlockStack gap={400}>
                <BlockStack gap={100}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Corner radius</Text>
                  <ChoiceList
                    choices={[
                      {label: 'Slightly rounded', value: 'slightlyRounded'},
                      {label: 'Fully rounded', value: 'fullyRounded'},
                      {label: 'Square', value: 'square'},
                    ]}
                    selected={[formState?.customDesigns?.cornerRadius || 'fullyRounded']}
                    onChange={(value) => {
                      setFormState({...formState, customDesigns: {...formState.customDesigns, cornerRadius: value[0]}});
                    }}
                  />
                </BlockStack>
              </BlockStack>
            </Grid.Cell>
          </Grid>
        </>
      )}
    </BlockStack>
  );
}