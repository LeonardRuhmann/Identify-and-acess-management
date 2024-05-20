import { get_user_and_password } from "./getUser.js";

//This function is responsible for handling login
export function login() {
  //user and password are obtained through the function get_user_and_password (see in getUser.js)
  const { user, password } = get_user_and_password();
  fetch("http://localhost:8000/")
    .then((res) => res.json())
    .then((dataFetch) => {
      //the method some will search in whole data json to verify if there is an item that matches the user and password variables
      //returning a boolean value
      const userExist = dataFetch.some(
        (item) => item.user === user && item.password === password
      );
      //if userExist for true, will render ./home.html
      if (userExist) {
        window.location.href = "./home.html";
      } else {
        alert("User Not Exists!");
      }
    })
    //case happens some error
    .catch((error) => console.error(error));
}
