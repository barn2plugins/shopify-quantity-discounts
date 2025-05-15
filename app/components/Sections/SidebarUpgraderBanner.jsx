import {
  BlockStack,
  Card,
  Text,
  Button,
  Bleed,
} from '@shopify/polaris';
import { useNavigate } from "@remix-run/react";


export default function SidebarUpgraderBanner() {
  const navigate = useNavigate();

  const navigateToPlans = (e) => {
    e.preventDefault();
    navigate('/app/plans')
  }

  return (
    <Card padding={0}>
      <Bleed marginInline="400">
        <div className="pricing_card_bleed">
          <Text variant="headingLg" alignment="center">Upgrade needed</Text>
        </div>
      </Bleed>
      <div className="pricing_card_inner">
        <BlockStack gap={600}>
          <BlockStack gap={500}>
            <Text alignment="center">
            You're currently on our development plan, which is free while building your store. Now that your site is live, discounts will no longer appear on the front end. Please upgrade to a paid plan - all include a 14-day free trial
            </Text>
            <Button 
              variant="primary"
              onClick={(e) => navigateToPlans(e)}
            >
              Pick your plan
            </Button>
          </BlockStack>
        </BlockStack>
      </div>
    </Card>
  )
}