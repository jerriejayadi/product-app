export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-96 bg-transparent">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent border-gray-300 dark:border-blue-300 dark:border-t-transparent"></div>
    </div>
  );
};
