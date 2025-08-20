const express = require("express");
const router = express.Router();
const listController = require("../controllers/listControllers");
const secureRoute = require("../middleware/secureRoute");

router.post("/new", secureRoute, listController.create);
router.get("/", secureRoute, listController.showAll);
router.get("/:id", secureRoute, listController.oneList);
router.put("/:id", secureRoute, listController.edit);
router.delete("/:id", secureRoute, listController.deleteList);

module.exports = router;
