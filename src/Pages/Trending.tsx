import React from "react";
import ReusableComponent from "../Components/ReusableComponent";
import "../Styling/Trending.scss";
import Aot from "../Media/Aot.jpg";
import Jujutsu from "../Media/jujutsuKaisen.jpg";
import OnePiece from "../Media/OnePiece.webp";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { WeeklyTrend, WeeklyTrendInterface } from "../types";

const Trending = () => {
  const WeeklyTrending: WeeklyTrend = [
    {
      image: Aot,
      title: "Attack On Titan",
      category: "Category: Adventure fiction, Dark fantasy, Martial arts",
      path: "/attackontitan",
    },
    {
      image: Jujutsu,
      title: "Jujutsu Kaisen",
      category: "Category: Adventure fiction, Dark fantasy, Martial arts",
      path: "/attackontitan",
    },
    {
      image: OnePiece,
      title: "One Piece",
      category: "Category: Adventure fiction, Dark fantasy, Martial arts",
      path: "/attackontitan",
    },
    {
      image: Aot,
      title: "Attack On Titan",
      category: "Category: Adventure fiction, Dark fantasy, Martial arts",
      path: "/attackontitan",
    },
    {
      image: Jujutsu,
      title: "Jujutsu Kaisen",
      category: "Category: Adventure fiction, Dark fantasy, Martial arts",
      path: "/attackontitan",
    },
    {
      image: OnePiece,
      title: "One Piece",
      category: "Category: Adventure fiction, Dark fantasy, Martial arts",
      path: "/attackontitan",
    },
  ];

  return (
    <div className="grid-container" id="discover">
      <div className="container feature">
        <ReusableComponent />
        <div className="cards" data-aos="fade-up">
          <Splide
            options={{
              width: "100vw",
              type: "slide",
              rewind: true,
              gap: 10,
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: "free",
            }}
          >
            {WeeklyTrending.map((WeeklyTrend: WeeklyTrendInterface) => {
              const { image, title, category, path } = WeeklyTrend;
              return (
                <SplideSlide>
                  <div className="card">
                    <div className="trendImg">
                      <img src={image} alt={title} />
                    </div>
                    <div className="gradient" />
                    <div className="card-details">
                      <Link to={path}>
                        <li>{title}</li>
                      </Link>

                      <div className="categories">
                        <p>{category}</p>
                        <div className="rating">
                          <box-icon
                            color="orange"
                            type="solid"
                            name="star"
                          ></box-icon>
                          <p>5.0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Trending;
