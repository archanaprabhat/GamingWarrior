import React from "react";
import recent1 from "/assets/recent1.jpg";
import icon1 from "/assets/icons/heart.png";
import icon2 from "/assets/icons/star.png";
import recent2 from "/assets/recent-game/2.jpg";
import recent3 from "/assets/recent-game/3.jpg";
import recent4 from "/assets/recent-game/4.jpg";
import recent5 from "/assets/recent-game/5.jpg";
import recent6 from "/assets/recent-game/6.jpg";
import recent7 from "/assets/recent-game/7.jpg";
import recent8 from "/assets/recent-game/8.jpg";

export default function Cards() {
  return (
    <div className="grid lap:grid-cols-2 lap:gap-5 justify-items-center mob:grid-cols-1 ">
      <div className="pt-28">
        <div className="rounded overflow-hidden shadow-lg max-w-sm relative">
          <button className="absolute top-0 left-0 p-1 mt-4 ml-4 bg-pink-500 text-white px-6">
            Racing
          </button>
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
              Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
              sit amet, consectetur elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
              <div className="flex space-x-0 items-center ml-40">
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

      <div className="pt-28">
        <div className="rounded overflow-hidden shadow-lg max-w-sm relative">
          <button className="absolute top-0 left-0 p-1 mt-4 ml-4 bg-violet-500 text-white px-6">
            Racing
          </button>
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
              Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
              sit amet, consectetur elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
              <div className="flex space-x-0 items-center ml-40">
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

      <div className="pt-10">
        <div className="rounded overflow-hidden shadow-lg max-w-sm relative">
          <button className="absolute top-0 left-0 p-1 mt-4 ml-4 bg-blue-500 text-white px-6">
            Adventure
          </button>
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
              Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
              sit amet, consectetur elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
              <div className="flex space-x-0 items-center ml-40">
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

      <div className="pt-10">
        <div className="rounded overflow-hidden shadow-lg max-w-sm relative">
          <button className="absolute top-0 left-0 p-1 mt-4 ml-4 bg-red-500 text-white px-6">
            Racing
          </button>
          <div className="overflow-hidden">
            <img
              src={recent4}
              alt=""
              className="w-full hover:scale-125 duration-1000 object-cover object-center"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Suspendisse ut justo tem por, rutrum
            </div>
            <p className="text-gray-600 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
              sit amet, consectetur elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
              <div className="flex space-x-0 items-center ml-40">
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
      <div className="pt-10">
        <div className="rounded overflow-hidden shadow-lg max-w-sm relative">
          <button className="absolute top-0 left-0 p-1 mt-4 ml-4 bg-violet-500 text-white px-6">
            Racing
          </button>
          <div className="overflow-hidden">
            <img
              src={recent5}
              alt=""
              className="w-full hover:scale-125 duration-1000 object-cover object-center"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Suspendisse ut justo tem por, rutrum
            </div>
            <p className="text-gray-600 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
              sit amet, consectetur elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
              <div className="flex space-x-0 items-center ml-40">
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

      <div className="pt-10">
        <div className="rounded overflow-hidden shadow-lg max-w-sm relative">
          <button className="absolute top-0 left-0 p-1 mt-4 ml-4 bg-blue-500 text-white px-6">
            Adventure
          </button>
          <div className="overflow-hidden">
            <img
              src={recent6}
              alt=""
              className="w-full hover:scale-125 duration-1000 object-cover object-center"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Suspendisse ut justo tem por, rutrum
            </div>
            <p className="text-gray-600 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
              sit amet, consectetur elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
              <div className="flex space-x-0 items-center ml-40">
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
      <div className="pt-10">
        <div className="rounded overflow-hidden shadow-lg max-w-sm relative">
          <button className="absolute top-0 left-0 p-1 mt-4 ml-4 bg-pink-500 text-white px-6">
            Racing
          </button>
          <div className="overflow-hidden">
            <img
              src={recent7}
              alt=""
              className="w-full hover:scale-125 duration-1000 object-cover object-center"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Suspendisse ut justo tem por, rutrum
            </div>
            <p className="text-gray-600 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
              sit amet, consectetur elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
              <div className="flex space-x-0 items-center ml-40">
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

      <div className="pt-10">
        <div className="rounded overflow-hidden shadow-lg max-w-sm relative">
          <button className="absolute top-0 left-0 p-1 mt-4 ml-4 bg-violet-500 text-white px-6">
            Racing
          </button>
          <div className="overflow-hidden">
            <img
              src={recent8}
              alt=""
              className="w-full hover:scale-125 duration-1000 object-cover object-center"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Suspendisse ut justo tem por, rutrum
            </div>
            <p className="text-gray-600 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
              sit amet, consectetur elit.
            </p>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center md:mb-2 lg:mb-0"
              >
                3 Comments
              </a>
              <div className="flex space-x-0 items-center ml-40">
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
  );
}
