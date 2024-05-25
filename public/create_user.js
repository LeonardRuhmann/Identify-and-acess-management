import { fetchPostUser } from "./scripts/fetchPost.js";
import { get_user_and_password } from "./scripts/getUser.js";
import { userVerification } from "./scripts/userVerification.js";

// const inputFile = document
//   .getElementById("image-profile")
//   .addEventListener("click", () => {
//     document.getElementById("file").click();
//   });

// document.getElementById("file").addEventListener("change", (e) => {
//   const file = e.target.files[0];
//   const reader = new FileReader();
//   reader.onload = () => {
//     document.getElementById("image-profile").src = reader.result;
//   };
//   console.log(reader);
//   if (file) {
//     reader.readAsDataURL(file);
//   }
// });

async function createUser() {
  const { user, password } = get_user_and_password();
  const userExist = await userVerification(user, password);

  if ((user, password === "")) {
    alert("Please, fill in the fields below");
  } else {
    if (userExist) {
      alert("This user already exists");
    } else {
      await fetchPostUser(user, password);
      window.location.href = "./home.html";
    }
  }
}

document
  .getElementById("createUserButton")
  .addEventListener("click", createUser);
