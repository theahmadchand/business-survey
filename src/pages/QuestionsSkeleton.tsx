export const QuestionsSkeleton = () => {
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-10">
        <div className="animate-pulse flex-1 space-y-4">
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="flex space-x-4">
            <div className="h-8 bg-gray-300 rounded w-1/2"></div>
            <div className="h-8 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
