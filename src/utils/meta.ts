import { formatInTimeZone, toZonedTime } from "date-fns-tz";
import { ja } from "date-fns/locale/ja";

export const getDisplayDate = () => {
  return toZonedTime(new Date(), "Asia/Tokyo");
};

export const formatDate = () => {
  return formatInTimeZone(getDisplayDate(), "Asia/Tokyo", "yyyy年MM月dd日(E)", {
    locale: ja,
  });
};

// ${day.getFullYear()}年${day.getMonth() + 1}月${day.getDate()}日(${["日", "月", "火", "水", "木", "金", "土"][day.getDay()]}) ${event.time}
