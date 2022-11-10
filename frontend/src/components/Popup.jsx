import React from "react";
import "./style/Popup.css";
import Proptypes from "prop-types";

function Popup({ trigger, setTrigger }) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <p className="popup-title">Un grand merci</p>
        <h3 className="popup-diag">
          Votre message nous a été livré sur un plateau, nous allons le déguster
          avec gourmandise.{" "}
        </h3>
        <button
          className="close-btn"
          type="button"
          onClick={() => setTrigger(false)}
        >
          Retour de site
        </button>
        {/* {children} */}
      </div>
    </div>
  ) : (
    ""
  );
}

Popup.propTypes = {
  trigger: Proptypes.bool.isRequired,
  setTrigger: Proptypes.func.isRequired,
  // children: Proptypes.string.isRequired,
};
export default Popup;
