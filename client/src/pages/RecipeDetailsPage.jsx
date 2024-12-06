import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetailsPage = () => {
  const [recipeDetails, setRecipeDetails] = useState({});

  const { id } = useParams();

  const getRecipeById = async (id) => {
    const response = await axios.get(
      `https://recipe-organiser-backend-three.vercel.app/recipe/id${id}`
    );

    setRecipeDetails(response?.data?.recipe);
  };

  useEffect(() => {
    getRecipeById(id);
  }, []);

  return (
    <div>
      <Header />
      <section className="container mt-4">
        <h2>{recipeDetails?.recipeName}</h2>
        <div className="card mb-3" style={{ maxWidth: "1000px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={recipeDetails.imageLink}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body ms-2">
                <h3 className="card-title">
                  Cuisine: {recipeDetails?.cuisineType}
                </h3>

                <h4>Ingredients:</h4>

                <p className="card-text">
                  {recipeDetails?.ingredients?.join(", ")}
                </p>

                <h4>Instructions:</h4>

                <p className="card-text">
                  <ol className="ps-2">
                    {recipeDetails?.instructions?.map((instruction, index) => (
                      <li key={index} className="list-group-item border-0">
                        {index + 1}. {instruction}
                      </li>
                    ))}
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetailsPage;
