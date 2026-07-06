// ------------------- imports -------------------

const express = require("express");
const app = express();

const restaurants = require("./data")

// ------------------- Public -------------------

app.use(express.static("public"))

// ------------------- routes -------------------

app.get("/", (req, res) => {
  res.render("homepage.ejs")
})

app.get("/restaurants", (req, res) => {
  res.render("all-restaurants.ejs", {restaurants : restaurants})
})

app.get("/restaurants/:id", (req, res) => {
  const foundRestaurant = restaurants.find((oneRestaurant) => {
    return oneRestaurant.id === Number(req.params.id)
  })
  console.log(foundRestaurant)
  res.render("restaurants-details.ejs", {restaurant: foundRestaurant})
})

// ------------- listen on port 3000 -------------

app.listen(3000, () => {
  console.log("App is Running");
});