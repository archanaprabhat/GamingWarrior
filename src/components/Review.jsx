import React from "react";
import ReviewCard from "./ReviewCard";

const Review = ({ backgroundImage3 }) => {
  return (
    <div
      className={`text-black h-[800px] bg-[url('/assets/review-bg.png')] bg-no-repeat bg-cover bg-right-top`}
    >
      <img src={backgroundImage3} alt="" />

      <div className="text-center">
        <div className="py-20 ">
          <button className="bg-pink-600 text-white px-6 py-1">New</button>
          <h1 className="text-4xl font-bold pt-2">Recent Games</h1>
        </div>
      </div>
      <ReviewCard />
    </div>
  );
};
export default Review;
