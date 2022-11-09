import React, { useState } from "react";
import Proptypes from "prop-types";
import "./style/fromages.css";

function MapCarteFromage({ title, description }) {
  const handleKeyPressed = () => {};

  const [isFlipped1, setIsFlipped1] = useState(false);

  return (
    <div>
      <div
        aria-hidden="true"
        className={`carte ${isFlipped1 && "is-flipped1"}`}
        onClick={() => setIsFlipped1(!isFlipped1)}
        onKeyDown={handleKeyPressed}
      >
        <div className="carte__face carte__face--front">
          <p>{description}</p>
        </div>
        <div className="carte__face carte__face--back">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default MapCarteFromage;

MapCarteFromage.propTypes = {
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};
