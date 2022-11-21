import React from "react";
import Header from "@components/Header";
import FuncFromage from "@components/FuncFromage";
// import Filters from "@components/Filters";
import "../components/style/fromages.css";

function Fromages() {
  return (
    <div>
      <Header
        pageName="Nos Fromages"
        imageUrl="https://img-3.journaldesfemmes.fr/aHDwiB3X3Ra3FL1fFItkcOCd-BY=/1500x/smart/6f0eba8dd6e54a8287ea03d021de2ba7/ccmcms-jdf/29529390.jpg"
      />
      {/* <Filters /> */}
      <FuncFromage />
      <a href="/Fromages" className="btn">
        <span>&#8613;</span>
      </a>
    </div>
  );
}

export default Fromages;
