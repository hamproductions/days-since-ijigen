import { fromZonedTime } from "date-fns-tz";

export const getDisplayDate = () => {
  return fromZonedTime(new Date(), "Asia/Tokyo");
};
