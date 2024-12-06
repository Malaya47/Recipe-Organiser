import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const recipeSubmitHandler = async (event) => {
    event.preventDefault();

    const recipeData = {
      recipeName,
      cuisineType,
      imageLink,
      ingredients: ingredients.split("\n"),
      instructions: instructions.split("\n"),
    };


    const response = await axios.post(
      "http://localhost:3000/recipe/addRecipe",
      recipeData
    );

   

    setRecipeName("");
    setCuisineType("");
    setImageLink("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <section>
      <Header />

      <section className="container mt-5">
        <h2 className="mb-4">Add Recipe</h2>
        <form onSubmit={recipeSubmitHandler} style={{ width: "20rem" }}>
          <div className="mb-3">
            <label className="form-label" htmlFor="recipeName">
              Name:
            </label>
            <input
              id="recipeName"
              className="form-control"
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="cuisineType">
              Cuisine Type:
            </label>
            <input
              id="cuisineType"
              className="form-control"
              type="text"
              value={cuisineType}
              onChange={(e) => setCuisineType(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="imageLink">
              Image Link:
            </label>
            <input
              id="imageLink"
              className="form-control"
              type="text"
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="ingredients">
              Ingredients:
            </label>
            <textarea
              id="ingredients"
              className="form-control"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="instructions">
              Instructions:
            </label>
            <textarea
              id="instructions"
              className="form-control"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>

          <button className="btn btn-primary mb-3" type="submit">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default AddRecipe;
