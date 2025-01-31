import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componetns/home/Home";
import Layout from "./Layout";
import RecipeDetails from "./componetns/detatilsRecipe/RecipeDetails";
import FavList from "./componetns/favList/FavList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/view-details" element={<RecipeDetails />} />
            <Route path="/favorite" element={<FavList />} />
          </Route>
          <Route path="*" element={<h2>404 page</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
