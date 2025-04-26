import {
  Button,
  BlockStack,
  InlineStack,
  Text,
  ButtonGroup,
  Card,
  Layout,
  Bleed,
  Divider,
  Icon
} from "@shopify/polaris";
import {CheckIcon} from '@shopify/polaris-icons';
import {useState} from 'react';

export default function PricingBlock({
  currentSubscription, 
  defaultPlans, 
  fetcher, 
  appUrl, 
  loading, 
  setLoading
}) {
  const [pressedButtonIndex, setPressedButtonIndex] = useState(0);

  const [subscriptionType, setSubscriptionType] = useState('monthly');

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
        billingAmount: plan.price[subscriptionType],
        billingInterval: subscriptionType,
        returnUrl: `${appUrl}/billing/charge`
      },
      {
        method: 'POST',
        action: '/app/subscription/create'
      }
    )
  }

  const isActivePlan = (plan) => {
    if (currentSubscription && currentSubscription?.active && currentSubscription?.plan === plan.name) {
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
              pressed={subscriptionType === 'yearly'}
              onClick={() => handleButtonClick('yearly')}
            >
              Yearly
            </Button>
          </ButtonGroup>
        </InlineStack>
      </BlockStack>

      <Layout>
        {defaultPlans.map((plan, index) => (
          <Layout.Section variant="oneThird" key={index}>
            <Card padding={0}>
              <Bleed marginInline="400">
                <div className="pricing_card_bleed">
                  <Text variant="headingLg" alignment="center">{plan.name}</Text>
                </div>
              </Bleed>
              <div className="pricing_card_inner">
                <BlockStack gap={600}>
                  <BlockStack gap={500}>
                    <InlineStack align="center" blockAlign="end" gap={100} className="pricing_amount">
                      <Text 
                        as="p" 
                        fontWeight="semibold" 
                        variant="heading2xl"
                      >
                        ${plan.price[subscriptionType]}
                      </Text>

                      <Text 
                        as="span" 
                        fontWeight="regular" 
                        variant="headingXs" 
                        tone="subdued"
                      >
                        { subscriptionType === 'monthly' ? '/per month' : '/per annum'}
                      </Text>
                    </InlineStack>
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
              </div>
            </Card>
          </Layout.Section>
        ))}
      </Layout>
    </BlockStack>
  );
}