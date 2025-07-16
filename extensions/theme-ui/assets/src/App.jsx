import { useEffect, useState } from "react";

import { unHideQuantityAndVariantBlocks } from './utils'
import DiscountBundle from './DiscountBundle'

export default function App() {
  const [currentProductId, setCurrentProductId] = useState(window?.ShopifyAnalytics?.meta?.product?.id);
  const [eligibleBundleDiscount, setEligibleBundleDiscount] = useState(null);
  const [isInEditor, setIsInEditor] = useState(window?.b2ProductData?.isDesignMode || false);
  const [storeDetails, setStoreDetails] = useState({});
  const [unHideQuantityVariantBlocks, setUnHideQuantityVariantBlocks] = useState(false);

  const fetchEligibleBundleDiscount = async (productId) => {
    try {
      const response = await fetch('/apps/barn2-bundles-bulk-dev/discountbundle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          isInEditor
        })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      setUnHideQuantityVariantBlocks(true);
      return null;
    }
  };

  useEffect(() => {
    // Create an async function inside useEffect
    const fetchData = async () => {
      try {
        const data = await fetchEligibleBundleDiscount(currentProductId);
        if ( data?.success === false ) {
          setUnHideQuantityVariantBlocks(true);
          return;
        } else {
          setEligibleBundleDiscount(data?.eligibleProductBundle);
          setStoreDetails(data?.store);
        }
      } catch (error) {
      }
    };

    // Call the async function
    fetchData();
  }, [currentProductId, isInEditor]);

  useEffect(() => {
    if (!unHideQuantityVariantBlocks) {
      return;
    }

    // Unhide the quantity input and variant select blocks
    unHideQuantityAndVariantBlocks();
    
  }, [unHideQuantityVariantBlocks]);

  return (
    eligibleBundleDiscount && 
      <DiscountBundle 
        bundleData={eligibleBundleDiscount} 
        isInEditor={isInEditor} 
        storeDetails={storeDetails} 
        unHideQuantityVariantBlocks={unHideQuantityVariantBlocks}
      />
  )
}