import React from "react";
import Cards from "./Cards";
import Aside from "./Aside";

function Combined() {
  return (
    <div className="flex">
      <div className="w-8/12">
        <Cards />
      </div>
      <div className="w-4/12">
        <Aside />
      </div>
    </div>
  );
}

export default Combined;
