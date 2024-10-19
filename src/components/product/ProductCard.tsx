import { Product } from "@/api/product";
import { useProductStore } from "@/store";
import { StarRating, WishlistButton } from "../ui";
import { LOW_STOCK_THRESHOLD } from "@/constants";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
}) => {
  const { wishlist } = useProductStore();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col"
      onClick={onClick}
    >
      <div className="relative w-full h-48 mb-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain rounded-md"
          loading="lazy"
        />
        {product.stock <= LOW_STOCK_THRESHOLD && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            {product.availabilityStatus}: {product.stock} left
          </span>
        )}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start gap-2">
          <span className="text-lg font-semibold line-clamp-2 min-h-14 overflow-hidden text-ellipsis dark:text-white">
            {product.title}
          </span>
          <WishlistButton
            isWishlisted={isWishlisted}
            productId={product.id}
            small
          />
        </div>
        <p className="text-gray-600 text-sm dark:text-gray-400 capitalize">
          {product.category}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-600 dark:text-gray-300">
              ${product.price}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-sm text-green-700 dark:text-green-400">
                -{product.discountPercentage}%
              </span>
            )}
          </div>

          <div className="flex items-center">
            <StarRating rating={product.rating} small />
            <span className="ml-1 text-sm dark:text-white">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
