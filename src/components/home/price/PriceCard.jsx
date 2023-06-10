import React, { useState } from "react";
import { months } from "../../data/Data";
import FebruaryCard from "../../bulletin/years/FebruaryCard";

const PriceCard = () => {
  const [activeMonth, setActiveMonth] = useState("");

  const handleClick = (monthName) => {
    if (monthName === "FEBRUARY") {
      setActiveMonth("FEBRUARY");
    } else {
      setActiveMonth("");
    }
  };

  return (
    <>
      <div className="content grid3 mtop">
        {months.map((item, index) => (
          <div
            className={`box ${
              item.name === "FEBRUARY" || item.name === "MARCH"
                ? ""
                : "greyed-out-box"
            }`}
            key={index}
          >
            <img src={item.cover} alt="" />
            <div className="overlay">
              <div className="button-flex">
                <button
                  className={`btn ${
                    item.name === "FEBRUARY" || item.name === "MARCH"
                      ? ""
                      : "inactive"
                  }`}
                  disabled={item.name !== "FEBRUARY" && item.name !== "MARCH"}
                  onClick={() => handleClick(item.name)}
                >
                  {item.name}
                </button>
              </div>
              <p>
                <label>{item.Residential}</label>
                <label>{item.Commercial}</label>
                <label>{item.Undeveloped}</label>
              </p>
            </div>
          </div>
        ))}
      </div>
      {activeMonth === "FEBRUARY" && (
        <div className="content">
          <FebruaryCard />
        </div>
      )}
    </>
  );
};

export default PriceCard;
