const express = require("express");
const router = express.Router();
const listController = require("../controllers/listControllers");

router.post("/new", listController.create);
router.get("/", listController.showAll);
router.get("/:id", listController.oneList);
router.put("/:id", listController.edit);
router.delete("/:id", listController.deleteList);

module.exports = router;
