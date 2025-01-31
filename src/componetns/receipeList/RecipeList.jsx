import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipes,
  addFavorite,
  removeFavorite,
  setSearchQuery,
  setFilter,
} from "../redux/recipeActions";
import RecipeCard from "./RecipeCard";
import "./style.css";

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes);
  const favorites = useSelector((state) => state.recipe.favorites);
  const loading = useSelector((state) => state.recipe.loading);
  const [searchQuery, setSearchQueryState] = useState("pizza");
  const [filter, setFilterState] = useState({
    diet: "",
    mealType: "",
  });
  const [dietLabels, setDietLabels] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);

  useEffect(() => {
    // search filed is empty warn alert
    if (searchQuery.trim() === "") {
      console.warn("Search query is empty");
      return;
    }
    //this called for the first time when the component is mounted
    dispatch(fetchRecipes(searchQuery, filter));

    // this store for the diet labels and meal types
    const allDietLabels = [];
    const allMealTypes = [];

    // recipes check arrau next forEach one by one get diet and meal type
    if (recipes && Array.isArray(recipes)) {
      recipes.forEach((recipe) => {
        if (recipe.recipe.dietLabels) {
          allDietLabels.push(...recipe.recipe.dietLabels);
        }
        if (recipe.recipe.mealType) {
          allMealTypes.push(...recipe.recipe.mealType);
        }
      });
    }

    setDietLabels([...new Set(allDietLabels)]);
    setMealTypes([...new Set(allMealTypes)]);
  }, [dispatch, searchQuery, filter]);

  // this is fav icon click this function get check any uniquer url true is remove otherwise add
  const handleFavoriteToggle = (recipe) => {
    if (favorites.some((fav) => fav.recipe.uri === recipe.recipe.uri)) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  // this is diet change that value dispatch call reduce that reduce return update that recipe is update is same for diet
  const handleDietChange = (event) => {
    const selectedDiet = event.target.value;
    dispatch(setFilter({ diet: selectedDiet }));
    dispatch(fetchRecipes("pizza", { diet: selectedDiet }));
  };

  // search for the recipe that value true that related recipe suggest here
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQueryState(query);
    dispatch(setSearchQuery(query));
  };

  // meals change that relate recipes show
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterState((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
    dispatch(setFilter({ ...filter, [name]: value }));
  };

  return (
    <div className="container">
      <div className="filters mt-5 d-flex justify-content-center flex-wrap">
        {/* search input field  */}
        <div className="search ms-5 mb-3 ">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="theme-color fw-bold"
            placeholder="Search for recipes..."
          />
        </div>

        {/* diet change */}
        <select
          onChange={handleDietChange}
          className="me-2 theme-color fw-bold"
        >
          <option value="">All Diets</option>
          {dietLabels.map((diet) => (
            <option key={diet} value={diet}>
              {diet}
            </option>
          ))}
        </select>
        {/* meat type dropdown */}
        <select
          name="mealType"
          value={filter.mealType}
          onChange={handleFilterChange}
          className="theme-color fw-bold"
        >
          <option value="">All Meal Types</option>
          {mealTypes.map((meal) => (
            <option key={meal} value={meal}>
              {meal}
            </option>
          ))}
        </select>
      </div>

      {/* that recipe list srecipeCard component props send this for recipe list */}
      <div className="recipe-list container mt-5 d-flex flex-wrap justify-content-center m-2">
        {loading ? (
          <div>Loading...</div>
        ) : (
          recipes?.map((recipe) => (
            <RecipeCard
              key={recipe.recipe.uri}
              recipe={recipe}
              onFavoriteToggle={handleFavoriteToggle}
              isFavorite={favorites.some(
                (fav) => fav.recipe.uri === recipe.recipe.uri
              )}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
