import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid container">
          <NavLink to={"/"} className="navbar-brand">
            Recipe Organiser
          </NavLink>
          <div className="d-flex gap-3">
            <div>
              <NavLink
                className="text-decoration-none text-primary fs-5"
                to={"/"}
              >
                Recipes
              </NavLink>
            </div>
            <div>
              <NavLink
                className="text-decoration-none text-primary fs-5"
                to={"/addRecipe"}
              >
                Add Recipe
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
