import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import productImg1 from "../../../Images/product-imges/image 7.png";
import productImg2 from "../../../Images/product-imges/image 8.png";
import productImg3 from "../../../Images/product-imges/image 9.png";
import productImg4 from "../../../Images/product-imges/image 10.png";
export const Arrivalsection = () => {
  return (
    <div>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto">
        <div className="my-8">
          <h1 className="font-oswald text-[48px] font-bold text-center">
            New Arrivals
          </h1>
        </div>
        <div className="grid grid-cols-[repeat(1,minmax(0,240px))] xs:grid-cols-[repeat(2,minmax(0,240px))] gap-x-4 xs:gap-x-2 sm:gap-0 sm:grid-cols-[repeat(2,minmax(0,295px))]  md:grid-cols-[repeat(2,minmax(0,295px))] dl:grid-cols-[repeat(3,minmax(0,295px))] xl:grid-cols-[repeat(4,minmax(0,295px))] justify-center  xs:justify-evenly xl:justify-between ">
          <div className=" overflow-hidden mx-auto">
            {/* Image Section */}
            <div className="">
              <Image
                src={productImg1}
                width={1000}
                height={1000}
                alt="T-SHIRT WITH TAPE DETAILS"
                className="xs:w-full object-cover rounded-[2rem] h-[240px] sm:h-[298px]"
              />
            </div>

            {/* Details Section */}
            <div className="px-4 pb-4 mt-4 ">
              {/* Title */}
              <h3 className="font-semibold text-black font-satoshi text-[16px] sm:text-[20px]">
                T-Shirt With Tape Details
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-x-3  text-gray-600 mt-1">
                <div className="flex items-center text-yellow-500">
                  {[...Array(4)].map((_, i) => (
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
                <span className="text-[12px] sm:text-[14px] font-satoshi">
                  <span className="text-black">4.5</span>
                  /5
                </span>
              </div>

              {/* Price and Discount */}
              <div
                className="flex items-center space-x-2 mt-2 font-satoshi text-[20px]
sm:text-[24px]"
              >
                <span className=" font-bold text-black">$120</span>
                {/* <span className="line-through  font-bold  text-gray-500">
                  $260
                </span>
                <span className="bg-red-100 text-[#FF3333] text-[10px] sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-2xl">
                  -20%
                </span> */}
              </div>
            </div>
          </div>
          <div className=" overflow-hidden mx-auto">
            {/* Image Section */}
            <div className="   ">
              <Image
                src={productImg2}
                width={1000}
                height={1000}
                alt="Skinny Fit Jeans"
                className="object-cover rounded-[2rem] h-[240px] sm:h-[298px]"
              />
            </div>

            {/* Details Section */}
            <div className="px-4 pb-4 mt-4 ">
              {/* Title */}
              <h3 className=" font-semibold text-black font-satoshi text-[16px] sm:text-[20px]">
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
                <span className="text-[12px] sm:text-[14px] font-satoshi">
                  <span className="text-black">3.5</span>
                  /5
                </span>
              </div>

              {/* Price and Discount */}
              <div className="flex items-center space-x-2 mt-2 font-satoshi text-[20px] sm:text-[24px] ">
                <span className="font-bold text-black">$240</span>
                <span className="line-through  font-bold  text-gray-500">
                  $260
                </span>
                <span className="bg-red-100 text-[#FF3333] text-[10px] sm:text-sm font-semibold px-2 sm:px-4 py-1 rounded-2xl">
                  -20%
                </span>
              </div>
            </div>
          </div>
          <div className=" overflow-hidden mx-auto hidden sm:block">
            {/* Image Section */}
            <div className="  w-[100%] ">
              <Image
                src={productImg3}
                width={1000}
                height={1000}
                alt="Checkered Shirt"
                className=" object-cover rounded-[2rem] h-[199px] xs:h-[240px] sm:h-[298px]"
              />
            </div>

            {/* Details Section */}
            <div className="px-4 pb-4 mt-4 ">
              {/* Title */}
              <h3 className="font-semibold text-black font-satoshi text-[16px] sm:text-[20px]">
                Checkered Shirt
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-x-3 text-sm text-gray-600 mt-1">
                <div className="flex items-center text-yellow-500">
                  {[...Array(4)].map((_, i) => (
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
                <span className="text-[12px] sm:text-[14px] font-satoshi">
                  <span className="text-black">4.5</span>
                  /5
                </span>
              </div>

              {/* Price and Discount */}
              <div className="flex items-center space-x-2 mt-2 font-satoshi text-[24px] lg:text-[24px]">
                <span className="text-[24px] font-bold text-black">$180</span>
                {/* <span className="line-through text-[24px] font-bold  text-gray-500">
                  $260
                </span>
                <span className="bg-red-100 text-[#FF3333] text-[10px] sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-2xl">
                  -20%
                </span> */}
              </div>
            </div>
          </div>
          <div className=" overflow-hidden mx-auto hidden sm:block">
            {/* Image Section */}
            <div className="  w-[100%] ">
              <Image
                src={productImg4}
                width={1000}
                height={1000}
                alt="Sleeve Striped T-Shirt"
                className="w-full object-cover rounded-[2rem]  h-[199px] xs:h-[240px] sm:h-[298px]"
              />
            </div>

            {/* Details Section */}
            <div className="px-4 pb-4 mt-4 ">
              {/* Title */}
              <h3 className=" font-semibold text-black font-satoshi text-[16px] sm:text-[20px]">
                Sleeve Striped T-Shirt
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-x-3 text-sm text-gray-600 mt-1">
                <div className="flex items-center text-yellow-500">
                  {[...Array(4)].map((_, i) => (
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
                <span className="text-[12px] sm:text-[14px] font-satoshi">
                  <span className="text-black">4.5</span>
                  /5
                </span>
              </div>

              {/* Price and Discount */}
              <div
                className="flex items-center space-x-2 mt-2 font-satoshi text-[20px]
sm:text-[24px]"
              >
                <span className=" font-bold text-black">$130</span>
                <span className="line-through  font-bold  text-gray-500">
                  $160
                </span>
                <span className="bg-red-100 text-[#FF3333] text-[10px] sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-2xl">
                  -30%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="text-[16px] font-satoshi px-12 py-4 border-2 border-gray-300 w-[90%] sm:w-[13.5rem] hover:font-bold hover:underline hover:underline-offset-4 rounded-[2rem]">View All</button>
        </div>
      </div>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto mt-16">
        <hr />
      </div>
    </div>
  );
};
