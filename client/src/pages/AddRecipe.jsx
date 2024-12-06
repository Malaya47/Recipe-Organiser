import React from "react";
import Header from "../components/Header";

const AddRecipe = () => {
  return (
    <section>
      <Header />

      <section className="container mt-5">
        <h2 className="mb-4">Add Recipe</h2>
        <form style={{ width: "20rem" }}>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Name:
            </label>
            <input className="form-control" type="text" />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Cuisine Type:
            </label>
            <input className="form-control" type="text" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Image Link:
            </label>
            <input className="form-control" type="text" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Ingredients:
            </label>
            <textarea className="form-control"></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Instructions:
            </label>
            <textarea className="form-control"></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default AddRecipe;
