export function formatDateRange(start: string, end?: string): string {
  return `${formatMonthYear(start)} – ${end ? formatMonthYear(end) : "Present"}`;
}

export function formatMonthYear(date: string): string {
  const [year, month] = date.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}
