const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://Rbrs7:raphael07@cluster0.wwwosg8.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB"))
  .catch(() => console.log("Connexion à MongoDB échouée"));


app.use((req, res) => {
  res.json({ message: "Votre requête à bien été reçue" });
});

module.exports = app;
