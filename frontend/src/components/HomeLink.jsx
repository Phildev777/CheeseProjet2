import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function HomeLink({ homeURL }) {
  return (
    <li className="itemsNav">
      <Link to="/" className="linkNav">
        <img src={homeURL} alt="Accueil" className="iconeNav" />
      </Link>
    </li>
  );
}
HomeLink.propTypes = {
  homeURL: Proptypes.string.isRequired,
};
export default HomeLink;
