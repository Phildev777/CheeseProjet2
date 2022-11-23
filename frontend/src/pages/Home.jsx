import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../components/Carousel";
import "../components/style/home.css";
import Staff from "../components/Staff";
import Formulaire from "../components/Formulaire";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      document.getElementById("contact").scrollIntoView();
    }
  }, [location]);

  return (
    <div className="homepage">
      <Carousel />
      <h3 className="texthome">Qui sommes nous ?</h3>
      <Staff />
      <br id="contact" />
      <h3 className="texthome">Nous contacter</h3>
      <p className="textcontact">
        Nous nous tenons à votre disposition pour toute suggestion ou demande de
        conseil.
      </p>
      <p className="textcontact">
        Nous nous engageons à vous répondre dans les meilleurs délais.
      </p>
      <Formulaire />
    </div>
  );
}

export default Home;
