import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container flex">
          <Link to="/">
            <div className="main-title">
              <img className="logo__img" src="images/Web_Logo.png" alt="Logo" />
              <h1 className="logo__txt">Savon bio...</h1>
            </div>
          </Link>
          <div className="nav">
            <nav>
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/catalog">
                  <li>Catalog</li>
                </Link>
                <li>Contact Us</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
