import { ChevronDownIcon, SlidersHorizontal } from "lucide-react";

export const CategoryTop = () => {
  return (
    <div className="flex justify-between mb-4">
      <h1 className="font-satoshi text-[32px] font-bold">Casual</h1>
      <div className="flex font-light gap-x-2 pt-2">
        <h1 className="text-[14px] sm:text-[16px] font-satoshi self-center sm:justify-self-center text-center">Showing 1-10 of 100 Products</h1>
        <div className="text-[12px] dl:text-[16px] font-satoshi  gap-x-2 hidden lg:flex">
          <p>Sort By:</p>
          <span className="text-black font-normal">Product</span>
          <ChevronDownIcon />
        </div>
        
      </div>
      <div className="lg:hidden bg-mainColor w-12 h-12 rounded-[2rem] self-center justify-self-center flex justify-center items-center">

        <SlidersHorizontal className=""/>
        </div>
    </div>
  );
};
