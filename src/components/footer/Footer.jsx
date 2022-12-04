import React from "react";
// import image from "../../../public/images/logo-light.png";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do you Have Questions?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../../../public/images/logo-light.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
