import { ProductImage } from "./productImage";
import { ProductInfo } from "./productInfo";
import { ProductVariant } from "./productVariant";
import { Tabs, ReviewHead } from "./ProductReview/reviewTop";
import { ProductReviewCards } from "./ProductReview/productReviewCards";
import {ProductSuggestions} from "./productSuggestion/productSuggestion";
import {ChevronRightIcon} from "lucide-react"
export const ProductDetailComp = () => {
  return (
    <>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto text-[14px]">
        <hr className="mb-8" />
        <div className="my-4 font-satoshi text-gray-600 text-[16px] flex items-center gap-1">
          <span>Home</span>
          <ChevronRightIcon size={20}/>
          <span>Shop</span>
          <ChevronRightIcon size={20}/>
          <span>Men</span>
          <ChevronRightIcon size={20}/>
          <span className="text-black">T-shirts</span>
        </div>
      </div>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto  ">
        {/* Image Section */}
        <div className="grid grid-cols-1 xs:grid-rows-[minmax(0,460px)] cs:grid-rows-1 cs:grid-cols-2 gap-8">
          <ProductImage />
          <div className="">
            {/* Product Info Section */}
            <ProductInfo />
            {/* Product Variant Section */}
            <ProductVariant />
          </div>
        </div>
        <hr className="mt-12 lg:mt-4 xl:mt-[-50px]  border-none" />
        <div className="space-y-8">
          <Tabs />
          <ReviewHead />
          <ProductReviewCards />
          <ProductSuggestions />
        </div>
      </div>
    </>
  );
};
