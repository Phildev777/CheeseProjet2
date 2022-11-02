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
          <img className="images" src={image} />
          <a>Le fromage</a>
        </li>
        <li className="carte">
          <img className="images" src={image} />
          <a>Le fromage</a>
        </li>
        <li className="carte">
          <img className="images" src={image} />
          <a>Le fromage</a>
        </li>
        <li className="carte">
          <img className="images" src={image} />
          <a>Le fromage</a>
        </li>
        <li className="carte">
          <img className="images" src={image} />
          <a>Le fromage</a>
        </li>
        <li className="carte">
          <img className="images" src={image} />
          <a>Le fromage</a>
        </li>
        <li className="carte">
          <img className="images" src={image} />
          <a>Le fromage</a>
        </li>
        <li className="carte">
          <img className="images" src={image} />
          <a>Le fromage</a>
        </li>
        <li className="carte">
          <img className="images" src={image} />
          <a>Le fromage</a>
        </li>
      </div>
    </div>
  );
}

export default Fromages;
