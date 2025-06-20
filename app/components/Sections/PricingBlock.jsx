import {
  Button,
  BlockStack,
  InlineStack,
  Text,
  Card,
  Box,
  Bleed,
  Divider,
  Icon
} from "@shopify/polaris";
import {CheckIcon} from '@shopify/polaris-icons';
import {useState} from 'react';

export default function PricingBlock({
  plans,
  currentSubscription,
  setCurrentSubscription,
  discount,
  client,
  defaultPlans, 
  loading, 
  setLoading,
}) {
  const [pressedButtonIndex, setPressedButtonIndex] = useState(0);
  const handleBilling = async (plan, index) => {
    if (isActivePlan(plan)) return;
    setLoading(true);
    setPressedButtonIndex(index);
    
    const subscribe = await client.subscribe({
      planId: plan.id,
      discountId: discount?.id,
      returnUrl: '/app'
    });
    
    setLoading(false);

    if (subscribe.error) {
      console.error('Unable to subscribe: ', subscribe.error);
    } else if(subscribe?.confirmationUrl) {
      open(subscribe.confirmationUrl, "_top");
    } else if(subscribe.active) {
      setCurrentSubscription(subscribe)
    }
  }

  const isActivePlan = (plan) => {
    if (!currentSubscription && (plan.name === 'Free' || plan.name === 'Starter')) return true;
    return plan?.id === currentSubscription?.plan?.id;
  }

  const getPlan = (plan) => {
    return defaultPlans.find(thePlan => thePlan.name === plan.name);
  }

  return (
    <BlockStack gap={600}>
      <BlockStack>
        <InlineStack align="space-between">
          <Text variant="headingLg" as="h4">Choose your plan</Text>
        </InlineStack>
      </BlockStack>

      <div className="pricing_blocks_wrapper">
        {plans.map((plan, index) => (
          <div className="pricing_block_item" key={index}>
            <Card padding={0}>
              <Bleed marginInline="400">
                <div className="pricing_card_bleed">
                  <Text variant="headingLg" alignment="center">{plan?.name}</Text>
                </div>
              </Bleed>
              <Box className="pricing_card_inner">
                <BlockStack gap={600}>
                  <BlockStack gap={500}>
                    <div className="pricing_amount">
                      <span className="pricing_value">${plan?.amount}</span>
                      <span className="pricing_duration">/ per month</span>
                    </div>
                    <Button 
                      variant="primary"
                      onClick={() => handleBilling(plan, index)}
                      loading={loading && index === pressedButtonIndex}
                      tone={isActivePlan(plan) ? 'success' : 'primary'}
                    >
                      { isActivePlan(plan) ? 'Currently subscribed' : 'Select this plan' }
                    </Button>
                  </BlockStack>
                  <Divider />
                  <BlockStack gap="200" align="start">
                    <ul className="pricing_features">
                      { getPlan(plan).features.map((feature, featureIndex) => {
                        return (
                          <li key={featureIndex}>
                            <Icon
                              source={CheckIcon}
                              tone="success"
                            />    
                            <p dangerouslySetInnerHTML={{ __html: feature }}></p>
                          </li>
                        )
                      })}
                    </ul>
                  </BlockStack>
                </BlockStack>
              </Box>
            </Card>
          </div>
        ))}
      </div>
    </BlockStack>
  );
}