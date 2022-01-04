import React from "react";
import "./Header.css";
import Logo from "../../Assets/tasklogo.png";
function Header() {
  return (
    <div className="header">
      <div className="container justify_between">
        <div className="logoDiv">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header_right d_flex w_50 align_center justify_between">
          <div className="NavigateList d_flex w_72 text justify_between ">
            <span className="active">Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Product</span>
            <span>Portfolio</span>
          </div>
          <div className="contactButton">
            <input type="button" value="Contact Us" className="btn_primary text btn_hover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
