export async function fetchGet() {
  let userArray = await fetch("http://localhost:8000/user/get_user")
    .then((res) => res.json())
    .then((dataFetch) => {
      return dataFetch;
    });
  return userArray;
}
