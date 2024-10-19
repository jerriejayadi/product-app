import React, { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useThemeStore } from "@/store";

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  return (
    <div
      className="mx-2 w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer"
      onClick={toggleTheme}
    >
      <div className="bg-white dark:bg-gray-700 w-6 h-6 rounded-full shadow-md transform transition-transform flex items-center justify-center dark:translate-x-6">
        {isDarkMode ? (
          <Moon className="w-4 h-w-4 text-gray-300" />
        ) : (
          <Sun className="w-4 h-w-4 text-yellow-500" />
        )}
      </div>
    </div>
  );
};
