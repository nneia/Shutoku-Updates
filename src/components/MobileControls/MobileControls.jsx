import React, { useState } from "react";
import "./MobileControls.css";

const MobileControls = ({ changeViewMap, selected }) => {
  // Handle button click to change the view
  const handleButtonClick = newView => {
    changeViewMap(newView); // Update the parent component's view
  };

  return (
    <div className="controlls-container">
      <div className="btn-wrap ">
        <p
          className={`controlls-btn ${selected === "map" ? "selected" : ""}`}
          onClick={() => handleButtonClick("map")}
        >
          Map
        </p>
      </div>
      <div className="btn-wrap">
        <p
          className={`controlls-btn ${selected === "list" ? "selected" : ""}`}
          onClick={() => handleButtonClick("list")}
        >
          List
        </p>
      </div>
    </div>
  );
};

export default MobileControls;
