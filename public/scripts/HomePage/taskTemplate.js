export function taskTemplate(tasks) {
  const container = document.getElementById("container");
  const taskContainer = document.createElement("div");
  taskContainer.id = "task-container";
  taskContainer.innerHTML = `
  <div id="new-task">
    <button id="new-task-button" >New Task</button>
  </div>
      `;

  container.innerHTML = ``;

  const taskContainerScroll = document.createElement("div");
  taskContainerScroll.id = "task-container-scroll";

  tasks.forEach((task) => {
    const taskContent = document.createElement("div");

    taskContent.className = "task-content";
    taskContent.innerHTML = `
      <div class="task-content-left">
      <div class="task-top">
      <div class="task-title">${task.title}</div>
      <div class="task-date">${task.date}</div>
      </div>
      <div class="task-description"><p>${task.description}</p></div>
      </div>
      <div class="task-content-right">
      <div class="task-bin"><img src="assets/icons/bin.png"></img></div>
      <div class="task-update"><img src="assets/icons/write.png"></img></div>
      </div>
      `;

    taskContainerScroll.append(taskContent);
    taskContainer.append(taskContainerScroll);
    container.append(taskContainer);
  });
}
