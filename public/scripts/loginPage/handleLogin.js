import { findUser } from "../utils/findUser.js";
import { getUser } from "../utils/getUser.js";

//This function is responsible for handling login
export async function handleLogin() {
  //user and password are obtained through the function getUser (see in getUser.js)
  const { user, password } = getUser();
  const userExist = await findUser(user, password);

  if (!user || !password) {
    alert("Please, fill in the fields below");
  } else if (userExist) {
    const userId = userExist._id;

    window.location.href = `./home.html?userId=${userId}`;
  } else {
    alert("User Not Exists!");
  }
}

export function loginButton() {
  return document
    .getElementById("loginButton")
    .addEventListener("click", handleLogin);
}
