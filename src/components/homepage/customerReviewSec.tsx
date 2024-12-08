import { ReviewCard } from "@/components/reviewCard/customerReview";
export const CustomerReviewSec = () => {
  const review = [{
    author: "Sarah M.",
    rating: 5,
    verified: true,
    width: "",
    height: "",
    content:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    author: "Alex K.",
    rating: 5,
    verified: true,
    width: "",
    height: "",
    content: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    author: "James L.",
    rating: 5,
    verified: true,
    width: "",
    height: "",
    content: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
  }
];
  return (
    <div>
      <div className="w-[95%] 2xl:w-[1400px] mx-auto my-8">
        <div className="grid grid-cols-[repeat(1,minmax(0,400px))] sm:grid-cols-[repeat(2,minmax(0,400px))] lg:grid-cols-[repeat(3,minmax(0,400px))]  justify-center sm:justify-around gap-x-6 lg:gap-x-4 gap-y-6">
        <ReviewCard review={review[0]} />
        <ReviewCard review={review[1]}/>
        <ReviewCard review={review[2]}/>
        </div>
      </div>
    </div>
  );
};
