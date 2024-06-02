import { findUser } from "./findUser.js";
import { getUser } from "./getUser.js";

//This function is responsible for handling login
export async function login() {
  //user and password are obtained through the function findUser (see in getUser.js)
  const { user, password } = findUser();
  const userExist = await getUser(user, password);

  if (!user || !password) {
    alert("Please, fill in the fields below");
  } else if (userExist) {
    const userId = userExist._id;

    window.location.href = `./home.html?userId=${userId}`;
  } else {
    alert("User Not Exists!");
  }
}
