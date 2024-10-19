import { create } from "zustand";
import { ThemeStore } from "./types";
import { getThemeFromStorage, setThemeToStorage } from "@/utils";

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: getThemeFromStorage() as "light" | "dark",

  toggleTheme: () => {
    const newTheme = get().theme === "light" ? "dark" : "light";
    setThemeToStorage(newTheme);
    set({ theme: newTheme });
  },
}));
