const SCHOOL_YEAR_START_MONTH = 7;

export function schoolYearOf(date) {
  const start =
    date.getMonth() >= SCHOOL_YEAR_START_MONTH
      ? date.getFullYear()
      : date.getFullYear() - 1;
  return `${start}-${String(start + 1).slice(-2)}`;
}

export const CURRENT_SCHOOL_YEAR = schoolYearOf(new Date());

export const CURRENT_GRAD_YEAR = Number(CURRENT_SCHOOL_YEAR.slice(0, 4)) + 1;

export function parseEventDate(dateStr) {
  if (!dateStr || dateStr === "TBD") return null;
  const parts = dateStr.split(" ");
  const date =
    !dateStr.includes(",") && parts.length === 2
      ? new Date(`${parts[0]} 1, ${parts[1]}`)
      : new Date(dateStr);
  return isNaN(date) ? null : date;
}

export function isUpcoming(event, now = new Date()) {
  const date = parseEventDate(event.date);
  if (!date) return true;
  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return date >= endOfToday;
}
