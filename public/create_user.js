import { fetchPostUser } from "./scripts/fetchPost.js";
import { getUserDatas } from "./scripts/getUserDatas.js";
import { getUser } from "./scripts/getUser.js";
import { getImageProfile } from "./scripts/renderImageProfile.js";

getImageProfile();

async function createUser() {
  const { image, user, password, group, birthday } = getUserDatas();

  const userExist = await getUser(user, password);

  if (!user || !password || !birthday) {
    alert("Please, fill in the fields below");
  } else {
    if (userExist) {
      alert("This user already exists");
    } else {
      await fetchPostUser(image, user, password, group, birthday);

      const userId = await getUser(user, password).then((item) => {
        return item._id;
      });

      window.location.href = `./home.html?userId=${userId}`;
    }
  }
}

document
  .getElementById("createUserButton")
  .addEventListener("click", createUser);
