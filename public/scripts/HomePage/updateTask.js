import { getUrlParamId } from "../utils/getUrlParamId.js";
import { newTaskTemplate } from "./newTaskTemplate.js";
import { fetchGetTaskByUserId, renderTask } from "./renderTask.js";

export function updateTaskButton() {
  const updateTaskButton = document.querySelectorAll(".task-update");
  updateTaskButton.forEach((element) => {
    element.addEventListener("click", () => {
      updateTask(element.id);
    });
  });
}

async function updateTask(elementId) {
  newTaskTemplate();

  const userId = await getUrlParamId();
  const tasks = await fetchGetTaskByUserId(userId);
  const foundTask = tasks.find((task) => {
    return task._id === elementId;
  });
  const taskTitleInput = document.getElementById("taskTitle");
  const taskDescriptionInput = document.getElementById("descriptionTask");

  taskTitleInput.value = foundTask.title;
  taskDescriptionInput.value = foundTask.description;

  saveTaskButton(elementId);
}

function saveTaskButton(elementId) {
  const updateTaskButton = document.getElementById("saveTaskButton");

  updateTaskButton.addEventListener("click", async () => {
    await fetchUpdateTask(elementId);
  });
}

async function fetchUpdateTask(elementId) {
  const titleTask = document.getElementById("taskTitle").value;
  const descriptionTask = document.getElementById("descriptionTask").value;

  await fetch(`http://localhost:8000/todos/update_todo/${elementId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: titleTask,
      description: descriptionTask,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  renderTask();
}
