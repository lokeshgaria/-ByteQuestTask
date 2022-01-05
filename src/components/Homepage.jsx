import React from "react";
import "./Homepage.css";
import Topnav from "./ChildComponents/Topnav";
import Header from "./ChildComponents/Header";
import Banner from "./ChildComponents/Banner";
import Section from "./ChildComponents/Section";
import Newsletter from "./ChildComponents/Newsletter";
import Footer from "./ChildComponents/Footer"
function Homepage() {
  return (
    <div className="homepage">
      <Topnav />
      <Header />
      <Banner />
      <Section
        subtitle="Lorem, ipsum dolor."
        maintitle="Portfolio / case studies"
      />
      <Section
        subtitle="Lorem, ipsum dolor."
        maintitle="Developers On Demand"
      />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Homepage;
