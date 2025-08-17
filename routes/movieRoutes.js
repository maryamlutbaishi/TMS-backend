const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieControlller");

router.get("/search/:query", movieController.search);

module.exports = router;
