import React, { useState } from "react";
import "../components/style/fromages.css";
import Header from "@components/Header";


function Fromages() {
    const [isFlipped, setIsFlipped] = useState(true);


  return (
    <div>
      <Header />
      <div className="Card">
        
        <li className="scene scene--card">
            <button
              type="button"
              className={`card ${isFlipped && "is-flipped"}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="card_face card_face--front">recette1</div>
              <div className="card_face card_face--back">description</div>
            </button>
          </li>


      </div>
    </div>
  );
}

export default Fromages;
