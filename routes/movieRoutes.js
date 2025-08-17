const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieControlller");

router.get("/search", movieController.search);

module.exports = router;
