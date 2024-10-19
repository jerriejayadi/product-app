import { Product } from "@/api/product";
import { useProductStore } from "@/store";
import { WishlistButton, StarRating } from "../ui";
import { LOW_STOCK_THRESHOLD } from "@/constants";

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { wishlist, toggleWishlist } = useProductStore();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-contain rounded-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                className="w-full h-20 object-contain rounded"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-start gap-2">
            <h1 className="text-2xl font-bold dark:text-white">
              {product.title}
            </h1>
            <WishlistButton
              isWishlisted={isWishlisted}
              productId={product.id}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold  text-gray-600 dark:text-gray-300">
                ${product.price}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-lg text-green-700 dark:text-green-400">
                  -{product.discountPercentage}%
                </span>
              )}
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <StarRating rating={product.rating} />
                <span className="ml-1 dark:text-white">
                  {product.rating !== 0 ? product.rating : "No Reviews"}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold dark:text-white">
                Availability:
              </span>
              <span
                className={
                  product.stock <= LOW_STOCK_THRESHOLD
                    ? "text-red-500 dark:text-red-400 font-medium"
                    : "text-green-700 dark:text-green-400 font-medium"
                }
              >
                {product.availabilityStatus}
              </span>
            </div>

            <span className="text-sm text-gray-600 dark:text-gray-300">
              {product.stock === 0 ? (
                "Oops! This product is currently out of stock. Check back soon!"
              ) : product.stock <= LOW_STOCK_THRESHOLD ? (
                <>
                  Hurry up! only{" "}
                  <span className="font-semibold">{product.stock}</span> product
                  {product.stock > 1 ? "s" : ""} left in stock!
                </>
              ) : (
                <>
                  <span className="font-semibold">{product.stock}</span> items
                  in stock! Grab yours today!
                </>
              )}
            </span>

            <hr />

            <div className="flex items-center gap-2">
              <span className="dark:text-white font-semibold">Quantity:</span>
              <input
                type="number"
                min="1"
                max={product.stock}
                defaultValue="1"
                className="w-16 py-1 px-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="flex gap-3 my-5">
              <button className="bg-blue-600 dark:bg-blue-400 dark:text-gray-800 text-white font-semibold py-2 rounded-full w-full flex items-center justify-center gap-2">
                Buy Now
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`${
                  isWishlisted ? "bg-gray-500" : "bg-red-600 dark:bg-red-500"
                } text-white font-semibold py-2 rounded-full w-full flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out`}
              >
                {isWishlisted ? <>Wishlisted</> : <>Add to Wishlist</>}
              </button>
            </div>

            <hr />
            <div className="flex justify-between">
              <span className="dark:text-white font-semibold">SKU:</span>
              <span className="dark:text-white">{product.sku}</span>
            </div>
            <div className="flex justify-between">
              <span className="dark:text-white font-semibold">Category:</span>
              <span className="dark:text-white capitalize">
                {product.category}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="dark:text-white font-semibold">Brand:</span>
              <span className="dark:text-white">
                {product.brand ? product.brand : "-"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold dark:text-white">Description</h2>
        <p className="text-gray-600 dark:text-gray-300">
          {product.description}
        </p>
      </div>
    </div>
  );
};
