export function getUser() {
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;

  return { user, password };
}
