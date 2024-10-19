import { useProductStore } from "@/store";
import { Heart, HeartOff } from "lucide-react";

interface WishlistButtonProps {
  small?: boolean;
  productId: number;
  isWishlisted: boolean;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({
  small = false,
  isWishlisted,
  productId,
}) => {
  const { toggleWishlist } = useProductStore();

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(productId);
  };

  const iconSize = small ? "w-5 h-5" : "w-6 h-6";

  return (
    <button
      onClick={handleWishlistClick}
      className={`text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500 ${
        small ? "p-1" : "p-2"
      }`}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isWishlisted ? (
        <Heart className={`${iconSize} fill-current`} />
      ) : (
        <HeartOff className={iconSize} />
      )}
    </button>
  );
};
