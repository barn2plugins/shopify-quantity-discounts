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
          <Text variant="headingLg" alignment="center">Choose your plan</Text>
        </div>
      </Bleed>
      <div className="pricing_card_inner">
        <BlockStack gap={600}>
          <BlockStack gap={500}>
            <Text alignment="center">
              Your website is now live! To activate your discounts, simply choose one of our plans. Starting at just $9.99.
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