import React from "react";
import "./Section.css";
import {   Services } from "./dummy/data";
import Card from "../../Assets/card.png";

const CardComponent = () => {
  return Services.map((values) => (
    <div className="cardOver boder_radius" key={values.id}>
      <img src={Card} alt="card" className=" " />
    </div>
  ));
};

const Service = () => {
  return Services.map((values) => (
    <div className="detailCard " key={values.id}>
      <div className="card_header">
        <img
          src={Card}
          alt="card"
          className="img_fluid"
          style={{ maxHeight: "30rem" }}
        />
        <p className="card_title">{values.heading}</p>
        <p className="card_desc">{values.desc}</p>
      </div>
      <div className="card_footer">
        <p>Read More</p>
      </div>
    </div>
  ));
};

function ScrollSection({ subtitle, maintitle , product}) {
  return (
    <div className="section container">
      <div className="section_top">
        <div className="subtitle text">{subtitle}</div>
        <div className="main_title">
          <h2>{maintitle}</h2>
        </div>
      </div>

      <div className="overflowRow">
        {product ? <CardComponent /> : <Service />}
      </div>
    </div>
  );
}

export default ScrollSection;
