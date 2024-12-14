"use client";
import { useState } from "react";
import { Check, Minus, Plus, ShoppingCart } from "lucide-react";

export const ProductVariant = () => {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
    {/* Choose Color */}
      <div className="font-satoshi">
        
        <h3 className="text-lg font-medium">Select Colors</h3>
        <div className="flex space-x-3 mt-2">
          <button className="w-8 h-8 rounded-full bg-green-700  border-black flex justify-center items-center text-green-700 hover:text-white">
          <Check  size={20}/>
          </button>
          <button className="w-8 h-8  rounded-full bg-blue-700 border flex justify-center items-center text-blue-700 hover:text-white">
            <Check size={20}/>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-800 border flex justify-center items-center text-gray-800 hover:text-white">
          <Check size={20}/>
          </button>
        </div>
      </div>
<hr className="my-5" />
      {/* Choose Size */}
      <div>
        <h3 className="text-lg font-medium">Choose Size</h3>
        <div className="grid grid-cols-3 xs:flex gap-y-3 gap-x-4 mt-2">
          {["Small", "Medium", "Large", "X-Large"].map((size) => (
            <button
              key={size}
              className="px-4 py-1 font-normal xs:py-2 border rounded-[62px] 
                text-gray-700 bg-mainColor hover:text-white hover:bg-black text-[14px] xs:text-[16px] "
              
            >
              {size}
            </button>
          ))}
        </div>
      </div>
<hr className="my-4"/>
      {/* Quantity and Add to Cart */}
      <div className="flex items-center flex-col xs:flex-row xs:space-x-4 gap-y-4 xs:gap-y-0">
        <div className="flex items-center space-x-4 border rounded-[62px] px-4 py-1 bg-mainColor w-[70%] xs:w-[30%] justify-between ">
          <button onClick={decrementQuantity} className="text-gray-500 hover:text-black
          ">
            <Minus size={20} />
          </button>
          <span className="text-[14px] sm:text-[20px]">{quantity}</span>
          <button onClick={incrementQuantity} className="text-gray-500 hover:text-black">
            <Plus size={20} />
          </button>
        </div>
        <button className="flex items-center space-x-4 bg-black text-white px-6 py-2 rounded-[62px] w-[70%] xs:w-[70%] justify-center ">
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </>
  );
};
