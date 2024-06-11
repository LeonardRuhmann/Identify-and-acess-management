import { getUrlParamId } from "../../utils/getUrlParamId.js";
import { renderUser } from "../renderUser.js";

export function seeProfile() {
  const profileButton = document.querySelector(".image-profile");
  profileButton.addEventListener("click", () => {
    const userId = getUrlParamId();
    window.location.href = `./home.html?userId=${userId}`;
    renderUser();
  });
}
