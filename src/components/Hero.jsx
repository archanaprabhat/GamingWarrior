import React from "react";

const Hero = ({ backgroundImage }) => {
  return (
    <div
      className="bg-cover flex flex-col text-white sm:flex-row bg-center bg-no-repeat h-screen items-center justify-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
      }}
    >
      <div className="flex-1 p-4">
        <div className="ml-8">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wider">
            Video Gallery
          </h1>
          <p>
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
