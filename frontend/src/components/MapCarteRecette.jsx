import { useState } from "react";
import "./style/recettes.css";
import Proptypes from "prop-types";

function MapCarteRecette({ title, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleKeyPressed = () => {};

  return (
    <div className="Rcards">
      <div className="title">
        <p>{title}</p>
      </div>

      <div
        aria-hidden="true"
        className={`card  ${isFlipped && "is-flipped"}`}
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={() => handleKeyPressed()}
      >
        <div className="card__face card__face--front" />
        {description}
        <div className="card__face card__face--back">
          <img
            className="PhRecette"
            src="../src/assets/imageRecette.jpg"
            alt="test"
          />
          <div id="CtReverse">
            <h3 className="CtBack" id="Charact1">
              Nom
            </h3>
            <p className="CtBack" id="Charact2">
              Fromage utilisé
            </p>
            <p className="CtBack" id="Charact3">
              Ingrédients
            </p>
            <p className="CtBack" id="Charact4">
              <a href="http://localhost:3000/Fromages">vidéo</a>
            </p>
            <p className="CtBack" id="Charact5">
              <a href="http://localhost:3000/Fromages">Vers le fromage</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
MapCarteRecette.propTypes = {
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};
export default MapCarteRecette;
