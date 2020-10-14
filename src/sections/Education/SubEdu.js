import React from "react";

const SubEdu = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header bg-dark text-white">Your Data</div>
      <div className="card-body">
        <h5 className="card-title">{data.instiname}</h5>
        <p className="card-text">{data.location}</p>
        <p className="card-text">{data.major}</p>
        <p className="card-text">{data.summary}</p>
      </div>
    </div>
  );
};

export default SubEdu;
