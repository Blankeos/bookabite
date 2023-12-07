import dayjs from "dayjs";

/** Our main utility for formatting date string/dates into readable dates for UI. */
export function formatDate(date: dayjs.ConfigType): string {
	return dayjs(date).format("MMMM DD, YYYY");
}
