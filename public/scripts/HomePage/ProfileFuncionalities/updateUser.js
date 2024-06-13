import { getUrlParamId } from "../../utils/getUrlParamId.js";

export function updateUserButton() {
  const updateUserButton = document.getElementById("update-user");
  updateUserButton.addEventListener("click", async () => {
    await updateUser();
  });
}

async function updateUser() {
  const userId = getUrlParamId();

  const { image, user, office, group, birthday } = getProfileInputs();

  if (!image) {
    return alert("Please select a image");
  } else if (!birthday) {
    return alert("Please select a birthday");
  }

  await fetchPutUser(image, user, office, group, birthday, userId);
}

function getProfileInputs() {
  const image = document.getElementById("profile-image-input").files[0];

  const user = document.getElementById("nameInput").value;
  const office = document.getElementById("officeInput").value;
  const birthday = document.getElementById("birthdayInput").value;
  const group = document.getElementById("groupInput").value;

  return { image, user, office, group, birthday };
}

async function fetchPutUser(image, user, office, group, birthday, userId) {
  const formData = new FormData();

  formData.append("image", image);
  formData.append("user", user);
  formData.append("office", office);
  formData.append("group", group);
  formData.append("birthday", birthday);

  await fetch(`http://localhost:8000/user/update_user/${userId}`, {
    method: "PUT",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  window.location.href = `./home.html?userId=${userId}`;
}
