const express = require("express");
const router = express.Router();
const listController = require("../controllers/listControllers");
const secureRoute = require("../middleware/secureRoute");

router.post("/new", secureRoute, listController.create);
router.get("/:userId", secureRoute, listController.showAll);
router.post("/:userId/:listName/add", secureRoute, listController.addMovie);
router.delete(
  "/:userId/:listName/:movieId",
  secureRoute,
  listController.removeMovie
);

module.exports = router;
