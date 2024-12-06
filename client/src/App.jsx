import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [recipies, setRecipies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getAllRecipies = async () => {
    const response = await axios.get("http://localhost:3000/recipes");

    setRecipies(response.data.recipies);
  };

  useEffect(() => {
    getAllRecipies();
  }, []);

  const searchValueChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const finalRecipiesToDisplay = recipies.filter((recipe) => {
    const searchVal = searchValue
      ? recipe.recipeName.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    return searchVal;
  });

  return (
    <>
      <Header />
      {/* search bar */}
      <section className="container">
        <div className="input-group input-group-sm mb-3 w-50">
          <input
            onChange={searchValueChangeHandler}
            type="search"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search by recipe name..."
          />
        </div>
      </section>

      <h2 className="container">All Recipes:</h2>

      <section>
        <Card recipies={finalRecipiesToDisplay} />
      </section>
    </>
  );
}

export default App;
