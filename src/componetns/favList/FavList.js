import React from "react";
import { useNavigate } from "react-router-dom";
import { removeFavorite } from "../redux/recipeActions";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "../receipeList/RecipeCard.jsx";

const FavList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipe.favorites);

  const handleFavoriteToggle = (recipe) => {
    if (favorites.some((fav) => fav.recipe.uri === recipe.recipe.uri)) {
      dispatch(removeFavorite(recipe));
    }
  };
    
  const handleNav = () => navigate("/");

  return (
    <div className="favorites-list">
      <h2 className="mt-5 text-center">Your Favorite Recipes</h2>
      <div className="recipe-list">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <RecipeCard
              key={favorite.recipe.uri}
              recipe={favorite}
              onFavoriteToggle={handleFavoriteToggle}
              isFavorite={true}
            />
          ))
        ) : (
          <div className="text-center w-100">
            <p className="text-center">No favorites yet!</p>
            <button className="btn btn-success" onClick={handleNav}>
              View Recipe
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavList;
