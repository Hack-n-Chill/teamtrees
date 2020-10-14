import React, { useState } from "react";
import { signUp } from "../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const SignUp = ({ signUp, uid }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        return;
      case "password":
        setPassword(e.target.value);
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ email, password });
    signUp({ email, password });
  };

  if (uid) return <Redirect to="/about" />;
  else
    return (
      <form
        className="container text border border-light p-5 mt-2 bg-light"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label>
          <h4>Sign Up</h4>
        </label>
        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Register
        </button>
      </form>
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
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
