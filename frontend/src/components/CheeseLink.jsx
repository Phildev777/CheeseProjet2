import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function CheeseLink({ cheeseURL }) {
  return (
    <li className="itemsNav">
      <Link to="/Fromages" className="linkNav">
        <img src={cheeseURL} alt="Accueil" className="iconeNav" />
      </Link>
    </li>
  );
}
CheeseLink.propTypes = {
  cheeseURL: Proptypes.string.isRequired,
};
export default CheeseLink;
