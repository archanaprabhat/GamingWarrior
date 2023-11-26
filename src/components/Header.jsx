import React from "react";
import logo from "/assets/logo.png";

import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="bg-black flex flex-row justify-evenly h-full items-center overflow-hidden py-8  border-yellow-500 border-b-2">
      <div className="">
        <img src={logo} className="w-200 h-150" />
      </div>
      <nav className="text-white">
        <ul className="flex  space-x-4">
          <li>
            <NavLink
              to="/Home"
              className="hover:scale-150 hover:text-yellow-500"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/" className="hover:scale-150 hover:text-yellow-500">
              Games
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blog"
              className="hover:scale-150 hover:text-yellow-500"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="hover:scale-150 hover:text-yellow-500">
              Forums
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="hover:scale-150 hover:text-yellow-500">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="bg-yellow-500  py-1 px-3 rounded-full font-bold float-right hover:bg-yellow-400 hover:text-black">
        Login/Register
      </button>
    </div>
  );
}
