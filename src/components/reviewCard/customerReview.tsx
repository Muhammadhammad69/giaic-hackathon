import React from "react";
import { FaStar } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
export const ReviewCard = ({ review }: any) => {
  return (
    <div className={`bg-white border-2 border-borderColor py-6 px-8 ${review.width} h-auto ${review.height} rounded-[20px] `}>
      <div className="flex flex-col gap-y-3  mb-2">
        <div className="flex space-x-1 text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`h-5 w-5 ${
                index <= review.rating ? "fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-x-2 ">
          <span className=" font-bold text-[20px] font-satoshi">{review.author}</span>
          <div>{review.verified && <RiVerifiedBadgeFill size={22} fill="green" />}</div>
        </div>
        <div className="text-[16px] font-satoshi">
            <p>{review.content}</p>
        </div>
      </div>
      <p>{review.text}</p>
    </div>
  );
};
