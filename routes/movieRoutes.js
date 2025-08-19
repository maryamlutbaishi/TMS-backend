const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieControlller");

router.get("/search", movieController.search);
router.get("/:id",movieController.details)
router.get("/:id/credits", movieController.movieCast)
module.exports = router;
