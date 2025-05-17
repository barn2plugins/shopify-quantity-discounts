import {
  Button,
  BlockStack,
  InlineStack,
  Text,
  ButtonGroup,
  Card,
  Box,
  Bleed,
  Divider,
  Icon
} from "@shopify/polaris";
import {CheckIcon} from '@shopify/polaris-icons';
import {useState} from 'react';

export default function PricingBlock({
  hasActivePayment,
  currentSubscription, 
  defaultPlans, 
  fetcher, 
  loading, 
  setLoading,
  subscriptionType,
  setSubscriptionType
}) {
  const [pressedButtonIndex, setPressedButtonIndex] = useState(0);

  const handleButtonClick = (type) => {
    setSubscriptionType(type);
  }

  const handleBilling = (plan, index) => {
    if (isActivePlan(plan)) {
      return;
    }
    setLoading(true);
    setPressedButtonIndex(index);

    fetcher.submit(
      {
        billingName: plan.name,
      },
      {
        action: '/app/subscription/create'
      }
    )
  }

  const isActivePlan = (plan) => {
    // Check for free plan
    if (!currentSubscription && plan.name === 'Free') return true;

    // Check for active plan
    if (hasActivePayment && currentSubscription?.name === plan.name) {
      return true;
    }
    return false;
  }

  return (
    <BlockStack gap={600}>
      <BlockStack>
        <InlineStack align="space-between">
          <Text variant="headingLg" as="h4">Choose your plan</Text>
          <ButtonGroup variant="segmented">
            <Button
              pressed={subscriptionType === 'monthly'}
              onClick={() => handleButtonClick('monthly')}
            >
              Monthly
            </Button>
            <Button
              pressed={subscriptionType === 'annual'}
              onClick={() => handleButtonClick('annual')}
            >
              Yearly
            </Button>
          </ButtonGroup>
        </InlineStack>
      </BlockStack>

      <div className="pricing_blocks_wrapper">
        {defaultPlans.map((plan, index) => (
          <div className="pricing_block_item" key={index}>
            <Card padding={0}>
              <Bleed marginInline="400">
                <div className="pricing_card_bleed">
                  <Text variant="headingLg" alignment="center">{plan.title}</Text>
                </div>
              </Bleed>
              <Box className="pricing_card_inner">
                <BlockStack gap={600}>
                  <BlockStack gap={500}>
                    <div className="pricing_amount">
                      <span className="pricing_value">${plan.price}</span>
                      <span className="pricing_duration">{ subscriptionType === 'monthly' ? '/ per month' : '/ per annum'}</span>
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
                      { plan.features.map((feature, featureIndex) => {
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