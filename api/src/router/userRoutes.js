const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/create_user", upload.single("image"), UserController.createUser);
router.get("/get_user", UserController.getUser);
router.delete("/delete_user/:id", UserController.deleteUser);
router.put(
  "/update_user/:id",
  upload.single("image"),
  UserController.updateUser
);

module.exports = router;
