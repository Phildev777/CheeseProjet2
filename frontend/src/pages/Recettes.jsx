import React from "react";
import Recettes from "@components/FuncCarteRecette";
import Header from "@components/Header.jsx";

function Recette() {
  return (
    <div>
      <Header
        pageName="Nos Recettes"
        imageUrl="https://assets.afcdn.com/recipe/20161130/59380_w1024h768c1cx2808cy1872.webp"
      />

      <Recettes />
    </div>
  );
}

export default Recette;
