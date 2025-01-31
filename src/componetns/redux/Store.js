import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import recipeReducer from "./recipeReducer";

//add one or more reducer function in combineReducers
const rootReducer = combineReducers({
  recipe: recipeReducer,
});

// create the stroe and apply the middleware for api call or async function (thunk)
const store = createStore(
  rootReducer, //combine reducers
  composeWithDevTools(applyMiddleware(thunk)) // tool is used for debugging
);

export default store;
