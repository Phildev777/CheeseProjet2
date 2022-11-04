import React from "react";
import Carousel from "../components/Carousel";
import "../components/style/home.css";
import Staff from "../components/Staff";
import Formulaire from "../components/Formulaire";

function Home() {
  return (
    <div className="homepage">
      <h1 className="header">Fromiton</h1>
      <Carousel />
      <p className="texthome">Qui sommes nous ?</p>
      <Staff />
      <p className="texthome">Nous conacter</p>
      <p className="textcontact">
        Nous nous tenons à votre disposition pout toute suggestion ou demande de
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
