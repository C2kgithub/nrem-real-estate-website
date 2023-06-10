import React from "react";
import { bulletins } from "../data/Data";

const LocationPage = () => {
  console.log(bulletins); 

  return (
    <div className="location-data">
      <h1>{bulletins[0].caption}</h1>
      <div className="image-container">
        <img src={bulletins[0].cover} alt={bulletins[0].caption} className="image" />
      </div>
    </div>
  );
};

export default LocationPage;