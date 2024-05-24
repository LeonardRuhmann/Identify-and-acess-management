import { get_user_and_password } from "./getUser.js";

export async function fetchPostUser() {
  const { user, password } = get_user_and_password();

  if ((user, password === "")) {
    alert("Please, fill in the fields below ");
  } else {
    await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        password: password,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));

    window.location.href = "./home.html";
  }
}
