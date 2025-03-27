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
    <Card>
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

        {showCustomDesignOptions && (
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
             
              <Grid.Cell columnSpan={{xs: 6}}>
                <BlockStack gap={400}>
                  <BlockStack gap={100}>
                    <Text as="p" variant="bodyLg" fontWeight="medium">Cart notice background color</Text>
                    <ColorField 
                      onChange={updateDesignColorField} 
                      value={formState?.customDesigns?.cartNoticeBackgroundColor} 
                      field="cartNoticeBackgroundColor" 
                    />
                  </BlockStack>
                </BlockStack>
              </Grid.Cell>
              <Grid.Cell columnSpan={{xs: 6}}>
                <BlockStack gap={400}>
                  <BlockStack gap={100}>
                    <Text as="p" variant="bodyLg" fontWeight="medium">Cart notice text color</Text>
                    <ColorField 
                      onChange={updateDesignColorField} 
                      value={formState?.customDesigns?.cartNoticeTextColor} 
                      field="cartNoticeTextColor" 
                    />
                  </BlockStack>
                </BlockStack>
              </Grid.Cell>
         
              <Grid.Cell columnSpan={{xs: 6}}>
                <BlockStack gap={400}>
                  <BlockStack gap={100}>
                    <Text as="p" variant="bodyLg" fontWeight="medium">Badge</Text>
                    <ColorField 
                      onChange={updateDesignColorField} 
                      value={formState?.customDesigns?.badgeColor} 
                      field="badgeColor" 
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
                      selected={[formState?.customDesigns?.cornerRadius || 'square']}
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
    </Card>
  );
}