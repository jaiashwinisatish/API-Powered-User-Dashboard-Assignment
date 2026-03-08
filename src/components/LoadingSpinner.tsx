export default function LoadingSpinner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full skeleton"></div>
              </div>
              <div className="flex-1 min-w-0 space-y-3">
                <div className="h-4 skeleton rounded w-3/4"></div>
                <div className="h-3 skeleton rounded w-full"></div>
                <div className="h-3 skeleton rounded w-5/6"></div>
                <div className="h-3 skeleton rounded w-2/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
