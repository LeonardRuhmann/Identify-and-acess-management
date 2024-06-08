import { fetchGet } from "../utils/fetchGet.js";
import { getUrlParamId } from "../utils/getUrlParamId.js";

export async function findUserById() {
  const id = getUrlParamId();
  const allUsers = await fetchGet();

  const user = allUsers.find((user) => user._id === id);
  return user;
}
