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
    ingredients: [
      {
        type: String
      }
    ],
    instructions: [
      {
        type: String
      }
    ],
  },
  { timestamps: true }
);

const RecipeSecond = mongoose.model("RecipeSecond", recipeSchema);

module.exports = { RecipeSecond };
