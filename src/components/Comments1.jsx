import React from "react";
import author1 from "/assets/authors/1.jpg";
import author2 from "/assets/authors/2.jpg";
import author3 from "/assets/authors/3.jpg";
import author4 from "/assets/authors/4.jpg";
function Comments1() {
  return (
    <div className="mb-2">
      <div className="h-min w-auto ">
        <div className="text-white bg-black bg-opacity-40 p-8  relative border border-gray-600">
          <h4 className="font-bold text-lg pb-6 ">Top Comments</h4>
          <div className=" flex flex-col gap-4 flex-shrink-0">
            <div className=" flex gap-8 items-center ">
              <div className="w-max">
                <img src={author1} alt="" className="rounded-full w-28" />
              </div>
              <div>
                <p className="text-xs py-3">
                  James Smith <span className="text-gray-500">on</span> Lorem
                  ipsum dolor sit amet,
                </p>
                <div className="text-yellow-500 text-xs">June 21, 2018</div>
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <div className="w-max">
                <img src={author2} alt="" className="rounded-full w-28" />
              </div>
              <div>
                <p className="text-xs py-3">
                  James Smith <span className="text-gray-500">on</span> Lorem
                  ipsum dolor sit amet,
                </p>
                <div className="text-yellow-500 text-xs">June 21, 2018</div>
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <div className="max-w">
                <img src={author3} alt="" className=" rounded-full  w-28 " />
              </div>
              <div>
                <p className="text-xs py-3">
                  James Smith <span className="text-gray-500">on</span> Lorem
                  ipsum dolor sit amet,
                </p>
                <div className="text-yellow-500 text-xs">June 21, 2018</div>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="max-w">
                <img src={author4} alt="" className="rounded-full w-28" />
              </div>
              <div>
                <p className="text-xs py-3">
                  James Smith <span className="text-gray-500">on</span> Lorem
                  ipsum dolor sit amet,
                </p>
                <div className="text-yellow-500 text-xs">June 21, 2018</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments1;
