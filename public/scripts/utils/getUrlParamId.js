export function getUrlParamId() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("userId");
  return id;
}
