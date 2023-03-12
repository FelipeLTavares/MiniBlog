const express = require("express");

const GenericController = require("./postControllers.js");
const genericController = new GenericController();

const router = express.Router();

router.get("/", genericController.Get);
router.post("/", genericController.Create);
router.put("/", genericController.Update);
router.delete("/", genericController.Delete);

module.exports = router;
