import React from "react";

const Hero = ({ backgroundImage }) => {
  return (
    <div
      className="bg-cover flex flex-col text-white sm:flex-row bg-center bg-no-repeat h-screen items-left justify-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
      }}
    >
      <div className="flex-1 p-4 items-center">
        <div className="ml-8 overflow-hidden">
          <h1 className="text-2xl lap:text-5xl font-extrabold mb-4 tracking-wider pt-16 lap:pt-60">
            Video Gallery
          </h1>
          <p className="pt-20 lap:pt-0 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada <br /> lorem maximus mauris scelerisque, at rutrum nulla
            dictum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
