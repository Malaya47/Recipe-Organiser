import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Card = ({ recipies, getAllRecipies }) => {
  const deleteRecipeHandler = async (id) => {
    const response = await axios.delete(
      `https://recipe-organiser-backend-6m2pca759-malayas-projects-d405c886.vercel.app/${id}`
    );

    getAllRecipies();
  };

  return (
    <section className="container">
      <div className="row">
        {recipies?.map((recipe) => (
          <div
            key={recipe._id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
          >
            <div className="card h-100">
              <img
                src={recipe.imageLink}
                className="card-img-top"
                alt={recipe.recipeName}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.recipeName}</h5>
                <p>
                  <span className="fw-bold">Cuisine Type:</span>{" "}
                  {recipe.cuisineType}
                </p>
                <p>
                  <span className="fw-bold me-2">Ingredients:</span>
                  <span>
                    <Link to={`/recipeDetails/${recipe._id}`}>
                      See Recipe {">"}{" "}
                    </Link>
                  </span>
                </p>

                <p>
                  <span className="fw-bold me-2">Instructions:</span>
                  <span>
                    <Link to={`/recipeDetails/${recipe._id}`}>
                      See Recipe {">"}{" "}
                    </Link>
                  </span>
                </p>

                <button
                  onClick={() => deleteRecipeHandler(recipe._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
