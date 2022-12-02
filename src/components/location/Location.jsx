import React from "react";
import Heading from "../common/Heading";
import { location } from "../data/Data";

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="Explore By Location"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <div className="content grid3 mtop">
            {location.map((val, index) => {
              return (
                <>
                  <div className="box" key={index}>
                    <img src={val.cover} alt="" />
                    <div className="overlay">
                      <h5>{val.name}</h5>
                      <p>
                        <label>{val.Villas}</label>
                        <label>{val.Offices}</label>
                        <label>{val.Apartments}</label>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
