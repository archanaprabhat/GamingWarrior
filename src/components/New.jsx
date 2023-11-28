import React from "react";
import fire from "/assets/review/1.jpg";
import pic1 from "/assets/features/1.jpg";

export default function New() {
  return (
    <div>
      <div>
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="pl-4">
            <button className="absolute p-2 pl-4 mt-4 bg-pink-500 text-white px-6">
              New
            </button>
          </div>

          <img src={pic1} alt="" className="w-full h-full object-cover" />

          <div className="absolute inset-0 flex flex-col items-left justify-end text-white pl-6">
            <div className="font-bold text-xl mb-2">
              Suspendisse ut justo tem por, <br />
              rutrum
            </div>
            <p className="text-white text-base mb-4 py-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Ipsum dolor sit amet, consectetur elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-white inline-flex items-center md:mb-2 lg:mb-0 pb-4"
              >
                3 Comments
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full pt-20">
        <div className="absolute top-0 left-1 pt-16 pl-8 ">
          <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold">9.3</span>
          </div>
        </div>
        <img className="max-w-2/3 h-auto mx-auto" src={fire} alt="reviews" />
      </div>

      <div className="px-6 py-4 text-center bg-blue-50">
        <div className="font-bold text-xl mb-2">Assassin’s Creed</div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing ipsum dolor
          sit ame.
        </p>
      </div>
    </div>
  );
}
