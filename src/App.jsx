import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    const fetchMainData = async () => {
      const response = await fetch("https://api.sampleapis.com/recipes/recipes");
      const data =  await response.json();
      setRecipes(data);
      };

      fetchMainData();

    return () => console.log("unmounted");
  }, []);
  /*function filterRecipesComputeIntensive(recipes) {
    const now = performance.now();
    while (performance.now() - now < 8000) {
      //spin()
    }
  return recipes;
  
  }*/
  
  // const filteredRecipes = useMemo(()=> filterRecipesComputeIntensive(recipes), [recipes]);
  
  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };
  
  
  return (
    <>
      <Navbar />
      {recipes.map((data) => (
        <RecipeContainer recipe={data} key={data.id} onDelete={handleDeleteRecipe}/>
      ))}
      <Footer />
    </>
  );
}

export default App;
