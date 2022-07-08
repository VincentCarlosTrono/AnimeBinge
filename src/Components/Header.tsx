import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../Styling/Header.scss";
import { HeaderList, HeaderListInterface } from "../types";

const Header = () => {
  const lists: HeaderList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Discover",
      link: "#discover",
    },
    {
      name: "About Us",
      link: "/",
    },
  ];

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <div className={`grid-container ${scroll ? "onScroll" : "header"}`}>
      <div className="container navbar">
        <a href="/">
          <h1>AnimeBinge</h1>
        </a>
        <div className="menu-btn">
          <NavBar />
        </div>
        <div className="navlist">
          <ul>
            {lists.map((list: HeaderListInterface) => {
              const { name, link } = list;
              return (
                <div>
                  <li>
                    <a href={link}>{name}</a>
                  </li>
                </div>
              );
            })}
          </ul>
          <div className="navbutton">
            <button className="sign-up">Sign Up</button>
            <button className="log-in">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
