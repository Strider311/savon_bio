import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container flex">
          <a href="index.html" class="logo">
            <img className="logo__img" src="images/Web_Logo.png" alt="Logo" />
            <h1 className="logo__txt">Savon bio...</h1>
          </a>
          <h3 className="moto">Nature for all</h3>
          <div className="nav">
            <nav>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="Catalog.html">Catalog</a>
                </li>
                <li>
                  <a href="Contact.html">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
