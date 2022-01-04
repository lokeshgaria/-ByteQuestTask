import React from "react";
import "./Topnav.css";
import { MdCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

function Topnav() {
  return (
    <div className="topNav " >
        <div className="container">
        <ul className="listParent">
        <li className="listItem">
          <AiOutlineMail /> info@bytequestions.com
        </li>
        <li className="listItem">
          <MdCall /> 983934 23423 , 3934 23423
        </li>
      </ul>
        </div>
      
    </div>
  );
}

export default Topnav;
