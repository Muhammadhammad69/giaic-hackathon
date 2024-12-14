import { CartItem } from "../cartPageComponents/cartItems";
import { OrderSummary } from "@/components/cartPageComponents/cartItems";
import {ChevronRightIcon} from "lucide-react"
export const CartPage = () => {
  return (
    <div className="w-[95%] 2xl:w-[1400px] mx-auto ">
      <div className="space-y-8">

      <hr />
      <div className="font-satoshi text-gray-600 text-[16px] flex items-center">
          <span>Home</span>
          <ChevronRightIcon size={20}/>
          <span className="text-black">Casual</span>
        </div>
      </div>
      <h1 className="text-[40px] font-bold font-oswald mt-4 mb-3">Your Cart</h1>
      <div className=" grid grid-cols-1 md:grid-cols-[minmax(0,60%),minmax(0,40%)] gap-4">
        <CartItem />
        <OrderSummary />

        <div></div>
      </div>
    </div>
  );
};
