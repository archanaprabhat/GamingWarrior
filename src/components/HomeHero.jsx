import React from "react";

const HomeHero = ({ backgroundImage }) => {
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
          <h1 className="text-5xl  mb-4 tracking-wider">
            The Best <span className="text-yellow-500"> Games </span> Out There
          </h1>
          <p className="py-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada <br />
            lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac
            ligula sapien. <br /> Suspendisse cursus faucibus finibus.
          </p>

          <a
            href="#_"
            class="inline-flex items-center justify-center w-full px-8 py-4 text-base  leading-6 text-black bg-yellow-400  rounded-full md:w-auto hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 font-normal"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
