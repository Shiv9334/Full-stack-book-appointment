const express = require("express");
const router = express.Router();
const path = require("path");

//const rootdir = require('../util/path');
const productsController = require("../controllers/mainController");

router.get("/", productsController.getDetails);
router.post("/", productsController.AddDetails);
router.delete("/", productsController.deleteUser);
router.post("/", productsController.editUser);

module.exports = router;
