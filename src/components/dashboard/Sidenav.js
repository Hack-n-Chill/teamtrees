import React from "react";
import { Link, NavLink } from "react-router-dom";

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
        <NavLink to="/" className="navbar-brand text-white">
          <h3>Sections</h3>
        </NavLink>
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
            to="/skills"
            className="nav-link text-white"
            activeStyle={style}
          >
            Skills
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
        <li>
          <NavLink
            to="/contacts"
            className="nav-link text-white"
            activeStyle={style}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
