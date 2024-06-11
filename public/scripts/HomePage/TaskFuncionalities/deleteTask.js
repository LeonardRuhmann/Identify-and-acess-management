import { renderTask } from "../renderTask.js";

export function deleteTaskButton() {
  const deleteTaskButton = document.querySelectorAll(".task-bin");
  deleteTaskButton.forEach((element) => {
    element.addEventListener("click", () => {
      deleteTask(element.id);
    });
  });
}

async function deleteTask(elementId) {
  await fetch(`http://localhost:8000/todos/delete_todo/${elementId}`, {
    method: "DELETE",
  });
  renderTask();
}
