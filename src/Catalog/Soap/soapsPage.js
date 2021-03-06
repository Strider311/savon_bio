import React from "react";
// import { Link } from "react-router-dom";
import "../catalog.css";
import soap from "./soap";
import SoapComponent from "./soapComponent";
const SoapPage = () => {
  return (
    <div className="showcase">
      <div className="container">
        <h3>Our collection of fully natural and handmade soaps</h3>
        <div className="soap-entry">
          {soap.map((soap) => {
            return (
              <SoapComponent
                name={soap.name}
                price={soap.price}
                img={soap.img}
                description={soap.description}
                key={soap.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SoapPage;
