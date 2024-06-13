import { getImageProfile } from "../../utils/renderImageProfile.js";
import { getInputsArea } from "../renderUser.js";
import { deleteUserButton } from "./deleteUser.js";
import { updateUserButton } from "./updateUser.js";

export function settingsButton() {
  const settingsButton = document.getElementById("settings-icon");
  let isTemplateGenerated = false;

  settingsButton.addEventListener("click", () => {
    if (!isTemplateGenerated) {
      settingsTemplate();
      deleteUserButton();
      updateUserButton();
      getImageProfile();
      isTemplateGenerated = true;
    }
  });
}

function settingsTemplate() {
  const inputs = getInputsArea();
  enableInputs(inputs);
  inputs.birthdayInput.type = "date";
  inputs.imageProfile.forEach((element) => {
    element.src = "./assets/profile.png";
  });

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
