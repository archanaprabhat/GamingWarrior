import React from "react";
import pic1 from "/assets/tournament/1.jpg";
import pic2 from "/assets/tournament/2.jpg";

export default function TourCard() {
  return (
    <div className="flex flex-col justify-center items-center lap:flex-row mob:flex-col gap-10">
      {/* First Card */}
      <div className="relative flex flex-col lap:flex-row bg-black bg-opacity-60 w-full lap:w-1/2 h:1/2 lap:h-72 p-6 overflow-hidden m-8 pt-10">
        <button className="absolute top-0 left-0 px-4 py-2 bg-yellow-500 text-black text-xs font-semibold">
          Premium Tournament
        </button>
        <img
          src={pic1}
          alt="pic1"
          className=" lap:h-40 w-full h-44 lap:w-40 object-cover object-top  lap:object-center m-5 ml-0 mb-0 "
        />

        <div className=" text-yellow-500 mt-10 text-xl font-semibold">
          <h3>World Of WarCraft</h3>
          <div className="text-white font-thin text-xs pt-5">
            <ul>
              <li>Tournament Begins: June 20, 2018</li>
              <li>Tournament Ends: July 01, 2018</li>
              <li>Participants: 10 teams</li>
              <li>Tournament Author: Admin</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="relative flex flex-col lap:flex-row bg-black bg-opacity-60 w-full lap:w-1/2  h:1/2 lap:h-72 p-6 overflow-hidden  m-8 pt-10">
        <button className="absolute top-0 left-0  bg-yellow-500 text-black ">
          Premium Tournament
        </button>
        <img
          src={pic2}
          alt="pic1"
          className="lap:h-40 w-full h-44 lap:w-40 object-cover object-top  lap:object-center m-5 ml-0 mb-0 "
        />
        <div className="flex-1 text-yellow-500 mt-10 text-xl font-semibold">
          <h3>DOOM</h3>
          <div className="text-white font-thin text-xs pt-5">
            <ul>
              <li>Tournament Begins: June 20, 2018</li>
              <li>Tournament Ends: July 01, 2018</li>
              <li>Participants: 10 teams</li>
              <li>Tournament Author: Admin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
