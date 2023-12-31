import React from "react";

export default function Marquee() {
  return (
    <div className="bg-black h-24 overflow-hidden flex relative w-full">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        className="text-white flex  items-center "
      >
        Isum dolor sit amet, consectetur adipiscing elit. Isum dolor sit amet,
        consectetur adipiscing elit. Isum dolor sit amet, consectetur adipiscing
        elit.
      </marquee>
      <div
        className="bg-yellow-500 self-stretch absolute left-0 h-full w-1/3 flex
      items-center justify-center font-bold text-center pr-28 hidden lap:block"
      >
        Latest News
      </div>
    </div>
  );
}
