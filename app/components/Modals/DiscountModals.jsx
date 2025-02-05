import ProductSelectorModal from "../../components/Modals/ProductSelectorModal.jsx";
import CollectionSelectorModal from "../../components/Modals/CollectionSelectorModal.jsx";
import ProductExclusionsModal from "../../components/Modals/ProductExclusionsModal.jsx";
import CollectionExclusionsModal from "../../components/Modals/CollectionExclusionsModal.jsx";


export default function DiscountModals({
  selectedProducts,
  setSelectedProducts,
  selectedCollections,
  setSelectedCollections,
  excludedProducts,
  setExcludedProducts,
  excludedCollections,
  setExcludedCollections,
  fetcher,
}) {

  return (
    <>
      <ProductSelectorModal
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        fetcher={fetcher}
      />
      <CollectionSelectorModal
        selectedCollections={selectedCollections}
        setSelectedCollections={setSelectedCollections}
        fetcher={fetcher}
      />
      <ProductExclusionsModal
        excludedProducts={excludedProducts}
        setExcludedProducts={setExcludedProducts}
        fetcher={fetcher}
      />
      <CollectionExclusionsModal
        excludedCollections={excludedCollections}
        setExcludedCollections={setExcludedCollections}
        fetcher={fetcher}
      />
    </>
  )
}