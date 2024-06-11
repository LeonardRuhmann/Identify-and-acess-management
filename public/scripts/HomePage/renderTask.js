import { getUrlParamId } from "../utils/getUrlParamId.js";
import { deleteTaskButton } from "./TaskFuncionalities/deleteTask.js";
import { newTaskButton } from "./TaskFuncionalities/newTask.js";
import { newTaskButtonTemplate } from "./TaskFuncionalities/newTaskButtonTemplate.js";
import { taskTemplate } from "./TaskFuncionalities/taskTemplate.js";
import { updateTaskButton } from "./TaskFuncionalities/updateTask.js";

export function taskButton() {
  const taskButton = document.getElementById("task");
  taskButton.addEventListener("click", renderTask);
}

export async function renderTask() {
  const userId = getUrlParamId();
  const tasks = await fetchGetTaskByUserId(userId);

  if (tasks.error === "Without ToDos") {
    newTaskButtonTemplate();
  } else {
    taskTemplate(tasks);
    deleteTaskButton();
    updateTaskButton();
  }
  newTaskButton();
}

export async function fetchGetTaskByUserId(userId) {
  const response = await fetch(
    `http://localhost:8000/todos/get_todos/${userId}`
  );
  const data = response.json();
  return data;
}
