import { fetchGet } from "../utils/fetchGet.js";

export async function findUserById() {
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
