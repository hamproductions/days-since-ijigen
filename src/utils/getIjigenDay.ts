const IJIGENDAY1 = new Date("2023-12-09T00:00:00+09:00");
const ONEDAY = 24 * 60 * 60 * 1000;
export const getIjigenDay = () =>
  Math.floor((new Date().valueOf() - IJIGENDAY1.valueOf()) / ONEDAY) + 1;
