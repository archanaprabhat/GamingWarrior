import React from "react";
import Cards from "./Cards";
import Aside from "./Aside";

function Combined() {
  return (
    <div className="flex flex-col lap:flex-row items-center">
      <div className="lap:w-8/12">
        <Cards />
      </div>
      <div className="lap:w-4/12  mt-10">
        <Aside />
      </div>
    </div>
  );
}

export default Combined;
