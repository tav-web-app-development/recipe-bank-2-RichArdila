import { Link } from "react-router-dom";

export default function NewRecipe () {
    return (
        <div>
            <h1>Add a New Recipe!</h1>
            <form>
                <label>Title:</label><br />
                <textarea type="text" rows={1} cols={50}/><br />
                <label>Description:</label><br />
                <textarea type="text" rows={2} cols={100}/><br />
                <label>Ingredients:</label><br />
                <textarea type="text" rows={10} cols={100}/><br />
                <label>Directions:</label><br />
                <textarea type="text" rows={15} cols={100}/><br />
                <button onClick={(e)=> e.preventDefault()}>
                    <Link to="/">Add Recipe</Link>{" "}</button>
            </form>
        </div>
    );
}