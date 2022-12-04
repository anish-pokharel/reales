import React from "react";
import Header from "./common/header/Header";
import Footer from "./footer/Footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";

const Page = () => {
  return (
    <>
      {/* <h1>hello</h1> */}
      {/* Header homre about services blog procing contact */}
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default Page;
