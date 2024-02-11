import React from 'react'
import leaf from "./../../assets/leaf.png";
import "./Cards2.css";

function Cards2({img}) {
  return (
    <div className="card main-second-container" style={{ width: "18rem" }}>
    <div className="card-body">
      <img src={img} className="icon"/>
      <h6 className="card-subtitle mb-2 text-body-secondary">Fresh All Fruits</h6>
      <p className="card-text info">For far away behind the word mountains far from the countries Vokalls and Consonantia their live the blin texts</p>

      <p className="card-text info">For far away behind the word mountains far from the countries Vokalls and Consonantia their live the blin texts</p>

    </div>
  </div>
  )
}

export default Cards2