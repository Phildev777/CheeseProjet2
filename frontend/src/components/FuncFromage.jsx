import React from "react";
import MapCarteFromage from "./MapCarteFromage";
import "./style/fromages.css";

export default function Fromage() {
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
  ];

  return (
    <div>
      <div className="mapfromage">
        {data.map((dat) => {
          return (
            <MapCarteFromage title={dat.title} description={dat.decription} />
          );
        })}
      </div>
    </div>
  );
}
