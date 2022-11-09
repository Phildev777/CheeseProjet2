import React from "react";
import "../components/style/fromages.css";
import Header from "@components/Header";
import Filters from "@components/Filters";
import image from "../assets/Imagefromage.jpeg";

function Fromages() {
  return (
    <div>
      <Header
        pageName="Nos Fromages"
        imageUrl="https://img-3.journaldesfemmes.fr/aHDwiB3X3Ra3FL1fFItkcOCd-BY=/1500x/smart/6f0eba8dd6e54a8287ea03d021de2ba7/ccmcms-jdf/29529390.jpg"
      />
      <Filters />
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
