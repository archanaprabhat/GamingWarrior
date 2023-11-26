import React from "react";
import pic1 from "/assets/features/1.jpg";
import pic2 from "/assets/features/2.jpg";
import pic3 from "/assets/features/3.jpg";
import pic4 from "/assets/features/4.jpg";

export default function Latest() {
  return (
    <div className="px-12 py-20">
      <div className="flex flex-row max-w-full flex-shrink-0">
        <div className="group relative">
          <div className="absolute inset-0 bg-black opacity-60  "></div>
          <div className="pl-4">
            <button className="absolute p-2 pl-4 mt-4 bg-pink-500 text-white px-6">
              New
            </button>
          </div>
          <img src={pic1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="group relative">
          <div className="absolute inset-0 bg-black opacity-60 "></div>
          <img src={pic2} alt="" className="w-full h-full object-cover" />
          <div className="pl-4">
            <button className="absolute top-0 left-0 p-2 mt-4 ml-4 bg-green-500 text-white px-6">
              Strategy
            </button>
          </div>
        </div>
        <div className="group relative">
          <div className="absolute inset-0 bg-black opacity-60 "></div>
          <img src={pic3} alt="" className="w-full h-full object-cover" />

          <div className="pl-4">
            <button className="absolute top-0 left-0 p-2  mt-4 ml-4 bg-pink-500 text-white px-6">
              New
            </button>
          </div>
        </div>
        <div className="group relative">
          <div className="absolute inset-0 bg-black opacity-60 "></div>
          <img src={pic4} alt="" className="w-full h-full object-cover" />

          <button className="absolute top-0 left-0 p-2  mt-4 ml-4 bg-violet-500 text-white px-6">
            Racing
          </button>
        </div>
      </div>
    </div>
  );
}
