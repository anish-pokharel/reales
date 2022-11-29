import React, { useState } from "react";

import { nav } from "../../data/Data";
// import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [navList, setNavList] = useState(false);
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((val) => {
                return (
                  <>
                    <li className="link">
                      <a href={val.path}>{val.text}</a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="buton flex">
            <h4>
              <span>2</span> My List
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>
          <div className="toogle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa-fa-bars"></i>
              )}
              >
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
