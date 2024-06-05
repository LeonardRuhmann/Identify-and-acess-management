import { fetchPostUser } from "../utils/fetchPost.js";
import { getUserDatas } from "./getUserDatas.js";
import { getUser } from "../utils/getUser.js";

async function handleCreateUser() {
  const { image, user, password, office, group, birthday } = getUserDatas();

  const userExist = await getUser(user, password);

  if (!user || !password || !birthday) {
    alert("Please, fill in the fields below");
  } else if (!image) {
    alert("Please, upload a profile photo.");
  } else {
    if (userExist) {
      alert("This user already exists");
    } else {
      console.log(office);
      await fetchPostUser(image, user, password, office, group, birthday);

      const userId = await getUser(user, password).then((item) => {
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
