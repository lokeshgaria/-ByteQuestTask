import React from "react";
import "./Homepage.css";
import Topnav from "./ChildComponents/Topnav";
import Header from "./ChildComponents/Header";
import Banner from "./ChildComponents/Banner";
import Section from "./ChildComponents/Section";

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
    </div>
  );
}

export default Homepage;
