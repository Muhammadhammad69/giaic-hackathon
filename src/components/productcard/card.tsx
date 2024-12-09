import React from "react";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

interface ProductInfo {
  image: string;
  title: string;
  rating: number;
  halfRating?: boolean;
  price: number;
  discountPrice?: number;
  discountPercentage?: string;
}

export const ProductCard: React.FC<{ productInfo: ProductInfo }> = ({
  productInfo,
}) => {
  // console.log(productInfo);
  return (
    <div className="w-full overflow-hidden mx-auto">
      {/* Image Section */}
      <div className=" p-2  ">
        <Image
          src={`${productInfo.image}`}
          width={298}
          height={298}
          alt={`${productInfo.title}`}
          // className="object-cover rounded-[2rem] h-[auto] w-[172px]  md:w-[298px]   lg:w-[310px] xl:w-[295px] "
          className="rounded-[2rem]"
        />
      </div>

      {/* Details Section */}
      <div className="px-4 pb-4 mt-4 ">
        {/* Title */}
        <h3 className=" font-semibold text-black font-satoshi text-[16px] dl:text-[20px]">
          {productInfo.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-x-3 text-sm text-gray-600 mt-1">
          <div className="flex items-center text-yellow-500">
            {[...Array(productInfo.rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            {/* <Star size={16} className="text-gray-300" />Partial Star */}
            {productInfo.halfRating && (
              <StarHalf
                size={16}
                fill="currentColor"
                className=" text-yellow-500"
                // Half-filled
              />
            )}
          </div>
          <span className="text-[12px] sm:text-[14px] font-satoshi">
            <span className="text-black">{productInfo.rating}
              {productInfo.halfRating && <span>.5</span>}
            </span>
            /5
          </span>
        </div>

        {/* Price and Discount */}
        <div className="flex items-center space-x-2 mt-2 font-satoshi text-[16px] xxs:text-[20px] lg:text-[24px] ">
          <span className="font-bold text-black">${productInfo.price}</span>
          {productInfo.discountPrice && (
            <span className="line-through  font-bold  text-gray-500">${productInfo.discountPrice}</span>
          )}
          {productInfo.discountPercentage && (
            <span className="bg-red-100 text-[#FF3333] text-[10px] md:text-[12px] font-normal md:font-semibold px-1 md:px-2  py-1 rounded-xl md:rounded-2xl   ">
              {productInfo.discountPercentage}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
