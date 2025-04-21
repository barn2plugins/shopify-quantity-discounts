import {
  BlockStack,
  Banner,
  Text,
} from "@shopify/polaris";

export default function SupportBlock({setDisplaySupportBanner, fetcher}) {
  const hideSupportBanner = () => {
    setDisplaySupportBanner(false);
    fetcher.submit(
      {
        key: 'hideSupportBanner',
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
        <p>If you need help with support or accessing documentation, <a href="#">click here to get started.</a></p>
      </Banner>
    </BlockStack>
  )
}