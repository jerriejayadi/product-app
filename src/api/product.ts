import { BASE_URL, PRODUCTS_PER_PAGE } from "@/constants";

export interface Product {
  sku: string;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  availabilityStatus: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductResponse {
  products: Product[];
  total: number;
  limit: number;
  skip: number;
}

export async function fetchProducts(skip = 0): Promise<ProductResponse> {
  const response = await fetch(
    `${BASE_URL}/products?skip=${skip}&limit=${PRODUCTS_PER_PAGE}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function searchProducts(
  query: string,
  skip = 0
): Promise<ProductResponse> {
  const response = await fetch(
    `${BASE_URL}/products/search?q=${encodeURIComponent(
      query
    )}&skip=${skip}&limit=${PRODUCTS_PER_PAGE}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
