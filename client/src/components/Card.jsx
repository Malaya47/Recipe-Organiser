import React from "react";

const Card = () => {
  return (
    <section className="container">
      <div className="row gap-2">
        <div className="card col-3 ps-0 pe-0" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/23897672/pexels-photo-23897672/free-photo-of-curry-chicken-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Chicken Curry</h5>
            <p className="fw-bold">Cuisine Type:</p>
            <p className="fw-bold">Ingredients:</p>
            <p className="fw-bold">Instructions:</p>

            <button className="btn btn-danger">Delete</button>
          </div>
        </div>

        <div className="card col-3 ps-0 pe-0" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/23897672/pexels-photo-23897672/free-photo-of-curry-chicken-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Chicken Curry</h5>
            <p className="fw-bold">Cuisine Type:</p>
            <p className="fw-bold">Ingredients:</p>
            <p className="fw-bold">Instructions:</p>

            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
