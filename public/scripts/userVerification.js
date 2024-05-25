import { fetchGet } from "./fetchGet.js";

export async function userVerification(user, password) {
  const userArray = await fetchGet();

  //the method some will search in whole data json to verify if there is an item that matches the user and password variables
  //returning a boolean value
  const userExist = userArray.some(
    (item) => item.user === user && item.password === password
  );
  return userExist;
}
