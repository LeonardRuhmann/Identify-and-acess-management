export function newTaskTemplate() {
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
