import { useEffect, useState } from "react";

import DiscountBundle from './DiscountBundle'

export default function App() {
  const [currentProductId, setCurrentProductId] = useState(window?.ShopifyAnalytics?.meta?.product?.id);
  const [eligibleBundleDiscount, setEligibleBundleDiscount] = useState(null);
  const [isInEditor, setIsInEditor] = useState(false);

  const fetchEligibleBundleDiscount = async (productId) => {
    try {
      const response = await fetch(`/apps/barn2-discounts/discountbundle?productId=${productId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching discount bundle:', error);
      return null;
    }
  };

  useEffect(() => {
    const checkEditorStatus = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const previewPath = urlParams.get('previewPath');
      setIsInEditor(previewPath && previewPath.startsWith('/products/'));
    };

    checkEditorStatus();
    // Optional: Listen for URL changes in the theme editor
    window.addEventListener('popstate', checkEditorStatus);
    return () => {
      window.removeEventListener('popstate', checkEditorStatus);
    };
  }, []);


  useEffect(() => {
    // Create an async function inside useEffect
    const fetchData = async () => {
      try {
        const data = await fetchEligibleBundleDiscount(currentProductId);
        setEligibleBundleDiscount(data.eligibleProductBundle);
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    };

    // Call the async function
    fetchData();
  }, [currentProductId, isInEditor]);

  return (
    eligibleBundleDiscount && eligibleBundleDiscount.type == 'volume_bundle' && <DiscountBundle bundleData={eligibleBundleDiscount}/>
  )
}