import React from "react";
import Header from "./common/header/Header";
import Footer from "./footer/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";

const Page = () => {
  return (
    <>
      {/* <h1>hello</h1> */}
      {/* Header homre about services blog procing contact */}
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Footer /> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Page;
