import { useState, useEffect } from "react";
import axios from "axios";
import "./style/recettes.css";

function AppelApi() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await axios(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipe`
      );

      setRecipe(result.Recipe);
    };
    fetchRecipe();
  }, []);
  return (
    <div>
      {recipe.map((item) => (
        <div key={item.id}>
          <img className="PhRecette" src={item.recipeImg} alt="test" />

          <div id="CtReverse">
            <h3 className="CtBack" id="Charact1">
              {item.recipeName}
            </h3>
            <p className="CtBack" id="Charact2">
              <a href="http://localhost:3000/Fromages">{item.cheeseUsed}</a>
            </p>
            <p className="CtBack" id="Charact3">
              {item.ingredients}
            </p>
            <p className="CtBack" id="Charact4">
              <a href={item.recipeLink}>vidéos</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AppelApi;
