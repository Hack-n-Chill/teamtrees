import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";

const Navbar = ({ signOut, uid }) => {
  const style = {
    fontWeight: "bold",
    color: "green",
    borderBottom: "5px solid #5bc0eb",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <Link to="/">
          <h3 className="navbar-brand">PORTFOLIOFY</h3>
        </Link>
      </ul>
      {/* --------------------------------------------------------- */}
      {uid && (
        <NavLink to="/" className="nav-link text-white" activeStyle={style}>
          View Website
        </NavLink>
      )}
      <ul className="navbar-nav">
        {!uid && (
          <NavLink to="/signin" className="nav-link text-white">
            Sign In
          </NavLink>
        )}
        {!uid && (
          <Link to="/signup" className="nav-link text-white">
            Sign Up
          </Link>
        )}
        {uid && (
          <Link
            to="/signin"
            className="nav-link text-white text-align-right"
            onClick={signOut}
          >
            Sign Out
          </Link>
        )}
      </ul>

      {/* <ul class="navbar-nav">
        <li class="nav-item">
          {!uid && (
            <Link to="/signin" className="nav-link text-white">
              Sign In
            </Link>
          )}
        </li>
        <li class="nav-item">
          {!uid && (
            <Link to="/signup" className="nav-link text-white">
              Sign Up
            </Link>
          )}
        </li>
      </ul> */}
      {/* <Link to="/">
        <h3 className="navbar-brand">PORTFOLIOFY</h3>
      </Link>
      {!uid && (
        <Link to="/signin" className="nav-link text-white">
          Sign In
        </Link>
      )}
      {!uid && (
        <Link to="/signup" className="nav-link text-white">
          Sign Up
        </Link>
      )}
      {uid && (
        <Link
          to="/signin"
          className="nav-link text-white text-align-right"
          onClick={signOut}
        >
          Sign Out
        </Link>
      )} */}
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
