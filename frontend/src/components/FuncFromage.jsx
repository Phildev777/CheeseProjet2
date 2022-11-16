import { useState, useEffect } from "react";
import axios from "axios";
import MapCarteFromage from "./MapCarteFromage";
import "./style/fromages.css";

export default function Fromages() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await axios("http://localhost:5006/api/cheese");

      setRecipe(result.data);
    };
    fetchRecipe();
  }, []);

  return (
    <div>
      <div className="mapfromage">
        {recipe.map((dat) => {
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
