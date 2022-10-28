import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeLink({ recipeURL, recipeOn }) {
  return (
    <li className="itemsNav">
      <Link to="/Recettes" className="linkNav" onClick={recipeOn}>
        <img src={recipeURL} alt="Les Recettes" className="iconeNav" />
      </Link>
    </li>
  );
}
RecipeLink.propTypes = {
  recipeURL: Proptypes.string.isRequired,
  recipeOn: Proptypes.func.isRequired,
};
export default RecipeLink;
