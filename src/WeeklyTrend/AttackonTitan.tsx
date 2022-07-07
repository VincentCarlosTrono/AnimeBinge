import React from "react";
import ReusableComponent from "../Components/ReusableComponent";
import Aot1 from "../Media/aot1.jpg";
import Aot2 from "../Media/aot2.jpg";
import Aot3 from "../Media/aot5.jpg";
import Aot from "../Media/Aot.jpg";
import "../Styling/AttackonTitan.scss";
import { AotEpisode, AotEpisodeInterface } from "../types";

const AttackonTitan = () => {
  const AotEpisodes: AotEpisode = [
    {
      image: Aot1,
      name: "Episode 1",
      details:
        "The citizens worry they will be at the Titan's mercy after many years of peace.",
    },
    {
      image: Aot2,
      name: "Episode 2",
      details: "The Shiganshina citizens are under attack from the Titans.",
    },
    {
      image: Aot3,
      name: "Episode 3",
      details:
        "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the military Police Regiment.",
    },
  ];
  return (
    <div className="grid-container">
      <div className="container aotMainContainer">
        <ReusableComponent />
        <div className=" AttackOnTitan">
          <div className="aotOverview" data-aos="fade-up">
            <img className="aotImage" src={Aot} alt="AttackOnTitan" />
            <div className="forgradient">hello</div>
            <div className="details">
              <h1>Attack On Titan</h1>
              <div className="category">
                <p>Category: Adventure fiction, Dark fantasy, Martial Arts</p>
                <div className="ratings">
                  <box-icon color="orange" type="solid" name="star" />
                  <p>5.0</p>
                </div>
              </div>
            </div>
            <p>
              When man eating Titans first appeared 100 years ago, humans found
              safety behind massive walls that stopped the giants in their
              tracks. But the safety the have had for so long is threatened when
              a colossal Titan smashes through the barriers, causing a flood of
              the giants into what had been the human...
            </p>
          </div>
          <div className="aotCards">
            <div className="episodes">
              <p>Episodes</p>
              <p>Season 1</p>
            </div>
            {AotEpisodes.map((AotEpisode: AotEpisodeInterface) => {
              const { image, name, details } = AotEpisode;
              return (
                <div className="aotCard" data-aos="fade-left">
                  <img src={image} alt={name} />
                  <div>
                    <p>{name}</p>
                    <p className="details">{details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttackonTitan;
