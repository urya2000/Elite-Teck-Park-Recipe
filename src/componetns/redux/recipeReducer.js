// recipeReducer.js
import {
  FETCH_RECIPES,
  SET_LOADING,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_ERROR,
  SET_SEARCH_QUERY,
  SET_FILTER,
} from "./actionTypes";

const initialState = {
  recipes: [],
  favorites: [],
  loading: false,
  searchQuery: "",
  filter: "",
  error: null,
};

// switch case use check the type is same this fun is excute otherwise return err 
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        error: null,
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (recipe) => recipe.recipe.uri !== action.payload.recipe.uri
        ),
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default recipeReducer;
