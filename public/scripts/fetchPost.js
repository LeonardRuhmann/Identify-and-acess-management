export async function fetchPostUser(image, user, password, group, birthday) {
  await fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: image,
      user: user,
      password: password,
      group: group,
      birthday: birthday,
    }),
  })
    .then(async (res) => await res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
