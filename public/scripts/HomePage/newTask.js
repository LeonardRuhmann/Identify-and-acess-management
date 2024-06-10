export function newTaskButton() {
  const newTaskButton = document.getElementById("new-task-button");
  newTaskButton.addEventListener("click", newTask);
}

function newTask() {
  const container = document.getElementById("container");
  container.innerHTML = "";
}

function newTaskTemplate() {
  const container = document.getElementById("container");
}
