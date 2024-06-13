import { getUrlParamId } from "../../utils/getUrlParamId.js";
import { renderUser } from "../renderUser.js";

export function seeProfileButton() {
  const profileButton = document.querySelector(".image-profile");
  profileButton.addEventListener("click", seeProfile);
}

export function seeProfile() {
  const userId = getUrlParamId();
  window.location.href = `./home.html?userId=${userId}`;
  renderUser();
}
