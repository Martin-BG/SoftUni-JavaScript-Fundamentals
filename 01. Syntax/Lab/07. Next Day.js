function calcNextDay(year, month, day) {
  const oneDay = 24 * 60 * 60 * 1000;
  const date = new Date(year, month - 1, day);
  const nextDate = new Date(date.getTime() + oneDay);
  return [
    nextDate.getFullYear(),
    nextDate.getMonth() + 1,
    nextDate.getDate()
  ].join('-');
}

console.log(calcNextDay(2016, 9, 30));
