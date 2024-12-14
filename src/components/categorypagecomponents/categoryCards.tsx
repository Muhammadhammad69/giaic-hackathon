import { ProductCard } from "../productcard/card";
import productImg1 from "../../../Images/category-image/image 8.png";
import productImg2 from "../../../Images/category-image/image 9.png";
import productImg3 from "../../../Images/category-image/image 10.png";
import productImg4 from "../../../Images/category-image/image 11.png";
import productImg5 from "../../../Images/category-image/image 12.png";
import productImg6 from "../../../Images/category-image/image 13.png";
import productImg7 from "../../../Images/category-image/image 14.png";
import productImg8 from "../../../Images/category-image/image 15.png";
import productImg9 from "../../../Images/category-image/image 16.png";
import Link from "next/link";

interface ProductInfo {
  image: string;
  title: string;
  rating: number;
  halfRating?: boolean;
  price: number;
  discountPrice?: number;
  discountPercentage?: string;
}
export const CategoryCards = () => {
  const productInfo: ProductInfo[] = [
    {
      title: "Gradient Graphic T-shirt",
      image: productImg1.src,
      rating: 3,
      halfRating: true,
      price: 145,
      discountPrice: 812,
      discountPercentage: "-20%",
    },
    {
      title: "Polo with Tipping Details ",
      image: productImg2.src,
      rating: 4,
      halfRating: true,
      price: 180,
    },
    {
      title: "Black Striped T-shirt",
      image: productImg3.src,
      rating: 5,
      halfRating: false,
      price: 120,
      discountPrice: 150,
      discountPercentage: "-30%",
    },
    {
      title: "Skinny Fit JeaNS",
      image: productImg4.src,
      rating: 3,
      halfRating: true,
      price: 240,
      discountPrice: 260,
      discountPercentage: "-20%",
    },
    {
      title: "Checkered Shirt",
      image: productImg5.src,
      rating: 4,
      halfRating: true,
      price: 180,
    },
    {
      title: "Sleeve Stripped T-shirt",
      image: productImg6.src,
      rating: 4,
      halfRating: true,
      price: 130,
      discountPrice: 160,
      discountPercentage: "-30%",
    },
    {
      title: "Vertical Stripped Shirt",
      image: productImg7.src,
      rating: 5,
      halfRating: false,
      price: 212,
      discountPrice: 232,
      discountPercentage: "-20%",
    },
    {
      title: "Courage Graphic T-shirt",
      image: productImg8.src,
      rating: 4,
      halfRating: false,
      price: 145,
    },
    {
      title: "Loose Fit Bermuda Shorts",
      image: productImg9.src,
      rating: 3,
      halfRating: false,
      price: 80,
    },
  ];
  return (
    <div className="w-full grid grid-cols-[repeat(2,minmax(0,1fr))] sm:grid-cols-[repeat(3,minmax(0,1fr))]  md:grid-cols-[repeat(3,minmax(0,1fr))] lg:grid-cols-[repeat(2,minmax(0,1fr))] xl:grid-cols-[repeat(3,minmax(0,1fr))]  justify-around sm:justify-between gap-6 sm:gap-8">
      {productInfo.map((item, i) => {
        return (
    <Link href="/detailpage" key={i}>
        <ProductCard productInfo={item}  />
    </Link>
    );
      })}
    </div>
  );
};
