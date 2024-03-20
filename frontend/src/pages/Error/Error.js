import React from "react";
import NotFound from "../../assets/not-found.png";
import InternalServerError from "../../assets/internal-server-error.png";

import "./Error.css";

const Error = ({ status }) => {
  return (
    <div className="error mt-5 pt-5">
      {status === 404 ? (
        <div className="d-flex justify-content-center">
          <img src={NotFound} alt="not_found" />
        </div>
      ) : status === 500 ? (
        <div className="d-flex justify-content-center">
          <img src={InternalServerError} alt="not_found" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Error;
