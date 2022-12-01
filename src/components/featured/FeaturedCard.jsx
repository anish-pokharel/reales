import React from "react";
import { featured } from "../data/Data";

const FeaturedCard = () => {
  return (
    <>
      <div className="content grid5 mtop">
        {featured.map((val, index) => {
          return (
            <div className="box" key={index}>
              <img src={val.cover} alt="" />
              <h4>{val.name}</h4>
              <label>{val.total}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FeaturedCard;
