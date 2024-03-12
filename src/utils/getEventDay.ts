const ONEDAY = 24 * 60 * 60 * 1000;
export const getEventDay = (date: Date) =>
  Math.floor((new Date().valueOf() - date.valueOf()) / ONEDAY) + 1;
