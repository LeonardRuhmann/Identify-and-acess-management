function getFileInput() {
  return document.getElementById("profile-image-input");
}

function addFileInputClick() {
  const image = document.getElementById("image-profile");

  image.addEventListener("click", () => {
    getFileInput().click();
  });
}

export function getImageProfile() {
  addFileInputClick();

  getFileInput().addEventListener("change", (e) => {
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
}
