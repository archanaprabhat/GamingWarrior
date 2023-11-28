import React from "react";

export default function End() {
  return (
    <div className="flex flex-col lap:flex-row bg-black bg-opacity-90 justify-around text-gray-400">
      {/* Mobile View */}
      <footer className="order-2 mob:order-1 w-full  py-4 text-center lg:text-left">
        <p className="text-sm">
          Copyright ©2023 All rights reserved | This template is made with by
          <span className="text-blue-600"> Colorlib</span>
        </p>
      </footer>

      <div className="order-1 mob:order-2 w-full lap:w-3/4">
        <ul className="flex flex-wrap flex-row py-4 justify-evenly">
          <li>
            <a href="/Home" className="hover:scale-150 hover:text-yellow-500">
              Home
            </a>
          </li>

          <li>
            <a href="/" className="hover:scale-150 hover:text-yellow-500">
              Games
            </a>
          </li>
          <li>
            <a href="/Blog" className="hover:scale-150 hover:text-yellow-500">
              Blog
            </a>
          </li>
          <li>
            <a href="/" className="hover:scale-150 hover:text-yellow-500">
              Forums
            </a>
          </li>
          <li>
            <a href="/" className="hover:scale-150 hover:text-yellow-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
