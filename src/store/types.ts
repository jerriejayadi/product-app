import { Product } from "@/api/product";

export interface ProductState {
  products: Product[];
  loading: boolean;
  searchQuery: string;
  wishlist: number[];
  selectedProduct: Product | null;
  page: number;
  hasMore: boolean;
}

export interface ProductActions {
  setProducts: (products: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setSelectedProduct: (product: Product | null) => void;
  toggleWishlist: (productId: number) => void;
  setSearchQuery: (query: string) => void;
  fetchProducts: () => Promise<void>;
  setPage: (page: number) => void;
  loadMoreProducts: () => Promise<void>;
}

export type ProductStore = ProductState & ProductActions;

export interface ThemeStore {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
