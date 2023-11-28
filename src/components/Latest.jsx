import React from "react";
import pic1 from "/assets/features/1.jpg";
import pic2 from "/assets/features/2.jpg";
import pic3 from "/assets/features/3.jpg";
import pic4 from "/assets/features/4.jpg";

export default function Latest() {
  return (
    <div className="px-12 py-20">
      <div className="flex flex-row max-w-full flex-shrink-0">
        {/* Image 1 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="pl-4 ">
            <button className="absolute p-2 pl-4 mt-4 bg-pink-500 text-white px-6">
              New
            </button>
          </div>
          <img src={pic1} alt="" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="font-bold text-xl mb-2">
              Suspendisse ut justo tem por, rutrum
            </div>
            <p className="text-gray-600 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <button className="absolute top-0 left-0 p-2 mt-4 ml-4 bg-green-500 text-white px-6">
            Strategy
          </button>
          <img src={pic2} alt="" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="font-bold text-xl mb-2">
              Suspendisse ut justo tem por, rutrum
            </div>
            <p className="text-gray-600 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <button className="absolute p-2 pl-4 mt-4 ml-4 bg-pink-500 text-white px-6">
            New
          </button>
          <img src={pic3} alt="" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="font-bold text-xl mb-2">
              Suspendisse ut justo tem por, rutrum
            </div>
            <p className="text-gray-600 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
            </div>
          </div>
        </div>

        {/* Image 4 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <button className="absolute top-0 left-0 p-2  mt-4 ml-4 bg-violet-500 text-white px-6">
            Racing
          </button>
          <img src={pic4} alt="" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <div className="font-bold text-xl mb-2">
              Suspendisse ut justo tem por, rutrum
            </div>
            <p className="text-gray-600 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
