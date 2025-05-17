import {
  Page,
  Button,
  MediaCard,
  VideoThumbnail,
  LegacyCard
} from "@shopify/polaris";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }) => {

  const documentationUrl = 'https://barn2.com/kb-categories/barn2-bundles-discounts-documentation/'
  
  return {
    documentationUrl
  };
};

export default function Documentation() {
  const { documentationUrl } = useLoaderData();

  const openDocumentationPage = () => {
    window.open(documentationUrl, '_blank');
  }

  return (
    <Page
      narrowWidth
      backAction={{content: '', url: '/app'}}
      title="Documentation"
      primaryAction={<Button variant="primary" onClick={openDocumentationPage} >View documentation</Button>}
    >
      <div className="barn2-page-inner documentation-page-video">
        <div className="iframe-wrapper">
          <iframe src="https://www.youtube.com/embed/PtrctzSG7so?si=iJe_gBSTfZh-cR3Z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </Page>
  );
}