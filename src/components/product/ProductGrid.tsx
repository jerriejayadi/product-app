import { useProductStore } from "@/store";
import { ProductCard } from "./ProductCard";
import { ChevronDown } from "lucide-react";
import { SearchBar, LoadingSpinner, PrimaryButton } from "../ui";
import { Product } from "@/api/product";

export const ProductGrid: React.FC = () => {
  const {
    loading,
    products,
    searchQuery,
    setSelectedProduct,
    hasMore,
    loadMoreProducts,
  } = useProductStore();

  const handleLoadMore = async () => {
    await loadMoreProducts();
  };

  return (
    <div>
      <SearchBar />

      {loading ? (
        <LoadingSpinner />
      ) : products.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold text-gray-600">
            No products match your search for "{searchQuery}"
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <ProductCard
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            </div>
          ))}
        </div>
      )}

      {!loading && hasMore && (
        <div className="mt-8 text-center">
          <PrimaryButton
            icon={<ChevronDown className="h-5 w-5" />}
            text="Load More"
            onClick={handleLoadMore}
          />
        </div>
      )}
    </div>
  );
};
