import { TopHeader, Header } from "@/components/homepage/header";
import { Herosection } from "@/components/homepage/herosection";
import { Logosection } from "@/components/homepage/logosection";
import { Arrivalsection } from "@/components/homepage/arrivals";
import { Topselling } from "@/components/homepage/topselling";
import { DressStyleSec } from "@/components/homepage/dressStyle";
import { CustomerReviewSec } from "@/components/homepage/customerReviewSec";
import { FooterSec } from "@/components/homepage/footer";


export default function Home() {
  const review = {
    author: "hammad",
    rating: 3,
    verified: true,
    width: "w-[400px]",
    height: "h-[240px]"

  }
  return (
    <>
    {/* <TopHeader />
    <Header /> */}
    <Herosection />
    <Logosection />
    <Arrivalsection />
    <Topselling />
    <DressStyleSec />
    <CustomerReviewSec />
    <div className="w-[3rem] h-12"></div>
    <FooterSec />
    
    </>
  );
}
