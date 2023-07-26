import React from "react";

export const Spinner = () => {
  return (
    <div className="d-flex flex-column">
      <div className="spinner-container"></div>
      <div className="text-center">
        <p>Loading...</p>
        <h5 className="mb-5">Gentlement's Club</h5>
      </div>
    </div>
  );
};
