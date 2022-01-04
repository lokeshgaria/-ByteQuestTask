import React from "react";
import "./Section.css";
import { cardData } from "./dummy/data";

const CardComponent = () => {
  return cardData.map((values) => (
    <div className="card boder_radius" key={values.id}>
      <img src={values.img} alt="card" className="img_fluid" />
    </div>
  ));
};

function Section({ subtitle, maintitle }) {
  return (
    <div className="section container">
      <div className="section_top">
        <div className="subtitle text">{subtitle}</div>
        <div className="main_title">
          <h2>{maintitle}</h2>
        </div>
      </div>
      <div className="cards_section w_100 d_flex justify_between">
        <CardComponent />
      </div>
    </div>
  );
}

export default Section;
