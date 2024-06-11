import { fetchPostTask } from "./fetchPostTask.js";

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

async function saveTask() {
  const taskTitleInput = document.getElementById("taskTitle");
  const taskDescriptionInput = document.getElementById("descriptionTask");

  const taskTitle = taskTitleInput.value;
  const taskDescription = taskDescriptionInput.value;

  if (!taskTitle || !taskDescription) {
    alert("Cannot save a task without content");
  } else {
    await fetchPostTask(taskTitle, taskDescription);
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
  }
}

function newTaskTemplate() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const newTaskContainer = document.createElement("div");
  newTaskContainer.id = "new-task-container";
  newTaskContainer.innerHTML = `
  <div id="taskTitleContainer">
   <label id="title" for="titleTask">Title</label>
   <input id="taskTitle" type="text" />
  </div>
  <div id="taskDescriptionContainer">
   <label id="description" for="descriptionTask">Description</label>
   <textarea id="descriptionTask" name="descriptionTask" /></textarea>
  </div>
  <div id="saveTaskButton">
    <button>Save</button>
  </div>
  `;

  container.append(newTaskContainer);
}
