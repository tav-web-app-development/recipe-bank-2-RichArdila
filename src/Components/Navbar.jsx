import { Link } from "react-router-dom";
import newRecipe from "./NewRecipe";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1>Recipe App</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to="/newRecipe">New Recipe</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
