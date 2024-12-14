// File: components/CartItem.js
import Image from "next/image";
import { Trash, Plus, Minus, ArrowRight } from "lucide-react";
import { BsTag } from "react-icons/bs";

export const CartItem = () => {
  const cartItemInfo = [
    {
      title: "Gradient Graphic T-shirt",
      image: "/card/image 1.png",
      size: "Medium",
      color: "White",
      price: "$145",
      discountedPrice: "",
      quantity: 1,
    },
    {
      title: "Gradient Graphic T-shirt",
      image: "/card/image 8.png",
      size: "Medium",
      color: "White",
      price: "$145",
      discountedPrice: "",
      quantity: 1,
    },
    {
      title: "Gradient Graphic T-shirt",
      image: "/card/image 9.png",
      size: "Medium",
      color: "White",
      price: "$145",
      discountedPrice: "",
      quantity: 1,
    },
  ];
  return (
    <div className="border-2  py-2 rounded-[20px]">
      {cartItemInfo.map((item, i) => {
        return (
          <div className="w-[95%] mx-auto " key={i}>
            <div className="  flex items-center justify-between  border-gray-200 py-4">
              {/* Image and Details */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt="h"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-lg object-cover "
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Hammad
                  </h3>
                  <p className="text-sm text-gray-500">Size: </p>
                  <p className="text-sm text-gray-500">Color: </p>
                  <p className="font-bold text-xl text-gray-800">$120</p>
                </div>
              </div>

              {/* Price and Actions */}
              <div className=" h-full flex flex-col justify-between items-end  gap-y-12">
                <button className="text-red-500 hover:text-red-600">
                  <Trash size={20} />
                </button>
                <div className="flex   items-center space-x-4 border rounded-full  bg-[#F0F0F0] px-3  justify-between ">
                  <button
                    className="text-gray-500 hover:text-black
          "
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-[14px] sm:text-[16px]">1</span>
                  <button className="text-gray-500 hover:text-black">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
            {i < cartItemInfo.length - 1 ? <hr className="mt-1" /> : ""}
          </div>
        );
      })}
    </div>
  );
};

export const OrderSummary = () => {
  return (
    <div className="">
      <div className="space-y-4 font-satoshi  mx-auto border-2 px-4 py-4 rounded-[20px] text-gray-600">
        <h1 className="text-[24px] font-bold text-black">Order Summary</h1>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="text-black">$124</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p className="text-red-600">-$23</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p className="text-black">${Math.round(Math.random() * (30 - 15) + 15)}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="text-black ">Total</p>
          <p className="text-black">$512</p>
        </div>
        <div className="grid grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-3">
          <div className="flex sm:justify-start items-center bg-gray-100 border border-gray-300 rounded-full px-5 md:px-3 lg:px-4 py-3 w-full text-[14px] lg:text-[16px] gap-1 sm:gap-3 ">
            <BsTag size={20} className=""/>
            <input
              type="text"
              placeholder="Add Promo Code"
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 max-w-[133px]"
            />
          </div>
          <button className="px-9 bg-black rounded-full flex justify-center items-center text-white hover:underline hover:underline-offset-8 py-3">
            Apply
          </button>
        </div>
        <div>
          <button className="bg-black rounded-full w-full py-3 flex gap-3 justify-center hover:text-white hover:underline hover:underline-offset-8 text-black">
            <span className="text-white">Go to CheckOut</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
