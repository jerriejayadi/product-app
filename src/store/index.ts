import { create } from "zustand";
import { createProductSlice } from "./slices/productSlice";
import { ProductStore } from "./types";

export const useProductStore = create<ProductStore>((...args) => ({
  ...createProductSlice(...args),
}));

export * from "./themeStore";
