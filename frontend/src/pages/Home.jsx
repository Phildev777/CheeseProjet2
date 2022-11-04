import React from "react";
import MobileTitle from "@components/MobileTitle";
import Carousel from "../components/Carousel";
import "../components/style/home.css";
import Staff from "../components/Staff";

function Home() {
  return (
    <div className="homepage">
      <MobileTitle />
      <Carousel />
      <h3 className="texthome">Qui sommes nous ?</h3>
      <Staff />
      <h3 className="texthome">Nous contacter</h3>
      <p className="textcontact">
        Nous nous tenons à votre disposition pout toute suggestion ou demande de
        conseil.
      </p>
      <p className="textcontact">
        Nous nous engageons à vous répondre dans les meilleurs délais.
      </p>
    </div>
  );
}

export default Home;
