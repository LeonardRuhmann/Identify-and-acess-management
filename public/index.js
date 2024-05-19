function loginButton() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  fetch("http://localhost:8000/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const userExist = data.some(
        (item) => item.user === user && item.password === password
      );
      if (userExist) {
        window.location.href = "./home.html";
      } else {
        alert("Usuário não existe!");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

const inputFile = document
  .getElementById("image-profile")
  .addEventListener("click", () => {
    document.getElementById("file").click();
  });

document.getElementById("file").addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById("image-profile").src = reader.result;
  };
  console.log(reader);
  if (file) {
    reader.readAsDataURL(file);
  }
});
