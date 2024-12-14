import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

import Image from "next/image";
import productImg1 from "../../../Images/top-selling-product-img/image 7.png";
import productImg2 from "../../../Images/top-selling-product-img/image 8.png";
import productImg3 from "../../../Images/top-selling-product-img/image 9.png";
import productImg4 from "../../../Images/top-selling-product-img/image 10.png";
interface ProductInfo {
  image: string;
  title: string;
  rating: number;
  halfRating?: boolean;
  price: string;
  discountPrice?: string;
  discountPercentage?: string;
}
export const Topselling = () => {
  const productInfo: ProductInfo[] = [
    {
      title: "Vertical Striped Shirt",
      image: productImg1.src,
      rating: 5,
      halfRating: false,
      price: "$212",
      discountPrice: "$232",
      discountPercentage: "-20%",
    },
    {
      title: "Courage Graphic T-shirt",
      image: productImg2.src,
      rating: 4,
      halfRating: false,
      price: "$144",
    },
    {
      title: "Loose Fit Bermuda Shorts",
      image: productImg3.src,
      rating: 3,
      halfRating: false,
      price: "$80",
    },
    {
      title: "Faded Skinny Jeans",
      image: productImg4.src,
      rating: 4,
      halfRating: true,
      price: "$210",
    },
  ];
  return (
    <div>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto mt-12 mb-4">
        <div className="my-8">
          <h1 className="font-oswald text-[48px] font-bold text-center">
            TOP SELLING
          </h1>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 cs:grid-cols-3 xl:grid-cols-4 gap-8">
          {productInfo.map((item, i) => {
            return (
              <div className=" overflow-hidden mx-auto font-satoshi" key={i}>
                {/* Image Section */}
                <div className="h-[240px] sm:h-[298px] rounded-[2rem] bg-[#f0eeed]">
                  <Image
                    src={`${item.image}`}
                    width={300}
                    height={300}
                    alt="T-SHIRT WITH TAPE DETAILS"
                    // xs:w-full h-[240px] sm:h-[298px]
                    className=" object-contain h-full  rounded-[2rem] "
                  />
                </div>

                {/* Details Section */}
                <div className="px-4 pb-4 mt-4 ">
                  {/* Title */}
                  <h3 className="font-semibold text-black font-satoshi text-[16px] sm:text-[20px]">
                    {item.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-x-3  text-gray-600 mt-1">
                    <div className="flex items-center text-yellow-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} size={16} fill="currentColor" />
                      ))}
                      {/* <Star size={16} className="text-gray-300" />Partial Star */}
                      {item.halfRating && (
                        <FaStarHalf
                          size={16}
                          fill="currentColor"
                          className=" text-yellow-500"
                          // Half-filled
                        />
                      )}
                    </div>
                    <span className="text-[12px] sm:text-[14px] font-satoshi">
                      {item.rating}
                      {item.halfRating ? <span>.5</span> : <span>.0</span>}
                      /5
                    </span>
                  </div>

                  {/* Price and Discount */}
                  <div
                    className="flex items-center space-x-2 mt-2 font-satoshi text-[20px]
                sm:text-[24px]"
                  >
                    <span className=" font-bold text-black">{item.price}</span>
                    {item.discountPrice && (
                      <>
                        <span className="line-through  font-bold  text-gray-500">
                          $260
                        </span>
                        <span className="bg-red-100 text-[#FF3333] text-[10px] sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-2xl">
                          -20%
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center ">
          <button className="text-[16px] font-satoshi px-12 mt-8 py-4 border-2 border-gray-300 w-[90%] sm:w-[13.5rem] hover:font-bold hover:underline hover:underline-offset-4 rounded-[2rem]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};
