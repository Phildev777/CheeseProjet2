import { useState } from "react";
import "./style/recettes.css";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

// similaire à "ComponentDidMount" et "componentDidUpdate";

function MapCarteRecette({
  recipeName,
  recipeImg,
  cheeseUsed,
  ingredients,
  recipeLink,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleKeyPressed = () => {};

  const handleNewTab = (event) => {
    event.stopPropagation();
    window.open(recipeLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div className="Rcards">
        <div
          aria-hidden="true"
          className={`card  ${isFlipped && "is-flipped"}`}
          onClick={() => setIsFlipped(!isFlipped)}
          onKeyDown={() => handleKeyPressed()}
        >
          <div className="card__face card__face--front">
            <img className="PhRecette" src={recipeImg} alt="test" />

            <div
              className="RecipeName"
              style={{ display: isFlipped ? "none" : "flex" }}
            >
              <h3 className="NameFront">{recipeName}</h3>
            </div>
          </div>

          <div className="card__face card__face--back">
            {isFlipped && (
              <div className="backOfCard">
                <h3 className="CtBack" id="Charact1">
                  {recipeName}
                </h3>

                <div className="imgBackContainer">
                  <img className="PhRecetteBack" src={recipeImg} alt="test" />
                </div>

                <div className="CtBack" id="Charact2">
                  <Link to="/Fromages" className="lien">
                    Fromage utilisé : <br />
                    {cheeseUsed}
                  </Link>
                </div>

                <div className="CtBack" id="Charact3">
                  <button
                    type="button"
                    className="liensRecipe"
                    onClick={handleNewTab}
                  >
                    Etapes de la recette en vidéo
                  </button>
                </div>

                <div className="CtBack" id="Charact4">
                  <p className="ingredients">Ingrédients : {ingredients}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

MapCarteRecette.propTypes = {
  recipeName: Proptypes.string.isRequired,
  ingredients: Proptypes.string.isRequired,
  recipeImg: Proptypes.string.isRequired,
  cheeseUsed: Proptypes.string.isRequired,
  recipeLink: Proptypes.string.isRequired,
};

export default MapCarteRecette;
