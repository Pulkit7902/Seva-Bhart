import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Testimonials from "./Testimonials";

import NavBarLanding from "./NavBarLanding";
import RegisterBannerLanding from "./RegisterBannerLanding";
import Chatbot from "./Chatbot";
const Landing = () => {
  return (
    <>
      <NavBarLanding />
      <RegisterBannerLanding />

      <div id="testimonials">
        <Testimonials />
      </div>
      {/* <Register></Register> */}
      <div id="about">
        <About/>
      </div>
      <div className="fixed">
        <Chatbot/>
      </div>
      <Footer/>

    </>
  );
};

export default Landing;
