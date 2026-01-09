import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const handleSetActive = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={() => handleSetActive("home")}>
            Taha Ahmed
          </a>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handleSetActive("home")}
              className={activeLink === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handleSetActive("about")}
              className={activeLink === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              onClick={() => handleSetActive("skills")}
              className={activeLink === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              onClick={() => handleSetActive("projects")}
              className={activeLink === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handleSetActive("contact")}
              className={activeLink === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
