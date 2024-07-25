export function formatDate(dateString) {
  const date = new Date(dateString);

  // Get the month, date, and year
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
