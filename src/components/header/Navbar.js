import React from "react";

const Navbar = ({ activeSection }) => {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <a href="#about">
            <h3 className={activeSection === "about" ? "active" : ""}>About</h3>
          </a>
        </li>
        <li>
          <a href="#education">
            <h3 className={activeSection === "education" ? "active" : ""}>
              Education
            </h3>
          </a>
        </li>
        <li>
          <a href="#experience">
            <h3 className={activeSection === "experience" ? "active" : ""}>
              Experience
            </h3>
          </a>
        </li>
        <li>
          <a href="#projects">
            <h3 className={activeSection === "projects" ? "active" : ""}>
              Projects
            </h3>
          </a>
        </li>
        <li>
          <a href="#personal">
            <h3 className={activeSection === "personal" ? "active" : ""}>
              Personal
            </h3>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
