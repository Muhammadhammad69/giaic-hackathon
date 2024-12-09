
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Pagination = () => {
  return (
    <div className="flex items-center justify-between w-full  mx-auto mt-8 font-satoshi">
      {/* Previous Button */}
      <button
        className="flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-black border border-borderColor rounded-md hover:bg-gray-100 text-[12px] sm:text-[14px] "
        disabled={true} // Add logic to disable if on the first page
      >
        <FaArrowLeft className="mr-2" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        {/* Current Page */}
        <button className="px-4 py-2 text-sm font-medium  bg-mainColor rounded-md text-black">
          1
        </button>
        {/* Other Pages */}
        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md hidden xxs:block">
          2
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md hidden sm:block">
          3
        </button>
        <span className="px-2">...</span>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md hidden sm:block">
          8
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md hidden xxs:block">
          9
        </button>
        <button className="px-4 py-1 sm:py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">
          10
        </button>
      </div>

      {/* Next Button */}
      <button
        className="flex items-center px-2 sm:px-4 py-2 text-sm font-medium text-black border border-borderColor rounded-md hover:bg-gray-100 text-[10px] sm:text-[14px]"
        disabled={false} // Add logic to disable if on the last page
      >
        Next
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};


