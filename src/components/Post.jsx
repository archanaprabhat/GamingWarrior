import React from "react";
import first from "/assets/latest-blog/1.jpg";
import second from "/assets/latest-blog/2.jpg";
import third from "/assets/latest-blog/3.jpg";

export default function Post() {
  return (
    <div className="">
      <div className="h-min w-auto ">
        <div className="text-white bg-black bg-opacity-40 p-7 relative border border-gray-600">
          <h4 className="font-bold text-lg pb-6">Latest Posts</h4>
          <div className="flex flex-col gap-4 flex-shrink-0">
            <div className="flex gap-8 items-center">
              <div className="w-max">
                <img src={first} alt="" className="w-28 rounded-full" />
              </div>
              <div>
                <div className="text-yellow-500 text-xs">June 21, 2018</div>
                <p className="text-xs py-1">
                  ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                  ipsum
                </p>
                <a
                  href="#"
                  className="text-gray-400 inline-flex items-center mb-2 font-light text-sm"
                >
                  By Admin
                </a>
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <div className="max-w">
                <img src={second} alt="" className="w-28 rounded-full" />
              </div>
              <div>
                <div className="text-yellow-500 text-xs">June 21, 2018</div>
                <p className="text-xs py-1">
                  ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                  ipsum
                </p>
                <a
                  href="#"
                  className="text-gray-400 inline-flex items-center mb-2 font-light text-sm"
                >
                  By Admin
                </a>
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <div className="max-w">
                <img src={third} alt="" className="w-28 rounded-full" />
              </div>
              <div>
                <div className="text-yellow-500 text-xs">June 21, 2018</div>
                <p className="text-xs py-1">
                  ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                  ipsum
                </p>
                <a
                  href="#"
                  className="text-gray-400 inline-flex items-center mb-2 font-light text-sm"
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
