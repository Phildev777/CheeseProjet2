import { useState, useEffect } from "react";
import axios from "axios";
import MapCarteRecette from "./MapCarteRecette";
import "./style/recettes.css";

export default function Recettes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await axios("http://localhost:5000/api/recipe");

      setRecipe(result.data);
    };

    fetchRecipe();
  }, []);

  return (
    <div>
      <div className="CtRecette">
        {recipe.map((dat) => {
          return (
            <MapCarteRecette
              key={dat.id}
              recipeName={dat.recipeName}
              recipeImg={dat.recipeImg}
              cheeseUsed={dat.cheeseUsed}
              ingredients={dat.ingredients}
              recipeLink={dat.recipeLink}
            />
          );
        })}
      </div>
    </div>
  );
}
