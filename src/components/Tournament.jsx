import React from "react";
import TourCard from "./TourCard";
const Tournament = ({ tourImage }) => {
  return (
    <div
      className={`text-black h-auto
       bg-[url('/assets/pattern.png')]  bg-auto bg-center bg-blue-50 p-4`}
    >
      <img src={tourImage} alt="" />
      <div className="my-20  ">
        <button className=" top-0 left-0 p-2 bg-orange-500 text-white px-6">
          Tournaments
        </button>

        <TourCard />
      </div>
    </div>
  );
};
export default Tournament;
