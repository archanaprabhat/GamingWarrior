import React, { useState } from "react";
import logo from "/assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black flex flex-wrap flex-row justify-evenly top-0 z-[20] h-full items-center overflow-hidden py-8 border-yellow-500 border-b-2 mob:pb-10 lap:mb-0">
      <div className="">
        <img src={logo} className="w-fit h-auto" alt="Logo" />
      </div>
      <div className="block lap:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white-500 hover:text-white-400"
        >
          <svg
            className={`fill-white h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${
              isOpen ? "block" : "hidden"
            } text-white`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <nav
        className={`w-full text-white block  lap:flex lap:items-center lap:w-auto ${
          isOpen ? "block" : "hidden opacity-0"
        } mt-4 lap:mt-0 transition-opacity duration-300`}
      >
        <ul className="lap:flex lap:flex-grow lap:space-x-4">
          <li>
            <NavLink
              to="/Home"
              className="block px-4 py-2 lap:text-yellow-500 hover:bg-white hover:text-black"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="block px-4 py-2 hover:bg-white hover:text-black lap:text-yellow-500"
            >
              Games
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blog"
              className="block px-4 py-2 hover:bg-white hover:text-black  lap:text-yellow-500 "
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block px-4 py-2 hover:bg-white hover:text-black  lap:text-yellow-500"
            >
              Forums
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block px-4 py-2 hover:bg-white hover:text-black  lap:text-yellow-500"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="bg-yellow-500 py-1 px-3 rounded-full font-bold float-right hover:bg-yellow-400 hover:text-black hidden lap:block">
        Login/Register
      </button>
    </div>
  );
}
