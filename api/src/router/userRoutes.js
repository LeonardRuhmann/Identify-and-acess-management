const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");

router.post("/", UserController.createUser);
router.get("/", UserController.getUser);

module.exports = router;
