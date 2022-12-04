import React from "react";
// import image from "../../../public/images/logo-light.png";
import { footer } from "../data/Data";
import "./Footer.css";

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
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>
              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          {footer.map((val) => {
            return (
              <>
                <div className="box">
                  <h3>{val.title}</h3>
                  <ul>
                    {val.text.map((value) => {
                      return (
                        <>
                          <li>{value.list}</li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </footer>
      <div className="legal">
        <span>© 2021 RentUP. </span>
      </div>
    </>
  );
};

export default Footer;
