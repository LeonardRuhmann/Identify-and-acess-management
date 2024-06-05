import { fetchGet } from "./scripts/fetchGet.js";

async function findUser() {
  const id = getUrlParamId();
  const allUsers = await fetchGet();

  const user = allUsers.find((user) => user._id === id);
  return user;
}

function getUrlParamId() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("userId");
  return id;
}

async function renderUser() {
  const user = await findUser();
  console.log(user);

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

renderUser();

function logout() {
  const logoutButton = document.getElementById("logout-icon");

  logoutButton.addEventListener("click", () => {
    window.location.href = "./login.html";
  });
}

logout();
