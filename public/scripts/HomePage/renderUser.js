import { dateFormatter } from "../utils/dateFormatter.js";
import { findUserById } from "./findUserById.js";

export async function renderUser() {
  const user = await findUserById();
  const { nameInput, officeInput, birthdayInput, groupInput, imageProfile } =
    getInputsArea();
  const dateFormated = dateFormatter(user.birthday);

  nameInput.value = user.user;
  officeInput.value = user.office;
  birthdayInput.value = dateFormated;
  groupInput.value = user.group;
  imageProfile.forEach(
    (image) => (image.src = `data:image/jpeg;base64, ${user.image}`)
  );
}

export function getInputsArea() {
  const nameInput = document.getElementById("nameInput");
  const officeInput = document.getElementById("officeInput");
  const birthdayInput = document.getElementById("birthdayInput");
  const groupInput = document.getElementById("groupInput");
  const imageProfile = document.querySelectorAll(".image-profile");

  return { nameInput, officeInput, birthdayInput, groupInput, imageProfile };
}
