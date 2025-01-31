import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe, onFavoriteToggle, isFavorite }) => {
  const navigate = useNavigate();
  const truncateDescription = (desc, maxLength) => {
    if (desc.length > maxLength) {
      return desc.substring(0, maxLength) + "...";
    }
    return desc;
  };

  const handleView = (recipe) => {
    navigate(`/view-details`, { state: { recipe: recipe } });
  };
 
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); //this use for avoid parent click
    onFavoriteToggle(recipe);
  };

  return (
    <div className="recipe-card" onClick={() => handleView(recipe)}>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <h3>{truncateDescription(recipe.recipe.label, 18)}</h3>
      <p>{recipe.recipe.dietLabels.join(", ")}</p>
      <span onClick={handleFavoriteClick}>
        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
      </span>
    </div>
  );
};

export default RecipeCard;
