import { fetchPostUser } from "../utils/fetchPost.js";
import { findUser } from "../utils/findUser.js";
import { getUserDatas } from "./getUserDatas.js";

async function handleCreateUser() {
  const { image, user, password, office, group, birthday } = getUserDatas(
    "profile-image-input",
    "user",
    "password",
    "office",
    "group",
    "birthday"
  );

  const userExist = await findUser(user, password);

  if (!user || !password || !birthday) {
    alert("Please, fill in the fields below");
  } else if (!image) {
    alert("Please, upload a profile photo.");
  } else {
    if (userExist) {
      alert("This user already exists");
    } else {
      await fetchPostUser(image, user, password, office, group, birthday);

      const userId = await findUser(user, password).then((item) => {
        return item._id;
      });

      window.location.href = `./home.html?userId=${userId}`;
    }
  }
}

export function createUserButton() {
  return document
    .getElementById("createUserButton")
    .addEventListener("click", handleCreateUser);
}
