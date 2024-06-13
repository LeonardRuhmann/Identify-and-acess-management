import { getUrlParamId } from "../../utils/getUrlParamId.js";

export async function fetchPostTask(title, description) {
  const userId = getUrlParamId();

  await fetch("http://localhost:8000/todos/create_todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      title: title,
      description: description,
    }),
  });
}
