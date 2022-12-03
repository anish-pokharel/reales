import React from "react";
import { price } from "../data/Data";
import "./Price.css";

const PriceCard = () => {
  return (
    <>
      <div className="content flex mtop">
        {price.map((val, index) => {
          return (
            <>
              <div className="box shadow" key={index}>
                <div className="topbtn">
                  <button className="btn3">{val.best}</button>
                </div>
                <h3>{val.plan}</h3>
                <h1>
                  <span>$</span>
                  {val.price}
                </h1>
                <p>{val.ptext}</p>

                <ul>
                  {val.list.map((value) => {
                    const { icon, text, change } = value;
                    return (
                      <>
                        <li>
                          <label
                            style={{
                              background:
                                change === "color" ? "#dc35451f" : "#27ae601f",
                              color: change === "color" ? "#dc3848" : "#27ae60",
                            }}
                          >
                            {icon}
                          </label>
                          <p>{text}</p>
                        </li>
                      </>
                    );
                  })}
                </ul>

                <button
                  className="btn5"
                  style={{
                    background: val.plan === "Standard" ? "#27ae60" : "#fff",
                    color: val.plan === "Standard" ? "#fff" : "#27ae60",
                  }}
                >
                  Start{val.plan}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PriceCard;
