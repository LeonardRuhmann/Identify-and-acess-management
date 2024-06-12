import { getInputsArea } from "../renderUser.js";
import { deleteUserButton } from "./deleteUser.js";

export function settingsButton() {
  const settingsButton = document.getElementById("settings-icon");
  settingsButton.addEventListener("click", () => {
    settingsTemplate();
    deleteUserButton();
  });
}

function settingsTemplate() {
  const inputs = getInputsArea();
  enableInputs(inputs);

  const container = document.getElementById("container-inputs");
  const settingsTemplate = document.createElement("div");
  settingsTemplate.id = "settings-buttons";
  settingsTemplate.innerHTML = `
      <button id="update-user" >Update</button>
      <button id="delete-user">Delete</button>
  `;

  container.append(settingsTemplate);
}

function enableInputs(inputs) {
  for (let key in inputs) {
    if (inputs.hasOwnProperty(key)) {
      inputs[key].disabled = false;
    }
  }
}
