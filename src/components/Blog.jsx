import React from "react";
import Marquee from "./Marquee";
import Hero from "./Hero";
import Combined from "./Combined";
import backgroundImage from "/assets/1.jpg";
export default function Blog() {
  return (
    <div>
      <Marquee />
      <Hero backgroundImage={backgroundImage} />
      <Combined />
    </div>
  );
}
