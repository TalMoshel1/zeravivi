import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../components-css/Navbar.css";
const Navbar = (props) => {

  console.log('fgh')

  return (

    <nav>
      <div className="icon-container">
        <GiHamburgerMenu size="50" />

      </div>
    </nav>
  );
};

export default Navbar;
