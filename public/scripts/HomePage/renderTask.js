import { getUrlParamId } from "../utils/getUrlParamId.js";
import { taskTemplate } from "./taskTemplate.js";

export function taskButton() {
  const taskButton = document.getElementById("task");
  taskButton.addEventListener("click", renderTask);
}

export async function renderTask() {
  const userId = getUrlParamId();
  const tasks = await fetchGetTask(userId);
  taskTemplate(tasks);
}

export async function fetchGetTask(userId) {
  const response = await fetch(
    `http://localhost:8000/todos/get_todos/${userId}`
  );
  const data = response.json();
  return data;
}
