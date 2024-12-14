import Image from "next/image";

export const ProductImage = () => {
  return (
    
    <div className="h-full sm:h-auto sm:w-[100%] cs:w-auto grid xs:grid-cols-[minmax(0,25%),_auto] xs:grid-rows-[minmax(0,100%)] cs:grid-rows-[minmax(0,80%)] gap-x-4 gap-y-4 ">
      
      <div className="grid gap-y-4 gap-x-4 grid-cols-3 xs:grid-cols-1 row-start-2 row-span-1 xs:grid-rows-3  xs:row-start-1 xs:row-span-1 ">
        <Image
          src="/image 1 (1).png"
          alt="T-shirt view 1"
          width={152}
          height={168}
          className="border rounded-[20px] cursor-pointer w-full  h-full  "
        />
        <Image
          src="/image 1 (1).png"
          alt="T-shirt view 2"
          width={152}
          height={168}
        
          className="border rounded-[20px] cursor-pointer w-full h-full "
        />
        <Image
          src="/image 1 (1).png"
          alt="T-shirt view 3"
          width={152}
          height={168}
          className="border rounded-[20px] cursor-pointer w-full h-full"
        />
      </div>
      <div className="  sm:w-auto  border rounded-[20px] overflow-hidden ">
        <Image
          src="/image 1 (1).png"
          alt="One Life Graphic T-Shirt"
          width={500}
          height={500}
          className="w-full  h-full rounded-[20px] "
        />
      </div>
    </div>
  );
};
