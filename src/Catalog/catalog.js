import React from "react";
import { Link } from "react-router-dom";
import "./catalog.css";
// import soap from "../soap.js";

const Catalog = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div className="grid-container">
          <Link to="/catalog/soaps">
            <section className="product-family">
              <img src="images/Savon_Bio-01.jpg" alt="Soap collection"></img>
              <h3>Soap Collection</h3>
            </section>
          </Link>
          <Link to="/catalog/beauty-products">
            <section className="product-family">
              <img src="images/Savon_Bio-02.jpg" alt="Soap collection"></img>
              <h3>Beauty products</h3>
            </section>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
