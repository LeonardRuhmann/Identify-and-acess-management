export async function fetchPostUser(image, user, password, group, birthday) {
  const formData = new FormData();

  formData.append("image", image);
  formData.append("user", user);
  formData.append("password", password);
  formData.append("group", group);
  formData.append("birthday", birthday);

  await fetch("http://localhost:8000/create_user", {
    method: "POST",
    body: formData,
  })
    .then(async (res) => await res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
