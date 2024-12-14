import { Star } from "lucide-react";
export const ProductInfo = () => {
  return (
    <>
      <div className="font-satoshi">
        <h1 className="text-[24px] sm:text-[40px] font-bold font-oswald">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="flex items-center space-x-2">
          {/* <span className="text-yellow-500"></span> */}
          {
            [...Array(4)].map((item, i) => {
              return(

                <Star key={i} fill="#FFC633" size={16} className="text-[#FFC633]"/>
              )
            })
          }
          <span className="text-gray-500 text-sm">4.5/5</span>
        </div>
        <div className="flex items-center space-x-4 mt-3">
          <p className="text-xl font-bold">$260</p>
          <p className="text-gray-500 line-through">$300</p>
          <span className="text-red-500 font-medium bg-[#ffebeb] text-[16px] py-1 px-4 rounded-[62px] ">-40%</span>
        </div>
        <p className="text-gray-600 mt-3 text-[16px] font-normal ">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft
          and breathable fabric, it offers superior comfort and style.
        </p>
      <hr className="my-4 "/>
      </div>
    </>
  );
};
