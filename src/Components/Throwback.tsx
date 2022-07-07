import React from "react";
import "../Styling/Throwback.scss";
import GhostFighter from "../Media/GhostFighter.jpeg";
import SlamDunk from "../Media/Slamdunk.webp";
import FlameofRecca from "../Media/FlameOfRecca.png";
import { ThrowbackType, ThrowbackInterface } from "../types";

const Throwback = () => {
  const ThrowbackAnimes: ThrowbackType = [
    {
      image: GhostFighter,
      name: "Ghost Fighter",
    },
    {
      image: SlamDunk,
      name: "SlamDunk",
    },
    {
      image: FlameofRecca,
      name: "Flame Of Recca",
    },
  ];
  return (
    <div className="grid-container">
      <div className="container throwbackAnime" data-aos="fade-up">
        <h1>Throwback Anime!</h1>
        <div className="throwback">
          {ThrowbackAnimes.map((ThrowbackAnime: ThrowbackInterface) => {
            const { image, name } = ThrowbackAnime;
            return <img src={image} alt={name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Throwback;
