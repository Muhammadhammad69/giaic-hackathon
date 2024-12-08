import React from "react";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import productImg from "../../../Images/product-imges/image 8.png"
export const ProductCard: React.FC = () => {
  return (
    <div className="max-w-[295px] overflow-hidden mx-auto">
      {/* Image Section */}
      <div className="  w-[100%] ">
        <Image
          src={productImg}
          width={1000}
          height={1000}
          alt="Skinny Fit Jeans"
          className="w-full object-cover rounded-[2rem] h-[298px]"
        />
      </div>

      {/* Details Section */}
      <div className="px-4 pb-4 mt-4 ">
        {/* Title */}
        <h3 className="text-lg font-semibold text-black font-satoshi text-[20px]">
          Skinny Fit Jeans
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-x-3 text-sm text-gray-600 mt-1">
          <div className="flex items-center text-yellow-500">
            {[...Array(3)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            {/* <Star size={16} className="text-gray-300" />Partial Star */}
            <StarHalf
                size={16}
                fill="currentColor"
                className=" text-yellow-500"
                 // Half-filled
              />
          </div>
          <span className="text-[14px] font-satoshi">
            <span className="text-black">3.5</span>
            /5</span>
        </div>

        {/* Price and Discount */}
        <div className="flex items-center space-x-2 mt-2 font-satoshi">
          <span className="text-[24px] font-bold text-black">$240</span>
          <span className="line-through text-[24px] font-bold  text-gray-500">$260</span>
          <span className="bg-red-100 text-[#FF3333]  text-sm font-semibold px-4 py-1 rounded-2xl">
            -20%
          </span>
        </div>
      </div>
    </div>
  );
};
