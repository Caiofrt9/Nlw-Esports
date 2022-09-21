export function convertMinutesToHourString(minutes: number) {
  const hour = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  return `${String(hour).padStart(2, "0")}:${String(minutesLeft).padStart(
    2,
    "0"
  )}`;
}