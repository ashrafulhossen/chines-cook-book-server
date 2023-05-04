const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");

app.get("/", (req, res) => {
	res.send("Chinese CookBook Server is running");
});

app.listen(port, () => {
    console.log("Chinese cookbook server is running.....")
})

