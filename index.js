const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
	res.send("Chinese CookBook Server is running");
});

app.get("/chefs", (req, res) => {
	res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
	const id = req.params.id;

	const matchedChefRecipies = recipes.find((recipe) => recipe._id === id);
	const matchedChef = chefs.chefs.find((chef) => chef._id === id);
	matchedChef.recipes = matchedChefRecipies.recipes;
	res.send(matchedChef);
	console.log(matchedChefRecipies);
});

app.get("/recipes", (req, res) => {
	res.send(recipes);
});

app.get("/today-recipes", (req, res) => {
	const index = Math.floor(Math.random() * 5);
	const todayRecipes = recipes.map((recipe) => {
		const { name, image } = recipe.recipes[index];
		const todayRecipe = {
			name,
			image,
		};
		return todayRecipe;
	});
	console.log(todayRecipes);
	res.send(todayRecipes);
});

app.listen(port, () => {
	console.log("Chinese cookbook server is running.....");
});
