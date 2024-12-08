import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../../Images/dress-style-sec/image 11.png";
import img2 from "../../../Images/dress-style-sec/image 13.png";
import img3 from "../../../Images/dress-style-sec/image 12.png";
import img4 from "../../../Images/dress-style-sec/image 14.png"
export const DressStyleSec = () => {
  const dressStyles = [
    { label: "Casual", imageUrl: "/casual.jpg", width: 296, height: 424 },
    { label: "Formal", imageUrl: "/formal.jpg", width: 455, height: 586 },
    { label: "Party", imageUrl: "/party.jpg", width: 296, height: 424 },
    { label: "Gym", imageUrl: "/gym.jpg", width: 296, height: 424 },
  ];
  const imgHeight = "h-[298px]"

  return (
    <div>
      <div className="bg-mainColor px-4 sm:px-8 lg:px-16 py-16 w-[95%] 2xl:w-[1400px] mx-auto rounded-[40px] ">
        <h2 className="text-[48px] font-bold mb-12 text-center font-oswald ">
          BROSWER BY DRESS STYLE
        </h2>
        <div className="flex flex-col gap-y-8">
          <div className="grid grid-cols-1 md:grid-cols-[repeat(1,minmax(0,710px)),repeat(1,minmax(0,430px))] md:grid-rows-[minmax(0,298px)] gap-y-8 gap-x-8 lg:gap-x-12 justify-center">
            <Link href={""} className="relative">
              <div className=" rounded-[20px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="relative">
                  <Image
                    src={img1}
                    alt={"Casual"}
                    width={1000}
                    height={1000}
                    className= "w-full h-[190px] sm:h-[298px] md:h-[250px] xl:h-[298px] "
                  />
                </div>
                <div className="p-4 text-center absolute top-0 left-[10px] sm:left-[20px]">
                  <h3 className="text-[20px] sm:text-[26px] lg:text-[36px] font-bold font-satoshi">Casual</h3>
                </div>
              </div>
            </Link>
            <Link href={""} className="relative">
              <div className=" bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={img2}
                    alt={"Formal"}
                    width={1000}
                    height={1000}
                    className="w-full h-[190px] sm:h-[298px] md:h-[250px] xl:h-[298px]"
                  />
                </div>
                <div className="p-4 text-center absolute top-0 left-[10px] sm:left-[20px] ">
                  <h3 className="text-[20px] sm:text-[26px] lg:text-[36px] font-bold font-satoshi">Formal</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[repeat(1,minmax(0,710px)),repeat(1,minmax(0,430px))] md:grid-rows-[minmax(0,250px)] xl:grid-rows-[minmax(0,298px)] gap-y-8 gap-x-8 lg:gap-x-12 justify-center">
            <Link href={""} className="relative">
              <div className=" rounded-[20px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="relative">
                  <Image
                    src={img3}
                    alt={"Party"}
                    width={1000}
                    height={1000}
                    className="w-full h-[190px] sm:h-[298px] md:h-[250px] xl:h-[298px]"
                  />
                </div>
                <div className="p-4 text-center absolute top-0 left-[10px] sm:left-[20px]">
                  <h3 className="text-[20px] sm:text-[26px] lg:text-[36px] font-bold font-satoshi">Party</h3>
                </div>
              </div>
            </Link>
            <Link href={""} className="relative">
              <div className=" bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={img4}
                    alt={"Gym"}
                    width={1000}
                    height={1000}
                    className="w-full h-[190px] sm:h-[298px] md:h-[250px] xl:h-[298px]"
                  />
                </div>
                <div className="p-4 text-center absolute top-0 left-[10px] sm:left-[20px] ">
                  <h3 className="text-[20px] sm:text-[26px] lg:text-[36px] font-bold font-satoshi">Gym</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
