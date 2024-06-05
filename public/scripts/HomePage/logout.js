export function logout() {
  const logoutButton = document.getElementById("logout-icon");

  logoutButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}
