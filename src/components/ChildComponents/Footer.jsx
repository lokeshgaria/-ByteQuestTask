import React from "react";
import "./Footer.css";
import Logo from "../../Assets/tasklogo.png";
function Footer() {
  return (
    <div className="footer d_flex flex_column">
      <div className="container justify_between">
        <div className="logo flex1 footerChild">
          <img src={Logo} alt="logo" />
          <p className="text ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium dolores impedit, doloremque minus tempora
          </p>
        </div>

        <div className="Links flex1 d_flex flex_column footerChild align_center justify_center">
          <h3>Links</h3>
          <div className="d_flex flex_column  justify_between footer_links">
            <a href="/" className="text">
              Our Clients
            </a>
            <a href="/" className="text">
              Privacy Policy
            </a>
            <a href="/" className="text">
              Our Benefits
            </a>
          </div>
        </div>

        <div className="Links flex1 d_flex flex_column footerChild align_center justify_center">
          <h3>Information</h3>
          <div className="d_flex flex_column  justify_between footer_links">
            <a href="/" className="text">
              Our Clients
            </a>
            <a href="/" className="text">
              Privacy Policy
            </a>
            <a href="/" className="text">
              Our Benefits
            </a>
          </div>
        </div>

        <div className="Links flex1 d_flex flex_column footerChild align_center justify_center">
          <h3>Contact Us</h3>
          <div className="d_flex flex_column  justify_between footer_links">
            <a href="/" className="text">
              Our Clients
            </a>
            <a href="/" className="text">
              Privacy Policy
            </a>
            <a href="/" className="text">
              Our Benefits
            </a>
          </div>
        </div>
      </div>
      <div className="copyRight subtitle d_flex align_center justify_center text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et a
        provident.
      </div>
    </div>
  );
}

export default Footer;
