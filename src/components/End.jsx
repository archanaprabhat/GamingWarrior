import React from "react";

export default function End() {
  return (
    <div className="flex flex-row bg-black bg-opacity-90 justify-around text-gray-400">
      <footer className=" py-4 text-center">
        <p className="text-sm">
          Copyright ©2023 All rights reserved | This template is made with by
          <span className="text-blue-600"> Colorlib</span>
        </p>
      </footer>
      <div>
        <ul className="flex  space-x-4 py-4">
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
