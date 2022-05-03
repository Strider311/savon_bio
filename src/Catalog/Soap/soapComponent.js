import React from "react";
// import { Link } from "react-router-dom";
import "../catalog.css";

const SoapComponent = ({ name, img, description, price }) => {
  return (
    <article className="single-soap">
      <h3>{name}</h3>
      <img src={img} alt={name}></img>
    </article>
  );
};

export default SoapComponent;
