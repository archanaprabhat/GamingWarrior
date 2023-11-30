import React from "react";
import backgroundImage from "/assets/slider-1.jpg";
import HomeHero from "./HomeHero";
import Marquee from "./Marquee";
import Latest from "./Latest";
import backgroundImage1 from "/assets/recent-game-bg.png";
import tourImage from "/assets/pattern.png";
import RecentGames from "./RecentGames";
import Tournament from "./Tournament";
import Review from "./Review";
export default function Home() {
  return (
    <div>
      <HomeHero backgroundImage={backgroundImage} />
      <Marquee />
      <Latest className="flex flex-col gap-3" />
      <RecentGames /*  backgroundImage={backgroundImage1} */ />
      <Tournament /* backgroundImage={tourImage}  */ />
      <Review />
    </div>
  );
}
