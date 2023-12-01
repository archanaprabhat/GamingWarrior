import React from "react";

const HomeHero = ({ backgroundImage }) => {
  return (
    <div
      className="bg-cover  flex flex-col justify-center text-white  bg-center bg-no-repeat object-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
      }}
    >
      <div className="">
        <div className="ml-2 ">
          <h1 className="text-2xl  lap:text-5xl mb-2 lap:mb-4 lap:mt-24 mob:mt-10 tracking-wider overflow-hidden">
            The Best <span className="text-yellow-500"> Games </span> Out There
          </h1>
          <p className=" py-3 lap:py-10 text-xs lap:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada <br />
            lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac
            ligula sapien. <br /> Suspendisse cursus faucibus finibus.
          </p>

          <div>
            <a
              href="#_"
              class="inline-flex items-center justify-center w-fit px-4 py-4 text-base  leading-6 text-black bg-yellow-400  rounded-full md:w-auto hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 font-normal h-12  m-2 transition-colors duration-150  focus:shadow-outline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
