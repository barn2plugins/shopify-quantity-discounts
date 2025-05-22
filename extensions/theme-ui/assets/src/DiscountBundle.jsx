import { useEffect, useState } from "react";

import VolumeBundle from "./components/VolumeBundle";
import BulkPricing from "./components/BulkPricing";

import { setCustomDesignStyles } from './utils'

export default function DiscountBundle({bundleData, isInEditor, storeDetails}) {
  const [currentVariant, setCurrentVariant] = useState(null);
  const [productCartAddedEvent, setProductCartAddedEvent] = useState(false);

   /**
   * Gets the first variant from the product's variants list
   * 
   * @returns {Object|number} Returns the first variant object if variants exist, otherwise returns 0
   * @description Uses Shopify Analytics data to get product variants. Falls back to 0 if no variants are found
   */
  const getFirstVariant = () => {
    const variants = window.b2ProductData?.product?.variants || [];
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
    const variants = window.b2ProductData?.product?.variants || [];
    const currentVariant = variants.find(v => v.id === Number(variantId));

    if (currentVariant) {
      setCurrentVariant(currentVariant);
    }
  }

  const hideQuantityPicker = () => {
    const quantityInput = document.querySelector('.product-form__input.product-form__quantity, quantity-selector-component.quantity-selector');
    if (quantityInput) {
      quantityInput.style.display = 'none';
    }
  }

  const hideVariantSelector = () => {
    const variantSelector = document.querySelector('.product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects, .product__info-wrapper variant-radios');

    if (variantSelector) {
      variantSelector.style.display = 'none';
    }
  }

  /**
   * Initializes and manages product variant selection and form observation.
   * Sets up MutationObserver to track changes in the product form and URL parameters.
   * 
   * @returns {void}
   */
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
    
    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      observer.disconnect();
    };

  }, []);

  /**
   * Observes the cart form submission process and updates the component state accordingly.
   * Uses MutationObserver to track the form's loading state changes during product addition to cart.
   * 
   * @returns {void}
   */
  useEffect(() => {
    const cartFormObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const form = mutation.target.closest('form[action*="/cart/add"]');
        if (!form) return;

        // Check if the form submission completed
        if (
          mutation.type === "attributes" && 
          mutation.attributeName === "class" && 
          !mutation.target.classList.contains('loading') && 
          mutation.oldValue?.includes('loading')
        ) {
          setProductCartAddedEvent(true);
        }
      });
    });

    const cartForm = document.querySelector('form[action*="/cart/add"] button[type="submit"]');
    if (cartForm) {
      cartFormObserver.observe(cartForm, { 
        attributes: true, 
        attributeOldValue: true 
      });
    }

     // Cleanup function to disconnect the observer when component unmounts
     return () => {
      cartFormObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setCustomDesignStyles(bundleData);

    // Hide quantity picker
    if (bundleData.type === 'volume_bundle') {
      hideQuantityPicker();
      hideVariantSelector();
    }
  }, [])

  if ( currentVariant === null ) {
    return;
  }

  if (currentVariant !== null && bundleData.type === 'volume_bundle') {
    return (
      <VolumeBundle 
        bundleData={bundleData}
        isInEditor={isInEditor} 
        currentVariant={currentVariant} 
        storeDetails={storeDetails}
        productCartAddedEvent={productCartAddedEvent}
      />
    )
  }

  if (currentVariant!== null && bundleData.type === 'bulk_pricing' && bundleData.previewEnabled === true ) {
    return (
      <BulkPricing
        bundleData={bundleData}
        isInEditor={isInEditor}
        currentVariant={currentVariant}
        storeDetails={storeDetails}
      />
    )
  }
}