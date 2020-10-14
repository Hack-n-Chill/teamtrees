import React from "react";

const Check = ({ checked, onClick }) => {
  console.log(checked);
  return (
    <>
      {checked ? (
        <span
          className="material-icons text-success"
          style={{ cursor: "pointer" }}
          onClick={onClick}
        >
          check_circle
        </span>
      ) : (
        <span
          className="material-icons text-danger"
          style={{ cursor: "pointer" }}
          onClick={onClick}
        >
          check_circle
        </span>
      )}
    </>
  );
};

export default Check;
