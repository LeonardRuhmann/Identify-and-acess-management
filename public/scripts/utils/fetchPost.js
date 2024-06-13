export async function fetchPostUser(
  image,
  user,
  password,
  office,
  group,
  birthday
) {
  const formData = new FormData();

  console.log(image);

  formData.append("image", image);
  formData.append("user", user);
  formData.append("password", password);
  formData.append("office", office);
  formData.append("group", group);
  formData.append("birthday", birthday);

  console.log(formData);

  await fetch("http://localhost:8000/user/create_user", {
    method: "POST",
    body: formData,
  })
    .then(async (res) => await res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
