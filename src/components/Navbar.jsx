import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav>
        <h1><span>S</span>HERILE</h1>
        <div>
          <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
            <li>
              <a className="active" href="home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleclick}>
          <i id="bar" className={clicked ? "times-icon" : "bars-icon"}>
            {clicked ? <FaTimes /> :<FaBars/> }
          </i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
