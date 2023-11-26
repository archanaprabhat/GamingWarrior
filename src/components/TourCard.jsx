import React from "react";
import pic1 from "/assets/tournament/1.jpg";
import pic2 from "/assets/tournament/2.jpg";

export default function TourCard() {
  return (
    <div className="flex justify-center items-center">
      {/* First Card */}
      <div className="flex bg-black bg-opacity-60 w-1/2 h-72 p-6 overflow-hidden mr-8">
        <img
          src={pic1}
          alt="pic1"
          className="max-w-full max-h-full object-cover object-center mr-6 m-5 mt-10"
          style={{ maxWidth: "70%", maxHeight: "70%" }}
        />
        <div className="flex-1 text-yellow-500 mt-10 text-xl font-semibold">
          <h3>World Of WarCraft</h3>
          <div className="text-white font-thin text-sm pt-5">
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
      <div className="flex bg-black bg-opacity-60 w-1/2 h-72 p-6 overflow-hidden ml-8">
        <img
          src={pic2}
          alt="pic1"
          className="max-w-full max-h-full object-cover object-center mr-6 m-5 mt-10"
          style={{ maxWidth: "70%", maxHeight: "70%" }}
        />
        <div className="flex-1 text-yellow-500 mt-10 text-xl font-semibold">
          <h3>World Of WarCraft</h3>
          <div className="text-white font-thin text-sm pt-5">
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
