# Recipe App

This is a recipe management application where users can search, filter, and view detailed recipes. It also allows users to save their favorite recipes.

## Features
- **Home Page**: Displays a list of recipes with a navbar for navigation.
- **Recipe List**: Allows users to search and filter recipes.
- **Recipe Details**: Shows detailed information about a selected recipe, including ingredients and servings (note: preparation details are not included due to unavailable API data).
- **Favorites**: Users can add recipes to their favorites list and view them later.

## Folder Structure

### `src/` -> ### components
- **`app.js`**: Includes the router and sets the home page as the index page.
- **`Layout.js`**: Contains the layout of the page including the navbar.
## home folder : 
- **`home.jsx`**: The home page component that imports the `RecipeList.js` component.
## RecipeList folder
- **`RecipeList.js`**: Handles displaying the list of recipes, including search and filter 
- **`RecipeCard.js`**: Displays individual recipe details such as image, title, and labels.functionality.
## detailsRecipe folder
- **`details.js`**: Contains the details component for showing selected recipe details, including ingredients and servings (preparation is not displayed due to API limitations).
## favList folder
- **`favList.js`**: Displays the user's favorite recipes.
## header folder 
- ** `Nav.js`** : Display the navbar for home routing and fav list(count) routing.
  
### `redux/`
- **`actionTypes.js`**: Contains constants for unique action types.
- **`recipeAction.js`**: Contains functions to fetch data and dispatch actions to the reducer.
- **`recipeReducer.js`**: Handles the actions and updates the state of the application accordingly.

### `store.js`
- Configures the Redux store and includes middleware to handle asynchronous actions and API requests.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>

2.Install dependencies  : npm install

3.Start the development server : npm start

### Technologies Used
React.js
Redux
Axios (for API requests)
React Router
    
