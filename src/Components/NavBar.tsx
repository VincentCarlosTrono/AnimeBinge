import React, { useState } from "react";
import "../Styling/NavBar.scss";

const NavBar = () => {
  const MenuLists = [
    {
      list: "Home",
      path: "/",
    },
    {
      list: "Discover",
      path: "/discover",
    },
    {
      list: "About Us",
      path: "/",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid-container">
      <div className="container navbar">
        <a href="/">
          <h1 className="title">AnimeBinge</h1>
        </a>
        <button
          className="navbar-menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <box-icon color="white" type="solid" name="grid-alt" />
        </button>
      </div>
      <div className="menuList">
        {isOpen && (
          <ul>
            {MenuLists.map(({ list, path }) => {
              return (
                <div>
                  <a href={path}>
                    <li
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      {list}
                    </li>
                  </a>
                </div>
              );
            })}
            <div className="menu-btn">
              <button className="sign-up">Sign Up</button>
              <button className="log-in">Log In</button>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
