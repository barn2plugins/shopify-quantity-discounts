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
              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 4}}>
                <BlockStack gap={400}>
                  <BlockStack gap={100}>
                    <Text>Background color</Text>
                    <ColorField 
                      onChange={updateDesignColorField} 
                      value={formState?.customDesigns?.backgroundColor} 
                      field="backgroundColor" 
                    />
                  </BlockStack>
                  <BlockStack gap={100}>
                    <Text>Selected background color</Text>
                    <ColorField 
                      onChange={updateDesignColorField} 
                      value={formState?.customDesigns?.selectedBackgroundColor} 
                      field="selectedBackgroundColor"
                    />
                  </BlockStack>
                  <BlockStack gap={100}>
                    <Text>Badge color</Text>
                    <ColorField 
                      onChange={updateDesignColorField} 
                      value={formState?.customDesigns?.badgeColor} 
                      field="badgeColor"
                    />
                  </BlockStack>
                </BlockStack>
              </Grid.Cell>
              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 4}}>
                <BlockStack gap={400}>
                  <BlockStack gap={100}>
                    <Text>Label color</Text>
                    <ColorField 
                      onChange={updateDesignColorField} 
                      value={formState?.customDesigns?.labelColor} 
                      field="labelColor"
                    />
                  </BlockStack>
                  <BlockStack gap={100}>
                    <Text>Text color</Text>
                    <ColorField 
                      onChange={updateDesignColorField} 
                      value={formState?.customDesigns?.textColor} 
                      field="textColor"
                    />
                  </BlockStack>
                 
                </BlockStack>
              </Grid.Cell>
              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 4}}>
                <BlockStack gap={400}>
                  <BlockStack gap={100}>
                    <Text>Cart notice background color</Text>
                    <ColorField 
                      onChange={updateDesignColorField} 
                      value={formState?.customDesigns?.cartNoticeBackground} 
                      field="cartNoticeBackground"
                    />
                  </BlockStack>
                  <BlockStack gap={100}>
                    <Text>Cart notice text color</Text>
                    <ColorField 
                      onChange={updateDesignColorField} 
                      value={formState?.customDesigns?.cartNoticeText} 
                      field="cartNoticeText"
                    />
                  </BlockStack>
                </BlockStack>
              </Grid.Cell>
            </Grid>
            <Grid>
              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 4}}>
                <BlockStack gap={400}>
                  <BlockStack gap={100}>
                    <Text>Corner radius</Text>
                    <ChoiceList
                      choices={[
                        {label: 'Square', value: 'square'},
                        {label: 'Slightly rounded', value: 'slightlyRounded'},
                        {label: 'Fully rounded', value: 'fullyRounded'}
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