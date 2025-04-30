import {
  BlockStack,
  Banner,
  Text,
} from "@shopify/polaris";
import { useNavigate } from "@remix-run/react";

export default function SupportBlock({setDisplaySupportBanner, fetcher}) {
  const navigate = useNavigate();

  const navigateToDocs = (e) => {
    e.preventDefault();
    navigate('/app/documentation')
  }

  const hideSupportBanner = () => {
    setDisplaySupportBanner(false);
    fetcher.submit(
      {
        key: 'hide_support_banner',
        value: 'true',
      },
      {
        method: "POST",
        action: "/app/options/create",
      }
    );
  }

  return (
    <BlockStack gap={500}>
      <Text variant="headingLg" as="h4">
        Documentation and support
      </Text>
      <Banner title="Need assistance? We're here to help!" onDismiss={() => {hideSupportBanner()}}>
        <p className="documentation-notice-text">
          If you need help with support or accessing documentation, <a onClick={navigateToDocs}>click here to get started.</a>
        </p>
      </Banner>
    </BlockStack>
  )
}