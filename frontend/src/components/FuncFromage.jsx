import React, { useState, useEffect } from "react";
import axios from "axios";
import MapCarteFromage from "./MapCarteFromage";
import "./style/fromages.css";
import "./style/filters.css";

export default function Fromages() {
  const [listOfCheeses, setListOfCheeses] = useState([]);
  const [cheeses, setCheeses] = useState([]);
  const [areFiltersVisible, setAreFiltersVisible] = React.useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/cheese`)
      .then((response) => response.data)
      .then((data) => {
        setListOfCheeses(data);
        setCheeses(data);
      })
      .catch((err) => console.warn(err));
  }, []);

  const [cowChecked, setCowChecked] = React.useState(false);
  const [goatChecked, setGoatChecked] = React.useState(false);
  const [sheepChecked, setSheepChecked] = React.useState(false);
  const [softChecked, setSoftChecked] = React.useState(false);
  const [hardChecked, setHardChecked] = React.useState(false);
  const [blueChecked, setBlueChecked] = React.useState(false);
  const [cancelButton, setCancelButton] = React.useState(false);
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
    setCheeses(filteredCheeses);
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
        {cancelButton && (
          <button
            className="cancelButton"
            onClick={() => {
              setCheeses(listOfCheeses);
              setCancelButton(false);
            }}
            type="button"
          >
            <span>X </span>Voir tout
          </button>
        )}
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
                  setCancelButton(true);
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
      <div className="mapfromage">
        {cheeses
          .sort((a, b) => {
            if (a.fromageName < b.fromageName) return -1;
            if (a.fromageName > b.fromageName) return 1;
            return 0;
          })
          .map((dat) => {
            return (
              <MapCarteFromage
                title={dat.fromageName}
                fromageImage={dat.fromageImage}
                origine={dat.origine}
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
