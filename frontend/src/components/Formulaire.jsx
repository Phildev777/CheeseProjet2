import React, { useState } from "react";
import "./style/formulaire.css";
import Popup from "./Popup";

function Formulaire() {
  const [nom, userNom] = useState("");
  const [prenom, userPrenom] = useState("");
  const [mail, userMail] = useState("");
  const [message, userMessage] = useState("");
  const [btnPopup, setBtnPopup] = useState(false);

  const display = (e) => {
    e.preventDefault();
    console.warn(`${nom}, ${prenom}, ${mail}, ${message}`);
  };

  return (
    <div className="formGlobal">
      <form className="formContainer">
        <div className="formId">
          <label htmlFor="nom">
            <input
              type="text"
              id="Nom"
              placeholder="Nom"
              value={nom}
              onChange={(e) => userNom(e.target.value)}
            />
          </label>
          <label htmlFor="prenom">
            <input
              type="text"
              id="Prénom"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => userPrenom(e.target.value)}
            />
          </label>
        </div>
        <label htmlFor="mail">
          <input
            className="formMail"
            type="text"
            placeholder="Mail"
            value={mail}
            onChange={(e) => userMail(e.target.value)}
          />
        </label>
        <label htmlFor="message">
          <textarea
            className="formMessage"
            type="text"
            placeholder="Votre message..."
            value={message}
            onChange={(e) => userMessage(e.target.value)}
          />
        </label>
        <button
          className="formButton"
          type="submit"
          onClick={(e) => {
            setBtnPopup(true);
            display(e);
          }}
        >
          Cheese !
        </button>
      </form>
      <Popup trigger={btnPopup} setTrigger={setBtnPopup} prenom={`${prenom}`} />
    </div>
  );
}

export default Formulaire;
