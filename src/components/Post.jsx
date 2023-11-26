import React from "react";
import first from "/assets/latest-blog/1.jpg";
import second from "/assets/latest-blog/2.jpg";
import third from "/assets/latest-blog/3.jpg";

export default function Post() {
  return (
    <div className="">
      <div className="h-min w-auto ">
        <div className="text-white bg-black bg-opacity-40 p-8  relative border border-gray-600">
          <h4 className="font-bold text-xl pb-10">Latest Posts</h4>
          <div className=" flex flex-col gap-4 ">
            <div className=" flex gap-4 items-center ">
              <div className="w-max">
                <img src={first} alt="" className="h-28" />
              </div>
              <div>
                <div className="text-yellow-500 text-sm">June 21, 2018</div>
                <p className="text-sm py-3">
                  ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                  ipsum
                </p>
                <a
                  href="#"
                  className="text-gray-400 inline-flex items-center md:mb-2 lg:mb-0 font-light text-sm"
                >
                  By Admin
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="max-w">
                <img src={second} alt="" className="h-28" />
              </div>
              <div>
                <div className="text-yellow-500 text-sm">June 21, 2018</div>
                <p className="text-sm py-3">
                  ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                  ipsum
                </p>
                <a
                  href="#"
                  className="text-gray-400 inline-flex items-center md:mb-2 lg:mb-0 font-light text-sm"
                >
                  By Admin
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="max-w">
                <img src={third} alt="" className="h-28" />
              </div>
              <div>
                <div className="text-yellow-500 text-sm">June 21, 2018</div>
                <p className="text-sm py-3">
                  ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                  ipsum
                </p>
                <a
                  href="#"
                  className="text-gray-400 inline-flex items-center md:mb-2 lg:mb-0 font-light text-sm"
                >
                  By Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
