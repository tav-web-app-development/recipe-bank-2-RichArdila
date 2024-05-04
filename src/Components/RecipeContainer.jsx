import { useState } from "react";

/* eslint-disable react/prop-types */
function RecipeContainer({ recipe, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [directions, setDirections] = useState(recipe.directions);

  const handleEdit = () => {
    setIsEditing(true);
    console.log("Edit clicked for recipe", recipe);
  };

  const handleDelete = () => {
    onDelete(recipe.id);
    console.log("Delete clicked for recipe", recipe);
  };

  const handleSave = () => {
    console.log("Save clicked for recipe", {title, description, ingredients, directions});
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                rows={1}
                cols={50}
            />
          ) : (
            title
          )}
            
            </h2>
          <p>
            <strong>Description:</strong>{" "}
            {isEditing ? (
              <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              cols={100}
              />
            ) : (
              description
            )}
  
          </p>
          <p>
            <strong>Ingredients:</strong>{" "} 
            {isEditing ? (
            <textarea 
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={10}
            cols={100}
             />
            ) : (
              ingredients
            )}
          </p>
          <p>
            <strong>Directions:</strong>{" "} 
            {isEditing ? (
             <textarea 
             value={directions}
             onChange={(e) => setDirections(e.target.value)}
             rows={15}
             cols={100}

             /> 
            ) : (
              directions
            )}            
          </p>
          <img
            src={recipe.photoUrl}
            alt={title}
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
