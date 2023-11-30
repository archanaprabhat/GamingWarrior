import React from "react";
import rev1 from "/assets/review/1.jpg";
import rev2 from "/assets/review/2.jpg";
import rev3 from "/assets/review/3.jpg";
import rev4 from "/assets/review/4.jpg";

export default function ReviewCard() {
  return (
    <div className="flex flex-col mob:flex-col lap:flex-row items-center min-h-screen ">
      {/* Review Card 1 */}
      <div className="relative flex flex-col items-center p-6 w-full mob:w-full lap:w-1/4">
        <div className="text-center w-full">
          <img className="lap:h-96 mob:w-full" src={rev1} alt="reviews" />
        </div>
        <div className="absolute top-0 left-1 pb-16 pl-8 ">
          <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold">9.3</span>
          </div>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Assassin’s Creed</div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur <br /> adipisc ing ipsum
            dolor sit ame.
          </p>
        </div>
      </div>

      {/* Review Card 2 */}
      <div className="relative flex flex-col items-center p-6 w-full mob:w-full lap:w-1/4">
        <div className="text-center w-full">
          <img className="lap:h-96 mob:w-full" src={rev2} alt="reviews" />
        </div>
        <div className="absolute top-0 left-1 pb-16 pl-8 ">
          <div className="bg-violet-500 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold">9.5</span>
          </div>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Doom</div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur <br /> adipisc ing ipsum
            dolor sit ame.
          </p>
        </div>
      </div>

      {/* Review Card 3 */}
      <div className="relative flex flex-col items-center p-6 w-full mob:w-full lap:w-1/4">
        <div className="text-center">
          <img className="lap:h-96 mob:w-full" src={rev3} alt="reviews" />
        </div>
        <div className="absolute top-0 left-1 pb-16 pl-8 ">
          <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold">8.7</span>
          </div>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">Overwatch</div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur <br /> adipisc ing ipsum
            dolor sit ame.
          </p>
        </div>
      </div>

      {/* Review Card 4 */}
      <div className="relative flex flex-col items-center p-6 w-full mob:w-full lap:w-1/4">
        <div className="text-center">
          <img className="lap:h-96 mob:w-full" src={rev4} alt="reviews" />
        </div>
        <div className="absolute top-0 left-1 pb-16 pl-8 ">
          <div className="bg-pink-500 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold">9.0</span>
          </div>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">GTA</div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur <br /> adipisc ing ipsum
            dolor sit ame.
          </p>
        </div>
      </div>
    </div>
  );
}
