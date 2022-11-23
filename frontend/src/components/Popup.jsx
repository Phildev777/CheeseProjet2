import React from "react";
import "./style/Popup.css";
import Proptypes from "prop-types";

function Popup({ trigger, setTrigger, prenom }) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <p className="popup-title">Merci {prenom}</p>
        <h3 className="popup-diag">
          Votre message nous a été livré sur un plateau, nous allons le déguster
          avec gourmandise.{" "}
        </h3>
        <button
          className="close-btn"
          type="button"
          onClick={() => setTrigger(false)}
        >
          Retour au site
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

Popup.propTypes = {
  trigger: Proptypes.bool.isRequired,
  setTrigger: Proptypes.func.isRequired,
  prenom: Proptypes.string.isRequired,
};
export default Popup;
