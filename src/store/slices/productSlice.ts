import { StateCreator } from "zustand";
import { PRODUCTS_PER_PAGE } from "@/constants";
import { fetchProducts, searchProducts } from "@/api/product";
import { ProductState, ProductStore } from "../types";
import {
  getWishlistFromStorage,
  setWishlistToStorage,
  debounce,
} from "@/utils";

const initialState: ProductState = {
  products: [],
  loading: false,
  searchQuery: "",
  wishlist: getWishlistFromStorage(),
  selectedProduct: null,
  page: 1,
  hasMore: false,
};

export const createProductSlice: StateCreator<ProductStore> = (set, get) => {
  const debouncedSearch = debounce(async (query: string) => {
    set({ loading: true });

    try {
      if (query.trim() === "") {
        await get().fetchProducts();
        return;
      }

      const data = await searchProducts(query);
      set({
        products: data.products,
        hasMore: data.products.length === PRODUCTS_PER_PAGE,
      });
    } catch (error) {
      console.error("Error searching products:", error);
    } finally {
      set({ loading: false });
    }
  }, 500);

  return {
    ...initialState,

    setProducts: (products) => set({ products }),
    setLoading: (loading) => set({ loading }),
    setSelectedProduct: (product) => set({ selectedProduct: product }),

    toggleWishlist: (productId) => {
      const newWishlist = get().wishlist.includes(productId)
        ? get().wishlist.filter((id) => id !== productId)
        : [...get().wishlist, productId];

      setWishlistToStorage(newWishlist);
      set({ wishlist: newWishlist });
    },

    setSearchQuery: (query) => {
      set({ searchQuery: query, page: 1 });
      debouncedSearch(query);
    },

    fetchProducts: async () => {
      set({ loading: true });
      try {
        const data = await fetchProducts();
        set({
          products: data.products,
          hasMore: data.products.length === PRODUCTS_PER_PAGE,
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        set({ loading: false });
      }
    },

    setPage: (page) => set({ page }),

    loadMoreProducts: async () => {
      const { page, searchQuery } = get();
      const skip = page * PRODUCTS_PER_PAGE;

      try {
        const data = searchQuery
          ? await searchProducts(searchQuery, skip)
          : await fetchProducts(skip);

        set((state) => ({
          products: [...state.products, ...data.products],
          page: state.page + 1,
          hasMore: data.products.length === PRODUCTS_PER_PAGE,
        }));

        console.log(data.products.length, PRODUCTS_PER_PAGE);
      } catch (error) {
        console.error("Error loading more products:", error);
      }
    },
  };
};
