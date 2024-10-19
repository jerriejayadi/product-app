export const getWishlistFromStorage = (): number[] => {
  return JSON.parse(localStorage.getItem("wishlist") || "[]");
};

export const setWishlistToStorage = (wishlist: number[]): void => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const getThemeFromStorage = (): string => {
  return localStorage.getItem("theme") || "light";
};

export const setThemeToStorage = (theme: string): void => {
  localStorage.setItem("theme", theme);
};
