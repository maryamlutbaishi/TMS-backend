const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieControlller");

router.get("/search", movieController.search);
router.get("/:id", movieController.details);
router.get("/:id/credits", movieController.movieCast);
router.post("/add", movieController.create);
module.exports = router;

// route for the add
