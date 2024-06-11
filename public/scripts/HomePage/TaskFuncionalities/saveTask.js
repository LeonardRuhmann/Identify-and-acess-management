import { fetchPostTask } from "../fetchPostTask.js";

export async function saveTask() {
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
