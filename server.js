const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const cors = require("cors");
const app = express();
const movieRoutes = require("./routes/movieRoutes");
const listRoutes = require("./routes/listRoutes");

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(logger("dev"));

app.use("/movies", movieRoutes);
app.use("/list", listRoutes);

mongoose.connect(process.env.DB_URL);
mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});

app.listen(3000, () => {
  console.log("App is listening!");
});
