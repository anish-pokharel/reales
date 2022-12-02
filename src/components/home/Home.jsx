import React from "react";
import Award from "../award/Award";
import Featured from "../featured/Featured";
import Hero from "../hero/Hero";
import Location from "../location/Location";
import Recent from "../recent/Recent";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      {/* award location team price */}
      <Award />
      <Location />
    </>
  );
};

export default Home;
