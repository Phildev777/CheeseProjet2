import React from "react";
import MapCarteRecette from "./MapCarteRecette";
import "./style/recettes.css";

export default function Recettes() {
  const data = [
    {
      title: "recette 1",
      description: "toto",
    },
    {
      title: "recette 2",
      description: "tot",
    },
    {
      title: "recette 3",
      description: "to",
    },
    {
      title: "recette 4 ",
      description: "t",
    },
    {
      title: "recette 5 ",
      description: "t",
    },
    {
      title: "recette 6",
      description: "t",
    },
  ];

  return (
    <div>
      <div className="CtRecette">
        {data.map((dat) => {
          return (
            <MapCarteRecette title={dat.title} description={dat.decription} />
          );
        })}
      </div>
    </div>
  );
}
