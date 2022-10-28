import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function CheeseLink({ cheeseURL, cheeseOn }) {
  return (
    <li className="itemsNav">
      <Link to="/Fromages" className="linkNav" onClick={cheeseOn}>
        <img src={cheeseURL} alt="Accueil" className="iconeNav" />
      </Link>
    </li>
  );
}
CheeseLink.propTypes = {
  cheeseURL: Proptypes.string.isRequired,
  cheeseOn: Proptypes.func.isRequired,
};
export default CheeseLink;
