const express = require("express");
const router = express.Router();
const ToDoController = require("../controllers/ToDoController.js");

router.post("/create_todo", ToDoController.createToDo);
router.delete("/delete_todo/:id", ToDoController.deleteToDo);
router.put("/update_todo/:id", ToDoController.updateToDo);
router.get("/get_todos/:userId", ToDoController.getTodosByUserId);

module.exports = router;
