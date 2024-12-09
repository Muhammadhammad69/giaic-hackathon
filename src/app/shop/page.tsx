import React from "react";
import {ChevronRightIcon } from "lucide-react";
import { CategoryPage } from "@/components/categorypage";

const page = () => {
  return (
    <>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto">
        <hr />

        <div className="mt-4 font-satoshi text-[#8c8c8c] text-[16px] flex">
          <span>

          Home
          </span>
          <ChevronRightIcon />
           <span className="text-black">
            Casual
            </span>
          </div>
      </div>
      <div>
        <CategoryPage />

      </div>
    </>
  );
};

export default page;
