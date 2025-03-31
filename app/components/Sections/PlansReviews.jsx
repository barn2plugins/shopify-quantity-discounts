import {
  BlockStack,
  Card,
  Icon,
  InlineStack,
  Layout,
  Text,
} from '@shopify/polaris';
import { StarFilledIcon} from '@shopify/polaris-icons';

export default function PlansReviews({reviews}) {
  return (
    <BlockStack gap={600}>
      <BlockStack>
        <InlineStack align="space-between">
          <Text variant="headingLg" as="h4">What our customers say</Text>
        </InlineStack>
      </BlockStack>

      <Layout>
        {reviews.map((review, index) => (
          <Layout.Section variant="oneHalf" key={index}>
            <Card padding={40}>
              <div className="reviews_card_inside">
                <BlockStack gap={600}>
                  <BlockStack gap={200}>
                    <div className="review_icons">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          source={StarFilledIcon}
                        />
                      ))}
                    </div>
                    <p className="review_title">{review.title}</p>
                  </BlockStack>
                  <Text as="p">{review.description}</Text>
                  <Text as="p">{review.user.name} | {review.user.location}</Text>
                </BlockStack>
              </div>
            </Card>
          </Layout.Section>
        ))}
      </Layout>
    </BlockStack>
  );
}