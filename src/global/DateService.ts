const dateParseUtility = (date: Date, options: Intl.DateTimeFormatOptions) => date.toLocaleDateString("en-US", options);
const dateToMonths = (date: Date) => dateParseUtility(date, {month: "short", year: "numeric"});

export const parseMonths = (start: string, end: Nullable<string>) => {
  const dateStart = dateToMonths(new Date(start));
  const dateEnd = end && end > start
    ? dateToMonths(new Date(end))
    : end ? dateStart : "Present";
  return dateEnd !== dateStart ? `${dateStart} - ${dateEnd}` : dateStart;
}