import { ThemeSwitch } from "../ui";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                ProductApp
              </h1>
            </div>

            <ThemeSwitch />
          </div>
        </div>
      </header>

      <main className="flex-grow py-8">{children}</main>

      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} ProductApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
