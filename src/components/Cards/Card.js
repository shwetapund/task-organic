import React from "react";

import "./Card.css"

function Card({image, title}) {
  return (
    <div className="card main-card-container" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top image-css" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text description">
        For far away behind the word mountains far from the countries Vokalls and Consonantia their live the blin texts
        </p>
        <a href="#" className="btn btn-css">
          View Details
        </a> 
      </div>
    </div>
  );
}

export default Card;

