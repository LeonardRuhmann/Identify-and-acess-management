import { findUserById } from "./findUserById.js";

export async function renderUser() {
  const user = await findUserById();

  const inputs = getInputsArea();

  inputs.nameInput.value = user.user;
  inputs.officeInput.value = user.office;
  inputs.birthdayInput.value = user.birthday;
  inputs.groupInput.value = user.group;
  inputs.imageProfile.forEach(
    (image) => (image.src = `data:image/jpeg;base64, ${user.image}`)
  );
}

function getInputsArea() {
  const nameInput = document.getElementById("nameInput");
  const officeInput = document.getElementById("officeInput");
  const birthdayInput = document.getElementById("birthdayInput");
  const groupInput = document.getElementById("groupInput");
  const imageProfile = document.querySelectorAll(".image-profile");

  return { nameInput, officeInput, birthdayInput, groupInput, imageProfile };
}
