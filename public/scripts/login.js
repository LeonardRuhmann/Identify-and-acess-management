import { get_user_and_password } from "./getUser.js";
import { userVerification } from "./userVerification.js";

//This function is responsible for handling login
export async function login() {
  //user and password are obtained through the function get_user_and_password (see in getUser.js)
  const { user, password } = get_user_and_password();
  const userExist = await userVerification(user, password);

  if (!user || !password) {
    alert("Please, fill in the fields below");
  } else if (userExist) {
    window.location.href = "./home.html";
  } else {
    alert("User Not Exists!");
  }
}
