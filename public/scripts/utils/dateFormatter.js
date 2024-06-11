export function dateFormatter(dateISO) {
  const date = new Date(dateISO);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const dateFormated = `${day}/${month}/${year}`;
  return dateFormated;
}
