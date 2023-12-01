import React from "react";
import logo from "/assets/logo.png";
import Post from "./Post";
import img from "/assets/footer-top-bg.png";
import Comments1 from "./Comments1";
import End from "./End";

const FooterImage = ({ footerImage }) => {
  return (
    <div className="pt-10 ">
      <div
        className="flex flex-col mob:flex-col lap:flex-row gap-2    items-center gap-x-4 px-3 "
        style={{
          backgroundImage: `url(${footerImage})`,
          height: "100vh w-max",
        }}
      >
        <div>
          <div className="">
            <img
              src={logo}
              className="w-3/4 h-full lap:pt-16 pt-2 "
              alt="Logo"
            />
          </div>

          <p className="text-white pt-4">
            Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit
            ame.
          </p>

          <img
            src={img}
            alt="footer-img"
            className="h-150 hidden  mob:hidden lap:block"
          />
        </div>
        <Post />
        <div className="lap:mb-4">
          <Comments1 />
        </div>
      </div>
      <End />
    </div>
  );
};

export default FooterImage;
