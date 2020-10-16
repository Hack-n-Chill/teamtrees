import React, { useState } from "react";
import { signIn } from "../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const SignIn = ({ signIn, uid }) => {
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
      default:
        return
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ email, password });
    signIn({ email, password });
  };

  if (uid) return <Redirect to="/about" />;
  else
    return (
      <div>
      <form
        className="container text border border-light p-5 mt-2 text-white"
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{width: "50%", backgroundColor: "#2C2F33"}}
      >
        <label>
          <h4>Sign In</h4>
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
        <button type="submit" className="btn" style={{backgroundColor: "#7289DA", color: "white"}}>
          Log In
        </button>
      </form>
      </div>
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
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
