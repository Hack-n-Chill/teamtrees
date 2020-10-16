import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";

const Navbar = ({ signOut, uid }) => {
  const style = {
    fontWeight: "bold",
    color: "green",
    borderBottom: "5px solid #7289DA",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        
          <h3 className="navbar-brand">PORTFOLIOFY</h3>
        
      </ul>
      {/* --------------------------------------------------------- */}
      {uid && (
          <NavLink
            to="/about"
            className="nav-link text-white text-align-right"            
            activeStyle={style}
          >
            Menu
          </NavLink>
        )}
      {uid && (
        <NavLink to="/website" className="nav-link text-white" activeStyle={style}>
          View Website
        </NavLink>
      )}
      <ul className="navbar-nav">
        {!uid && (
          <NavLink to="/signin" className="nav-link text-white" activeStyle={style}>
            Sign In
          </NavLink>
        )}
        {!uid && (
          <NavLink to="/signup" className="nav-link text-white" activeStyle={style}>
            Sign Up
          </NavLink>
        )}
        {uid && (
          <Link
            to="/signin"
            className="nav-link text-white text-align-right"
            onClick={signOut}
            activeStyle={style}
          >
            Sign Out
          </Link>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
