import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Sidenav from "../dashboard/Sidenav";

const Dashboard = ({ uid }) => {
  if (!uid) return <Redirect to="/signin" />;
  return (
    <div className="row">
      <div className="col col-lg-2">
        <Sidenav />
      </div>
      <div className="col col-lg-10"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid,
  };
};

export default connect(mapStateToProps)(Dashboard);
