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
