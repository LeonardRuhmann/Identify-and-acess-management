import { getUrlParamId } from "../../utils/getUrlParamId.js";

export function deleteUserButton() {
  const deleteUserButton = document.getElementById("delete-user");
  deleteUserButton.addEventListener("click", deleteUser);
}

async function deleteUser() {
  const userId = getUrlParamId();
  console.log(userId);

  await fetch(`http://localhost:8000/user/delete_user/${userId}`, {
    method: "DELETE",
  });

  await fetch(`http://localhost:8000/todos/delete_todos/${userId}`, {
    method: "DELETE",
  });

  window.location.href = "./index.html";
}
