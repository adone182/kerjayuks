export const formatedDate = (dateStr: string) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = new Date(dateStr).toLocaleDateString("id-ID", options);

  const [weekday, day, month, year] = formattedDate.split(" ");
  return {
    weekday: weekday.replace(",", ""),
    fullDate: `${day} ${month} ${year}`,
  };
};
