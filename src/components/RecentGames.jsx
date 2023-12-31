import React from "react";
import recent1 from "/assets/recent1.jpg";
import icon1 from "/assets/icons/heart.png";
import icon2 from "/assets/icons/star.png";
import recent2 from "/assets/recent-game/2.jpg";
import recent3 from "/assets/recent-game/3.jpg";

const RecentGames = ({ backgroundImage1 }) => {
  return (
    <div
      className={`text-black h-fit lap:h-[800px] bg-[url('/assets/recent-game-bg.png')] bg-no-repeat bg-cover bg-center bg-blue-50 px-3`}
    >
      <img src={backgroundImage1} alt="" />
      <div className="text-center">
        <div className="py-28">
          <button className="bg-pink-600 text-white px-6 py-1">New</button>
          <h1 className="text-4xl font-bold">Recent Games</h1>
        </div>
      </div>

      {/* card section */}
      <div className="flex flex-col lap:flex-row justify-center gap-5">
        <div className="item-center relative">
          <button className="absolute p-1  mt-4 ml-4 bg-pink-500 text-white px-5 text-xs">
            NEW
          </button>
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <div className="overflow-hidden">
              <img
                src={recent1}
                alt=""
                className="w-full hover:scale-125 duration-1000 object-cover object-center"
              />
            </div>
            <div className="px-6 py-4">
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
                <div className="flex space-x-0 items-center ml-auto">
                  <div className="bg-red-600 p-2">
                    <img
                      src={icon1}
                      alt="Like Icon"
                      className="w-5 h-5 hover:scale-125 object-cover object-center"
                    />
                  </div>
                  <div className="bg-yellow-500 p-2 ml-2">
                    <img
                      src={icon2}
                      alt="Subscribe Icon"
                      className="w-5 h-5 hover:scale-125 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for other cards */}

        <div className="item-center relative">
          <button className="absolute p-1  mt-4 ml-4 bg-violet-500 text-white px-5 text-xs">
            RACING
          </button>
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <div className="overflow-hidden">
              <img
                src={recent2}
                alt=""
                className="w-full hover:scale-125 duration-1000 object-cover object-center"
              />
            </div>
            <div className="px-6 py-4">
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
                <div className="flex space-x-0 items-center ml-auto">
                  <div className="bg-red-600 p-2">
                    <img
                      src={icon1}
                      alt="Like Icon"
                      className="w-5 h-5 hover:scale-125 object-cover object-center"
                    />
                  </div>
                  <div className="bg-yellow-500 p-2 ml-2">
                    <img
                      src={icon2}
                      alt="Subscribe Icon"
                      className="w-5 h-5 hover:scale-125 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item-center relative">
          <button className="absolute p-1  mt-4 ml-4 bg-blue-400 text-white px-5 text-xs">
            ADVENTURE
          </button>
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <div className="overflow-hidden">
              <img
                src={recent3}
                alt=""
                className="w-full hover:scale-125 duration-1000 object-cover object-center"
              />
            </div>
            <div className="px-6 py-4">
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
                <div className="flex space-x-0 items-center ml-auto">
                  <div className="bg-red-600 p-2">
                    <img
                      src={icon1}
                      alt="Like Icon"
                      className="w-5 h-5 hover:scale-125 object-cover object-center"
                    />
                  </div>
                  <div className="bg-yellow-500 p-2 ml-2">
                    <img
                      src={icon2}
                      alt="Subscribe Icon"
                      className="w-5 h-5 hover:scale-125 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentGames;
