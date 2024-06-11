import { newTaskTemplate } from "./newTaskTemplate.js";
import { saveTask } from "./saveTask.js";

export function newTaskButton() {
  const newTaskButton = document.getElementById("new-task-button");
  newTaskButton.addEventListener("click", newTask);
}

function newTask() {
  newTaskTemplate();
  saveTaskButton();
}

function saveTaskButton() {
  const saveTaskButton = document.getElementById("saveTaskButton");
  saveTaskButton.addEventListener("click", saveTask);
}
