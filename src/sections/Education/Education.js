import React from "react";
import Sidenav from "../../components/dashboard/Sidenav";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Form from "./Form";
import Details from "./Details";

const Education = ({ uid }) => {
  if (!uid) return <Redirect to="/signin" />;
  return (
    <div className="row">
      <div className="col col-lg-2 col-12">
        <Sidenav />
      </div>
      <div className="col col-lg-10 col-12">
        <Form />
        <Details />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid,
  };
};

export default connect(mapStateToProps)(Education);
