import React from "react";
import Award from "../award/Award";
import Featured from "../featured/Featured";
import Hero from "../hero/Hero";
import Location from "../location/Location";
import Price from "../price/Price";
import Recent from "../recent/Recent";
import Team from "../team/Team";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      {/* award location team price */}
      <Award />
      <Location />
      <Team />
      <Price />
    </>
  );
};

export default Home;
