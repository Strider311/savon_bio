import React from "react";
// import { Link } from "react-router-dom";
import "../catalog.css";

const SoapComponent = ({ name, img, description, price }) => {
  return (
    <article className="single-soap">
      <img src={img} alt={name}></img>
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{price} AED</h4>
    </article>
  );
};

export default SoapComponent;
