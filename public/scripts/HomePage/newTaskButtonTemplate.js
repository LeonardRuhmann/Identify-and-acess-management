export function newTaskButtonTemplate() {
  const container = document.getElementById("container");
  const taskContainer = document.createElement("div");
  const newTaskButton = document.createElement("div");

  container.innerHTML = ``;
  taskContainer.id = "task-container";
  newTaskButton.id = "new-task";
  newTaskButton.innerHTML = `
           <button id="new-task-button" >New Task</button>

    `;

  taskContainer.append(newTaskButton);
  container.append(taskContainer);
}
