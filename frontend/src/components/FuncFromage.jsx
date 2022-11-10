import React from "react";
import MapCarteFromage from "./MapCarteFromage";
import "./style/fromages.css";

export default function Fromage() {
  const data = [
    {
      title: "Gruyère français",
      typeDeLait: "vache cru",
      typeDePate: "pressée cuite",
      description:
        "Le gruyère français est un fromage fabriqué en Franche-Comté et en Savoie. C'est un fromage au lait cru de vache, à pâte pressée cuite, dont la meule a un poids moyen de 42 kg. Il contient des trous, particularité qui provient de la température pendant la phase de maturation, plus élevée pour le gruyère de France que pour le gruyère suisse. L'appellation Gruyère de France est préservée par le biais d'une Indication Géographique Protégée européenne. Sa couleur et son goût varient en fonction de l'alimentation des vaches, qui influe sur la composition du lait.",
    },
    {
      title: "Bleu d'Auvergne",

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
  ];

  return (
    <div>
      <div className="mapfromage">
        {data.map((dat) => {
          return (
            <MapCarteFromage
              title={dat.title}
              description={dat.description}
              typeDeLait={dat.typeDeLait}
              typeDePate={dat.typeDePate}
            />
          );
        })}
      </div>
    </div>
  );
}
