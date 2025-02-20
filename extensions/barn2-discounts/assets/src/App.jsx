import { useEffect, useState } from "react";

import DiscountBundle from './DiscountBundle'

export default function App() {
  const [currentProductId, setCurrentProductId] = useState(window?.ShopifyAnalytics?.meta?.product?.id);
  const [eligibleBundleDiscount, setEligibleBundleDiscount] = useState(null);

  const fetchEligibleBundleDiscount = async (productId) => {
    try {
      const response = await fetch(`/apps/barn2-quanti/discountbundle?productId=${productId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching discount bundle:', error);
      return null;
    }
  };

  useEffect(() => {
    // Fetch eligible bundle discount data
    if (currentProductId) {
      fetchEligibleBundleDiscount(currentProductId)
        .then(data => {
          setEligibleBundleDiscount(data);
          console.log(data);
        });
    }
  }, []);

  return (
    <DiscountBundle bundleData={eligibleBundleDiscount}/>
  )
}