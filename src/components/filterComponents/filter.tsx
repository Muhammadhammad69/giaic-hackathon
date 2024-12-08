import { ChevronRightIcon } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";
const Filter = () => {
  return (
    <div className="w-[295px] bg-red-500 ml-4">
      <div className="bg-white shadow-md mx-auto p-4 w-[248px]">
        <div className="flex justify-between font-satoshi text-[20px] font-bold ">
          <h2 className="text-lg font-medium mb-4">Filters</h2>
          <SlidersHorizontal />
        </div>
        <hr className="mb-4"/>
        <div className="space-y-4 font-satoshi font-light text-[16px]">
          <div className="flex items-center justify-between cursor-pointer">
            <h3 className="  flex items-center">
              T-shirts
            </h3>
            <ChevronRightIcon size={18} className="" />
          </div >
          <div className="flex items-center justify-between cursor-pointer">
            <h3 className="  flex items-center">
              Shorts
            </h3>
            <ChevronRightIcon size={18} className="" />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <h3 className="  flex items-center">
              Shirts
            </h3>
            <ChevronRightIcon size={18} className="" />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <h3 className="  flex items-center">
              Hoodie
            </h3>
            <ChevronRightIcon size={18} className="" />
          </div>
          <div className="flex items-center justify-between cursor-pointer" >
            <h3 className="flex items-center">
              Jeans
            </h3>
            <ChevronRightIcon size={18} className="" />
          </div>
          {/* Rest of the filter options */}
        </div>
        <hr className="mt-4 mb-4"/>
      </div>
    </div>
  );
};

export default Filter;
