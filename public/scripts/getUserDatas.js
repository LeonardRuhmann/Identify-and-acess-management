export function getUserDatas() {
  const image = document.getElementById("profile-image-input").files[0];
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const office = document.getElementById("office").value;
  const group = document.getElementById("group").value;
  const birthday = document.getElementById("birthday").value;

  return { image, user, password, office, group, birthday };
}
