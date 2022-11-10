import React from "react";

import Proptypes from "prop-types";
import "./style/header.css";
import MobileTitle from "@components/MobileTitle";

function Header({ pageName, imageUrl }) {
  return (
    <div>
      <MobileTitle />
      <header className="Head">
        <img
          src={imageUrl}
          alt="background header"
          className="backgroundHead"
        />
        <h2>{pageName}</h2>
      </header>
    </div>
  );
}

Header.propTypes = {
  imageUrl: Proptypes.string.isRequired,
  pageName: Proptypes.string.isRequired,
};

export default Header;
