import React from "react";
import { Link } from "react-router-dom";
import { location } from "../data/Data";
import "./LocationCard.css";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-overlay"></div>
      <Link to={`/location/${location[0].id}`} className="card-button">
        {location[0].name}
      </Link>
      <div className="card-description">
        <p>
          {location[0].Residential} {location[0].Commercial} {location[0].Undeveloped}
        </p>
      </div>
      <img className="card-image" src={location[0].cover} alt={location[0].name} />
    </div>
  );
};

export default LocationCard;

