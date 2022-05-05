import React from "react";
import NavBar from "./navbar";
import HomePage from "./Homepage/home";
import Catalog from "./Catalog/catalog";
import SoapPage from "./Catalog/Soap/soapsPage";
import BeautyPage from "./Catalog/Beauty-products/beautyProducts";
import Contact from "./Contact/contact";
import "./main.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/catalog" exact element={<Catalog />} />
        <Route path="/catalog/soaps" exact element={<SoapPage />} />
        <Route path="/catalog/beauty-products" exact element={<BeautyPage />} />
        <Route path="/contact-us" exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
