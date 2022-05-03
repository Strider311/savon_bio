import React from "react";
import NavBar from "./navbar";
import HomePage from "./Homepage/home";
import Catalog from "./Catalog/catalog";
import SoapPage from "./Catalog/Soap/soapsPage";
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
