const express = require("express");
const cors = require("cors");

const { intializeDatabase } = require("./db/db.connect");
const { RecipeSecond } = require("./Models/recipe.model");

intializeDatabase();

const app = express();

const corsOptions = {
  origin: "*",
  Credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("express server");
});

app.post("/recipe/addRecipe", async (req, res) => {
  try {
    const newRecipe = req.body;
    const createRecipe = new RecipeSecond(newRecipe);
    const savedRecipe = await createRecipe.save();

    if (savedRecipe) {
      res
        .status(201)
        .json({ message: "recipe saved successfully", savedRecipe });
    } else {
      res.status(400).json({ message: "Unable to save recipe" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured while adding the recipe", error });
  }
});

app.get("/recipes", async (req, res) => {
  try {
    const recipies = await RecipeSecond.find();

    if (recipies) {
      res.status(200).json({ messsage: "recipies found", recipies });
    } else {
      res.status(404).json({ message: "No recipes are found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured while geting recipies", error });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
