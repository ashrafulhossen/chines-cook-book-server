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
})

app.get("/chefs/:id", (req, res) => {
    const id = req.params.id;

    const matchedChefRecipies = recipes.find(recipe => recipe._id === id);
    res.send(matchedChefRecipies);
})


app.listen(port, () => {
    console.log("Chinese cookbook server is running.....")
})

