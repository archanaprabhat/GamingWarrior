import React from "react";
import fire from "/assets/review/1.jpg";
import sword from "/assets/review/2.jpg";

export default function New() {
  return (
    <div>
      <div className="h-1/6">
        <img src={sword} alt="" className="" />
      </div>
      <div>
        <img src={fire} alt="" className="w-full" />
      </div>
    </div>
  );
}
