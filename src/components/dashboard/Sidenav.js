import React from "react";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  const style = {
    fontWeight: "bold",
    color: "green",
    borderBottom: "5px solid #5bc0eb",
  };
  return (
    <div
      className="navbar navbar-fixed-left navbar-dark bg-dark my-2"
      style={{ height: "100%" }}
    >
      <ul className="nav navbar-nav">
        
          <h3 className="navbar-brand text-white">Sections</h3>
        
        <li>
          <NavLink
            to="/about"
            className="nav-link text-white"
            activeStyle={style}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className="nav-link text-white"
            activeStyle={style}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className="nav-link text-white"
            activeStyle={style}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="nav-link text-white"
            activeStyle={style}
          >
            Projects
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/skills"
            className="nav-link text-white"
            activeStyle={style}
          >
            Skills
          </NavLink>
        </li> */}
        
        <li>
          <NavLink
            to="/social"
            className="nav-link text-white"
            activeStyle={style}
          >
            Social
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
