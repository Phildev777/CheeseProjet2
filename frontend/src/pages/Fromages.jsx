import React from "react";
import "../components/style/fromages.css";
import Header from "@components/Header";
import image from "../assets/Imagefromage.jpeg";

function Fromages() {
  return (
    <div>
      <Header />
      <div className="Card">
        <li className="carte">
          <img className="images" src={image} alt="imgHeader" />
          <button type="button">Le fromage</button>
        </li>
        <li className="carte">
          <img className="images" src={image} alt="imgHeader" />
          <button type="button">Le fromage</button>
        </li>
        <li className="carte">
          <img className="images" src={image} alt="imgHeader" />
          <button type="button">Le fromage</button>
        </li>
        <li className="carte">
          <img className="images" src={image} alt="imgHeader" />
          <button type="button">Le fromage</button>
        </li>
        <li className="carte">
          <img className="images" src={image} alt="imgHeader" />
          <button type="button">Le fromage</button>
        </li>
        <li className="carte">
          <img className="images" src={image} alt="imgHeader" />
          <button type="button">Le fromage</button>
        </li>
        <li className="carte">
          <img className="images" src={image} alt="imgHeader" />
          <button type="button">Le fromage</button>
        </li>
        <li className="carte">
          <img className="images" src={image} alt="imgHeader" />
          <button type="button">Le fromage</button>
        </li>
        <li className="carte">
          <img className="images" src={image} alt="imgHeader" />
          <button type="button">Le fromage</button>
        </li>
      </div>
    </div>
  );
}

export default Fromages;
