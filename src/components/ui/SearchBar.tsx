import React, { useCallback } from "react";
import { Search } from "lucide-react";
import { useProductStore } from "@/store";

export const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useProductStore();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [setSearchQuery]
  );

  return (
    <div className="max-w-xl mx-auto mb-8">
      <div className="relative">
        <input
          id="search"
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-600 pl-10 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-300"
          aria-label="Search products"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5 dark:text-gray-300" />
      </div>
    </div>
  );
};
