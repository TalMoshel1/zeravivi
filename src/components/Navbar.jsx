import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../components-css/Navbar.css";

const Navbar = ({ onAboutClick, onPhotosClick, onContactClick }) => {
  return (
    <nav>
      <ul>
        <li onClick={onAboutClick}>About</li>
        <li onClick={onContactClick}>Contact</li>
        <li onClick={onPhotosClick}>Photos</li>
      </ul>
      {/* <div className="icon-container">
        <GiHamburgerMenu size="50" />
      </div> */}
    </nav>
  );
};

export default Navbar;
