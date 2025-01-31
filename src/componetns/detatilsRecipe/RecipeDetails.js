import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/recipeActions";
import "./style.css";

const RecipeDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipe.favorites);
  const { recipe } = location.state || {};

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const isFavorite = favorites.some(
    (fav) => fav.recipe.uri === recipe.recipe.uri
  );

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <div className="recipe-details-container">
      <div className="rectangle"> </div>
      <div className="recipe-details container">
        <div className="img-container">
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        </div>
        <div className="mt-5">
          <h1 className="theme-color">{recipe.recipe.label}</h1>
          {recipe.recipe.dietLabels.length > 0 && (
            <p>
              <strong>Diet Labels:</strong>{" "}
              {recipe.recipe.dietLabels.join(", ")}
            </p>
          )}

          <h3 className="mt-5">Ingredients:</h3>
          <ul>
            {recipe.recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>

          <h3>Servings:</h3>
          <p>{recipe.recipe.yield}</p>

          <button
            className={`favorite-btn ${
              isFavorite ? "is-favorite remove-btn" : "add-btn"
            }`}
            onClick={handleFavoriteToggle}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
