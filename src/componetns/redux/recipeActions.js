import axios from "axios";
import {
  FETCH_RECIPES,
  SET_LOADING,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_ERROR,
  SET_SEARCH_QUERY,
  SET_FILTER,
} from "./actionTypes";

// this fetchRecipes two argument search , query is true that call

export const fetchRecipes = (searchQuery, filter) => async (dispatch) => {
  dispatch(setLoading(true));  // loading some data get time delay
  try {
    // that usel call recipe data get from api
    const response = await axios.get(
      `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&${
        searchQuery && `q=${searchQuery}`
      }`
    );
   
    // that res data include hits recipe store filterRecipes
    let filteredRecipes = response.data.hits;

    console.log(filter.diet);
    // arg filter true that conditon apply filter
    if (filter) {
      if (filter.diet) {
        filteredRecipes = filteredRecipes.filter((recipe) =>
          recipe.recipe.dietLabels.includes(filter.diet)
        );
      }
      if (filter.mealType) {
        filteredRecipes = filteredRecipes.filter((recipe) =>
          recipe.recipe.mealType.includes(filter.mealType)
        );
      }
    }
  
    // that action send for reducers 
    dispatch({
      type: FETCH_RECIPES,
      payload: filteredRecipes,
    });
  } catch (error) {
    dispatch(setError("Failed to fetch recipes"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const addFavorite = (recipe) => ({
  type: ADD_FAVORITE,
  payload: recipe,
});

export const removeFavorite = (recipe) => ({
  type: REMOVE_FAVORITE,
  payload: recipe,
});

export const setError = (message) => ({
  type: SET_ERROR,
  payload: message,
});

// Action to set search query
export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

// Action to set filter
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
