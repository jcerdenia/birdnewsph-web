export function phDate(options: Intl.DateTimeFormatOptions = {}) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    ...options,
  });
}
