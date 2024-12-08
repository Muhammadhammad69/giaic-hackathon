import { ChevronUpIcon } from 'lucide-react';

const PriceRange = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-medium mb-4 flex items-center justify-between">
        Price{' '}
        <button>
          <ChevronUpIcon className="w-5 h-5" />
        </button>
      </h2>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">$50</span>
        <span className="text-sm font-medium">$200</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mt-2 relative">
        <div className="absolute left-0 right-0 h-2 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default PriceRange;