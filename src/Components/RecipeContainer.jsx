import { useState } from "react";

/* eslint-disable react/prop-types */
function RecipeContainer({ recipe, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [EditRecipe, setEditRecipe] = useState({ ...recipe})
  //const [title, setTitle] = useState(recipe.title);
  //const [description, setDescription] = useState(recipe.description);
  //const [ingredients, setIngredients] = useState(recipe.ingredients);
  //const [directions, setDirections] = useState(recipe.directions);

  const handleChange = (field, value) => {
    setEditRecipe(prevState => ({...prevState, [field]:value}));
  };

  const handleEdit = () => {
    setIsEditing(true);
    console.log("Edit clicked for recipe", recipe);
  };

  const handleDelete = () => {
    onDelete(recipe.id);
    console.log("Delete clicked for recipe", recipe);
  };

  const handleSave = () => {
    console.log("Save clicked for recipe", {recipe});
    setIsEditing(false);
  };

  // console.log("Valor de description: ", recipe.description);

  return (
    <>
      <div
        className="recipe-container"
        onClick={() => {
          document.title = recipe.title;
        }}
      >
        <div className="recipe">
          {isEditing ? (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={()=> setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          )}
        
          <h2>
            {isEditing ? (
              <textarea
                value={EditRecipe.title}
                onChange={(e) => handleChange('title', e.target.value)}
                rows={1}
                cols={50}
            />
          ) : (
            EditRecipe.title
          )}
            
            </h2>
          <p>
            <strong>Description:</strong>{" "}
            {isEditing ? (
              <textarea
              value={EditRecipe.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={2}
              cols={100}
              />
            ) : (
              EditRecipe.description
            )}
  
          </p>
          <p>
            <strong>Ingredients:</strong>{" "} 
            {isEditing ? (
            <textarea 
            value={EditRecipe.ingredients}
            onChange={(e) => handleChange('ingredients', e.target.value)}
            rows={10}
            cols={100}
             />
            ) : (
              EditRecipe.ingredients
            )}
          </p>
          <p>
            <strong>Directions:</strong>{" "} 
            {isEditing ? (
             <textarea 
             value={EditRecipe.directions}
             onChange={(e) => handleChange('directions', e.target.value)}
             rows={15}
             cols={100}

             /> 
            ) : (
              EditRecipe.directions
            )}            
          </p>
          <img
            src={recipe.photoUrl}
            alt={EditRecipe.title}
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
