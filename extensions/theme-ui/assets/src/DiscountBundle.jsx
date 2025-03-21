import { useEffect, useState } from "react";

import { currencyCodeToSymbol } from './utils'
import VolumeBundle from "./components/VolumeBundle";
import BulkPricing from "./components/BulkPricing";

export default function DiscountBundle({bundleData, isInEditor, storeDetails}) {
  const [currentVariant, setCurrentVariant] = useState(null);
  const [storeCurrency, setStoreCurrency] = useState('$');

   /**
   * Gets the first variant from the product's variants list
   * 
   * @returns {Object|number} Returns the first variant object if variants exist, otherwise returns 0
   * @description Uses Shopify Analytics data to get product variants. Falls back to 0 if no variants are found
   */
  const getFirstVariant = () => {
    const variants = window?.ShopifyAnalytics?.meta?.product?.variants || [];
    if (variants.length > 0) {
      return variants[0];
    }
    return 0;
  };

  /**
   * Sets the current variant based on a variant ID
   * 
   * @param {string|number} variantId - The ID of the product variant to set
   * @returns {void}
   */
  const setCurrentVariantById = (variantId) => {
    const variants = window?.ShopifyAnalytics?.meta?.product?.variants || [];
    const currentVariant = variants.find(v => v.id === Number(variantId));

    if (currentVariant) {
      setCurrentVariant(currentVariant);
    }
  }

  const hideQuantityPicker = () => {
    const quantityInput = document.querySelector('.product-form__input.product-form__quantity');
    if (quantityInput) {
      quantityInput.style.display = 'none';
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const variantId = urlParams.get("variant");

    if (variantId) {
      setCurrentVariantById(variantId);
    } else {
      setCurrentVariant(getFirstVariant());
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
          if (mutation.type === "attributes" || mutation.type === "childList") {
            const urlParams = new URLSearchParams(window.location.search);
            const variantId = urlParams.get("variant");

            if (variantId) {
              setCurrentVariantById(variantId);
            }
          }
      });
    });

    const targetNode = document.querySelector("form[action*='/cart/add']");
    if (targetNode) {
        observer.observe(targetNode, { attributes: true, childList: true, subtree: true });
    }
  }, []);

  useEffect(() => {
    // Store store currency
    const storeCurrency = isInEditor ? window.b2ProductData.storeCurrency : window?.Shopify?.currency?.active;
    setStoreCurrency(currencyCodeToSymbol(storeCurrency));

    // Hide quantity picker
    if (bundleData.type === 'volume_bundle') {
      hideQuantityPicker();
    }
  }, [])

  if ( currentVariant === null ) {
    return;
  }

  return (
    currentVariant !== null && bundleData.type === 'volume_bundle' ?
      <VolumeBundle 
        volumeBundles={JSON.parse(bundleData.volumeBundles || [])} 
        layout={bundleData.layout}
        isInEditor={isInEditor} 
        currentVariant={currentVariant} 
        storeDetails={storeDetails}
      />
      :
      <BulkPricing 
        pricingTiers={JSON.parse(bundleData.pricingTiers || [])} 
        isInEditor={isInEditor} 
        currentVariant={currentVariant} 
        storeDetails={storeDetails}
      />
  )
}