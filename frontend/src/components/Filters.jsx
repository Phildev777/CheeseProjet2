import React from "react";
import "./style/filters.css";

function Filter() {
  const [areFiltersVisible, setAreFiltersVisible] = React.useState(false);

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
                <input type="checkbox" id="cowMilk" name="cowMilk" />
              </div>
              <div className="inputContainer">
                <label htmlFor="goatMilk">Chèvre</label>
                <input type="checkbox" id="goatMilk" name="goatMilk" />
              </div>
              <div className="inputContainer">
                <label htmlFor="sheepMilk">Brebis</label>
                <input type="checkbox" id="sheepMilk" name="sheepMilk" />
              </div>
            </div>
            <hr />
            <div className="pasteType filter">
              <h4>Type de pâte</h4>
              <div className="inputContainer">
                <label htmlFor="softPaste">Pâte molle</label>
                <input type="checkbox" id="softPaste" name="softPaste" />
              </div>
              <div className="inputContainer">
                <label htmlFor="hardPaste">Pâte pressée</label>
                <input type="checkbox" id="hardPaste" name="hardPaste" />
              </div>
              <div className="inputContainer">
                <label htmlFor="freshPaste">Pâte fraîche</label>
                <input type="checkbox" id="freshPaste" name="freshPaste" />
              </div>
              <div className="inputContainer">
                <label htmlFor="bluePaste">Pâte persillée</label>
                <input type="checkbox" id="bluePaste" name="bluePaste" />
              </div>
              <button
                className="applyFilters"
                onClick={() => setAreFiltersVisible(!areFiltersVisible)}
                type="button"
              >
                Appliquer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
