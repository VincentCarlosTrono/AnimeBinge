import React from "react";
import "../Styling/Hero.scss";

const Hero = () => {
  return (
    <div className="grid-container hero">
      <div className="container content">
        <h1>Kimetsu no Yaiba</h1>
        <div className="category">
          <div className="rating">
            <box-icon color="orange" type="solid" name="star"></box-icon>
            <p>5.0</p>
          </div>
          <p>Category: Adventure fiction, Dark fantasy, Martial Arts</p>
        </div>
        <p className="details">
          Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and
          illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado,
          who strives to become a demon slayer after his family was slaughtered
          and hi yunger sister Nezuko turned into a demon
        </p>
        <div className="herobtn">
          <button>
            <box-icon color="white" name="right-arrow" type="solid" />
            Watch Now!
          </button>
          <button className="heart">
            <box-icon color="white" name="heart" type="solid" />
          </button>
        </div>
        <div className="herofooter">
          <div className="view">
            <p className="active">Overview</p>
            <p>Episodes</p>
            <p>Details</p>
          </div>
          <div className="icons">
            <div className="div1" />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
