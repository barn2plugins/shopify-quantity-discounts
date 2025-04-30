// External libraries and components
import {
  Banner,
} from "@shopify/polaris";

export default function AppBlockEmbed({bundlesDiscountsExtensionId}) {
  const activateWidgetUrl = () => {
    const handle = 'barn2-bundles-app-embed';
    return `shopify:admin/themes/current/editor?context=apps&template=product&activateAppId=${bundlesDiscountsExtensionId}/${handle}&target=mainSection`;
  }

  return (
    <Banner
      title="Barn2 Bundles and Bulk Discounts widget is not active in your theme"
      tone="warning"
      action={{content: 'Activate widget', url: activateWidgetUrl(), target: '_blank'}}
    >
      <p>
        Activate the widget by clicking the "Activate" button below and clicking 'Save' on the next page.
      </p>
    </Banner>
  )
}