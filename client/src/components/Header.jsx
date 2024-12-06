import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid container">
          <a className="navbar-brand">Recipe Organiser</a>
          <div className="d-flex gap-3">
            <div>
              <NavLink className="" to={"/"}>
                Recipes
              </NavLink>
            </div>
            <div>
              <NavLink to={"/addRecipe"}>Add Recipe</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
