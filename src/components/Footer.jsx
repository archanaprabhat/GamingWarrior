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
        className="flex flex-row items-center gap-y-2 px-16 "
        style={{
          backgroundImage: `url(${footerImage})`,
          height: "100vh w-max",
        }}
      >
        <div>
          <div className="">
            <img src={logo} className="w-1/2 h-150 pt-16" alt="Logo" />
          </div>

          <p className="text-white pt-10">
            Lorem ipsum dolor sit amet, consectetur adipisc ing <br /> ipsum
            dolor sit ame.
          </p>

          <img src={img} alt="footer-img" className="h-150" />
        </div>
        <Post />

        <Comments1 />
      </div>
      <End />
    </div>
  );
};

export default FooterImage;
