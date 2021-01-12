import React from "react";
import Linkdin from "../img/Vector (1).png"
import Instagram from "../img/Vector.png"


const Header = () => {
  return (
    <div className="header-container">
        <h1>iContribute</h1>
        <div className="social-container">
            <img src={Linkdin}/>
            <img src={Instagram}/>
        </div>
    </div>
  );
};

export default Header;