import React, { useEffect, useState } from "react";
import "./style/filters.css";
import axios from "axios";

function Filter() {
  const [cheeses, setCheeses] = useState([
    {
      id: 1,
      fromageName: "Gruyère français",
      fromageImage:
        "https://www.radiofrance.fr/s3/cruiser-production/2012/12/845baa51-4423-11e2-a7b7-782bcb76618d/870x489_gruyere-food-pictures.webp",
      typeDeLait: "vache cru",
      typeDePate: "pressée cuite",
      origine: "Franche-Comté",
      description:
        "Le gruyère français est un fromage fabriqué en Franche-Comté et en Savoie. C'est un fromage au lait cru de vache, à pâte pressée cuite, dont la meule a un poids moyen de 42 kg. Il contient des trous, particularité qui provient de la température pendant la phase de maturation, plus élevée pour le gruyère de France que pour le gruyère suisse. L'appellation Gruyère de France est préservée par le biais d'une Indication Géographique Protégée européenne. Sa couleur et son goût varient en fonction de l'alimentation des vaches, qui influe sur la composition du lait.",
    },

    {
      id: 2,
      fromageName: "Bleu d'Auvergne",
      fromageImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Wikicheese_Clermont-Ferrand_-_Bleu_d%27Auvergne_20220825-02.jpg/390px-Wikicheese_Clermont-Ferrand_-_Bleu_d%27Auvergne_20220825-02.jpg",
      typeDeLait: "vache cru",
      typeDePate: "persillée",
      origine: "Puy-de-Dôme",
      description:
        "Le bleu d’Auvergne est un fromage à pâte persillée fabriqué en France dans le Massif central à partir de lait de vache. Son persillage allant du bleu au bleu noir. Son appellation d'origine bénéficie de protections depuis 1975. Sa meilleure période de consommation s'étend de juin à décembre.",
    },
    {
      id: 3,
      fromageName: "Munster",
      fromageImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Munster_01.jpg/390px-Munster_01.jpg",
      typeDeLait: "vache cru",
      typeDePate: "molle à croûte lavée",
      origine: "Bas-Rhin",
      description:
        "Le munster et le munster-géromé (ou encore minschterkäs en francique lorrain ou minschterkaas en alsacien) constituent une appellation d'origine désignant un fromage de lait de vache de l'Est de la France, qui est protégée nationalement depuis 1969 par une appellation d'origine contrôlée (AOC) et dans l'ensemble des pays de l'Union européenne depuis 1996 par une appellation d'origine protégée (AOP). Sa meilleure période de consommation s'étend de mai à octobre.",
    },
    {
      id: 4,
      fromageName: "Pont-l'évèque",
      fromageImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pont-l%27%C3%89v%C3%AAque_03.jpg/390px-Pont-l%27%C3%89v%C3%AAque_03.jpg",
      typeDeLait: "vache cru",
      typeDePate: "molle à croûte lavée",
      origine: "Calvados",
      description:
        "Le pont-l’évêque est un fromage à pâte molle à croûte lavée de lait de vache produit et affiné en France sur le territoire de la Normandie historique. Il est protégé par une appellation d'origine. Sa meilleure période de consommation s'étend de juin à mars.",
    },
    {
      id: 5,
      fromageName: "Tomme des Pyrénées",
      fromageImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tomme_noire_des_Pyrenees.jpg/390px-Tomme_noire_des_Pyrenees.jpg",
      typeDeLait: "vache cru",
      typeDePate: "pressée non cuite",
      origine: "Pyrénées Atlantique, Hautes-Pyrénées, Ariège",
      description:
        "Tomme des Pyrénées est une dénomination protégée par Indication géographique protégée (IGP) désignant un fromage au lait de vache cru et pasteurisé fabriqué dans les Pyrénées françaises.",
    },
  ]);

  const [areFiltersVisible, setAreFiltersVisible] = React.useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cheese")
      .then((response) => response.data)
      .then((data) => {
        setCheeses(data);
      });
  }, [areFiltersVisible]);

  const [cowChecked, setCowChecked] = React.useState(false);
  const [goatChecked, setGoatChecked] = React.useState(false);
  const [sheepChecked, setSheepChecked] = React.useState(false);
  const [softChecked, setSoftChecked] = React.useState(false);
  const [hardChecked, setHardChecked] = React.useState(false);
  const [blueChecked, setBlueChecked] = React.useState(false);
  const applyFilters = () => {
    let filteredMilkCheeses = [];
    if (cowChecked) {
      filteredMilkCheeses = filteredMilkCheeses.concat(
        cheeses.filter((cheese) => cheese.typeDeLait.includes("vache"))
      );
    }
    if (goatChecked) {
      filteredMilkCheeses = filteredMilkCheeses.concat(
        cheeses.filter((cheese) => cheese.typeDeLait.includes("chèvre"))
      );
    }
    if (sheepChecked) {
      filteredMilkCheeses = filteredMilkCheeses.concat(
        cheeses.filter((cheese) => cheese.typeDeLait.includes("brebis"))
      );
    }
    let filteredCheeses = [];
    if (!cowChecked && !sheepChecked && !goatChecked) {
      filteredMilkCheeses = cheeses;
    }
    if (softChecked) {
      filteredCheeses = filteredCheeses.concat(
        filteredMilkCheeses.filter((cheese) =>
          cheese.typeDePate.includes("molle")
        )
      );
    }
    if (hardChecked) {
      filteredCheeses = filteredCheeses.concat(
        filteredMilkCheeses.filter((cheese) =>
          cheese.typeDePate.includes("pressée")
        )
      );
    }
    if (blueChecked) {
      filteredCheeses = filteredCheeses.concat(
        filteredMilkCheeses.filter((cheese) =>
          cheese.typeDePate.includes("persillée")
        )
      );
    }
    if (!softChecked && !hardChecked && !blueChecked) {
      filteredCheeses = filteredMilkCheeses;
    }
    console.warn(filteredCheeses);
  };
  const clearFilters = () => {
    setCowChecked(false);
    setGoatChecked(false);
    setSheepChecked(false);
    setSoftChecked(false);
    setHardChecked(false);
    setBlueChecked(false);
  };
  return (
    <div>
      <div className="buttonContainer">
        <button
          className="showFilters"
          onClick={() => setAreFiltersVisible(!areFiltersVisible)}
          type="button"
        >
          Voir les filtres
        </button>
      </div>
      {areFiltersVisible && (
        <div className="allGrey">
          <div className="filters">
            <button
              className="closeFilters"
              onClick={() => setAreFiltersVisible(!areFiltersVisible)}
              type="button"
            >
              X
            </button>
            <h2>Filtrer par : </h2>
            <div className="milkType filter">
              <h4>Type de lait</h4>
              <div className="inputContainer">
                <label htmlFor="cowMilk">Vache</label>
                <input
                  type="checkbox"
                  id="cowMilk"
                  name="cowMilk"
                  checked={cowChecked}
                  onChange={() => setCowChecked(!cowChecked)}
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="goatMilk">Chèvre</label>
                <input
                  type="checkbox"
                  id="goatMilk"
                  name="goatMilk"
                  checked={goatChecked}
                  onChange={() => setGoatChecked(!goatChecked)}
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="sheepMilk">Brebis</label>
                <input
                  type="checkbox"
                  id="sheepMilk"
                  name="sheepMilk"
                  checked={sheepChecked}
                  onChange={() => setSheepChecked(!sheepChecked)}
                />
              </div>
            </div>
            <hr />
            <div className="pasteType filter">
              <h4>Type de pâte</h4>
              <div className="inputContainer">
                <label htmlFor="softPaste">Pâte molle</label>
                <input
                  type="checkbox"
                  id="softPaste"
                  name="softPaste"
                  checked={softChecked}
                  onChange={() => setSoftChecked(!softChecked)}
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="hardPaste">Pâte pressée</label>
                <input
                  type="checkbox"
                  id="hardPaste"
                  name="hardPaste"
                  checked={hardChecked}
                  onChange={() => setHardChecked(!hardChecked)}
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="bluePaste">Pâte persillée</label>
                <input
                  type="checkbox"
                  id="bluePaste"
                  name="bluePaste"
                  checked={blueChecked}
                  onChange={() => setBlueChecked(!blueChecked)}
                />
              </div>
              <button
                className="applyFilters"
                onClick={() => {
                  setAreFiltersVisible(!areFiltersVisible);
                  applyFilters();
                  clearFilters();
                }}
                type="button"
              >
                Appliquer
              </button>
              <button
                className="clearFilters"
                onClick={() => clearFilters()}
                type="button"
              >
                Vider les filtres
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
