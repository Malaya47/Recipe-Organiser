const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
    },
    cuisineType: {
      type: String,
    },
    imageLink: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    instructions: {
      type: String
    }
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = { Recipe };
