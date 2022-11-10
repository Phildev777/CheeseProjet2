import React, { useState } from "react";

export default function Recettes() {
  const [isFlipped, setIsFlipped] = useState(true);

  return (
    <div>
      <div className="recipeCards">
        <ul className="recipe">
          <li className="scene scene--card">
            <button
              type="button"
              className={`card ${isFlipped && "is-flipped"}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="card__face card__face--front">recette1</div>
              <div className="card__face card__face--back">description</div>
            </button>
          </li>
          <li className="scene scene--card">
            <button
              type="button"
              className={`card ${isFlipped && "is-flipped"}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="card__face card__face--front">recette2</div>
              <div className="card__face card__face--back">description</div>
            </button>
          </li>
          <li className="scene scene--card">
            <button
              type="button"
              className={`card ${isFlipped && "is-flipped"}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="card__face card__face--front">recette3</div>
              <div className="card__face card__face--back">description</div>
            </button>
          </li>
          <li className="scene scene--card">
            <button
              type="button"
              className={`card ${isFlipped && "is-flipped"}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="card__face card__face--front">recette4</div>
              <div className="card__face card__face--back">description</div>
            </button>
          </li>
          <li className="scene scene--card">
            <button
              type="button"
              className={`card ${isFlipped && "is-flipped"}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="card__face card__face--front">recette5</div>
              <div className="card__face card__face--back">description</div>
            </button>
          </li>
          <li className="scene scene--card">
            <button
              type="button"
              className={`card ${isFlipped && "is-flipped"}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="card__face card__face--front">recette6</div>
              <div className="card__face card__face--back">description</div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
