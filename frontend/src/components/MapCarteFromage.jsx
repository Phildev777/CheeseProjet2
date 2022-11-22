import React, { useState } from "react";
import Proptypes from "prop-types";
import "./style/fromages.css";

function MapCarteFromage({
  title,
  fromageImage,
  origine,
  description,
  typeDePate,
  typeDeLait,
}) {
  const handleKeyPressed = () => {};

  const [isFlipped1, setIsFlipped1] = useState(false);

  return (
    <div className="laCarte">
      <div
        aria-hidden="true"
        className={`carte ${isFlipped1 && "is-flipped1"}`}
        onClick={() => setIsFlipped1(!isFlipped1)}
        onKeyDown={handleKeyPressed}
      >
        <div className="carte__face carte__face--front">
          <div className="image1">
            <img src={fromageImage} alt="test" />
          </div>
          <h1>{title}</h1>
        </div>

        <div className="carte__face carte__face--back">
          <div className="limage">
            <img src={fromageImage} alt="test" />
          </div>
          <h1>{title}</h1>

          <h2>Type de Lait : {typeDeLait}</h2>

          <h3>Type de Pâte : {typeDePate}</h3>

          <h4>Origine : {origine}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default MapCarteFromage;

MapCarteFromage.propTypes = {
  title: Proptypes.string.isRequired,
  fromageImage: Proptypes.string.isRequired,
  origine: Proptypes.string.isRequired,
  typeDePate: Proptypes.string.isRequired,
  typeDeLait: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};
