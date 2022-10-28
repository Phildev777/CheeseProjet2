import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function HomeLink({ homeURL, homeOn }) {
  return (
    <li className="itemsNav">
      <Link to="/" className="linkNav" onClick={homeOn}>
        <img src={homeURL} alt="Accueil" className="iconeNav" />
      </Link>
    </li>
  );
}
HomeLink.propTypes = {
  homeURL: Proptypes.string.isRequired,
  homeOn: Proptypes.func.isRequired,
};
export default HomeLink;
