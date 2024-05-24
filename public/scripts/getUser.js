export function get_user_and_password() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  console.log(user);

  return { user, password };
}
