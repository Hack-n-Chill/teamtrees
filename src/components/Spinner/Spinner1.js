import React from "react";
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 5 auto;
  border-color: red;
`;

const Spinner1 = () => {
  return (
    <div className="sweet-loading">
        <ScaleLoader
          css={override}
          size={200}
          color={"#123abc"}          
        />
      </div>
  );
};

export default Spinner1;
