import React from "react";
import author1 from "/assets/authors/1.jpg";
import author2 from "/assets/authors/2.jpg";
import author3 from "/assets/authors/3.jpg";
function Comments() {
  return (
    <div>
      <h4 className="font-bold text-xl pb-10 pt-16">Top Comments</h4>
      <div className="flex flex-col gap-4">
        <div className="flex gap-8 items-center">
          <div className="max-w">
            <img src={author1} alt="" className="rounded-full h-20" />
          </div>
          <div>
            <p className="text-sm py-3">
              James Smith <span className="text-gray-500">on</span> Lorem ipsum
              dolor sit amet,
            </p>
            <div className="text-yellow-500 text-sm">June 21, 2018</div>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <div className="max-w">
            <img src={author2} alt="" className="rounded-full h-20" />
          </div>
          <div>
            <p className="text-sm py-3">
              James Smith <span className="text-gray-500">on</span> Lorem ipsum
              dolor sit amet,
            </p>
            <div className="text-yellow-500 text-sm">June 21, 2018</div>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <div className="max-w">
            <img src={author3} alt="" className=" rounded-full  h-20 " />
          </div>
          <div>
            <p className="text-sm py-3">
              James Smith <span className="text-gray-500">on</span> Lorem ipsum
              dolor sit amet,
            </p>
            <div className="text-yellow-500 text-sm">June 21, 2018</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
