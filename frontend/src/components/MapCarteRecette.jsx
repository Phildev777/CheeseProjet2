import { useState } from "react";
import "./style/recettes.css";
import Proptypes from "prop-types";

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

  return (
    <div>
      <div className="Rcards">
        <div className="title">
          <p />
        </div>

        <div
          aria-hidden="true"
          className={`card  ${isFlipped && "is-flipped"}`}
          onClick={() => setIsFlipped(!isFlipped)}
          onKeyDown={() => handleKeyPressed()}
        >
          <div className="card__face card__face--front">
            <img className="PhRecette" src={recipeImg} alt="test" />
            <div className="RecipeName">
              <h3>{recipeName}</h3>
            </div>
          </div>

          <div className="card__face card__face--back">
            {isFlipped && (
              <p className="CarteMobile">
                {" "}
                <h3 className="CtBack" id="Charact1">
                  {recipeName}
                </h3>
                <p>
                  <img className="PhRecetteBack" src={recipeImg} alt="test" />
                </p>
                <p className="CtBack" id="Charact2">
                  <a href="http://localhost:3000/Fromages">
                    Fromage utilisé : {cheeseUsed}
                  </a>
                </p>
                <p className="CtBack" id="Charact3">
                  <a className="liensRecipe" href={recipeLink}>
                    Vidéos
                  </a>
                </p>
                <p className="CtBack" id="Charact4">
                  Ingrédients :{ingredients}
                </p>
              </p>
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
